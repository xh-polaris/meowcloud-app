import { http } from '@/utils/http'

/**
 * 登录
 */
export const postFooAPI = (name: string) => {
  return http({
    url: `/auth/sign_in`,
    method: 'POST',
    query: { name },
    data: { name },
  })
}
