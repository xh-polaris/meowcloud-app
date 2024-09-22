import { http } from '@/utils/http'

interface LoginParams {
  authType: 'email' | 'phone' | 'wechat'
  authId: string
  appId?: number
  verifyCode: string
}
/**
 * 登录
 */
export const getLogin = (params: LoginParams) => {
  return http({
    url: `/meowchat/auth/sign_in`,
    method: 'POST',
    // query: params,
    data: params,
  })
}

/**
 * 个人中心页
 */
export const getUserCenter = () => {
  return http({
    url: `/meowcloud/api/user`,
    method: 'GET',
  })
}
