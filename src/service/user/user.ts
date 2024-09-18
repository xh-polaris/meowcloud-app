import { http } from '@/utils/http'

interface LoginParams {
  authType: 'email' | 'phone' | 'wechat'
  authId: string
  appId?: string
  verifyCode: string
}
/**
 * 登录
 */
export const getLogin = (params: LoginParams) => {
  return http({
    url: `/auth/sign_in`,
    method: 'POST',
    // query: params,
    data: params,
  })
}
