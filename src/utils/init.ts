import { signIn } from "@/apis/auth/auth";
import { StorageKeys, AppId, BackendEnvMap } from "@/utils/const";
import { clearCache, listCommunity } from "@/apis/community/community";
import { ref } from "vue";

export async function init() {
    clearCache();
    const accountInfo = uni.getAccountInfoSync().miniProgram;
    console.log(accountInfo.version);
    let env = uni.getStorageSync(StorageKeys.BackendEnv);
    if (!env) {
        env = BackendEnvMap[accountInfo.envVersion];
        uni.setStorageSync(StorageKeys.BackendEnv, env);
    }
    const tasks: Promise<void>[] = [];
    // 距离token过期不到一天时重新获取token
    const expireTime = uni.getStorageSync(StorageKeys.AccessToken).expireTime;
    if (!expireTime || expireTime - new Date().getTime() / 1000 < 7 * 86400) {
        tasks.push(refreshToken(accountInfo.appId));
    }
    tasks.push(checkCommunityId());
    await Promise.all(tasks);
    uni.setBackgroundFetchToken({
        token: JSON.stringify({
            communityId: uni.getStorageSync(StorageKeys.CommunityId),
            userId: uni.getStorageSync(StorageKeys.UserId),
            env: env
        })
    });
    uni.setStorageSync(
        StorageKeys.EnabledDebug,
        uni.getAppBaseInfo().enableDebug || import.meta.env.VITE_ENABLE_DEBUG
    );
    checkVersion();
}

export async function refreshToken(appId: string) {
    const res = await uni.login({
        provider: "weixin"
    });
    const signInRes = await signIn({
        authType: "wechat",
        authId: appId,
        verifyCode: res.code,
        appId: AppId
    });
    uni.setStorageSync(StorageKeys.AccessToken, {
        token: signInRes.accessToken,
        expireTime: signInRes.accessExpire
    });
    uni.setStorageSync(StorageKeys.UserId, signInRes.userId);
}

export const needChooseCommunity = ref(false);
async function checkCommunityId() {
    const res = await listCommunity({});
    const id = uni.getStorageSync(StorageKeys.CommunityId);

    if (id) {
        for (const community of res.communities) {
            if (community.id === id) {
                return;
            }
        }
    } else {
        needChooseCommunity.value = true;
    }

    // 如果storage里没有id或id无法匹配到任何一个社区，就将id赋值为最早的子社区的id
    for (let i = res.communities.length - 1; i >= 0; i--) {
        const community = res.communities[i];
        if (!community.parentId) {
            continue;
        }
        uni.setStorageSync(StorageKeys.CommunityId, community.id);
    }
}

function checkVersion() {
    const m = uni.getUpdateManager();
    m.onUpdateReady(() => {
        uni.showModal({
            title: "更新提示",
            content: "新版本已经准备好，是否重启应用？",
            success: function (res) {
                if (res.confirm) {
                    // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                    m.applyUpdate();
                }
            }
        });
    });
}
