import { http } from '@/utils/http'

/**
 * 分享
 */
export const share = (targetId, targetType) => {
  const params = { targetId, targetType }
  return http({
    url: 'meowcloud/api/action/share',
    method: 'POST',
    data: params,
  })
}
/**
 * 点赞
 */
export const like = (targetId, targetType) => {
  const params = { targetId, targetType }
  return http({
    url: 'meowcloud/api/action/like',
    method: 'POST',
    data: params,
  })
}
/**
 * 取消点赞
 */
export const cancelLike = (targetId, targetType) => {
  const params = { targetId, targetType }
  return http({
    url: 'meowcloud/api/like/cancel',
    method: 'POST',
    data: params,
  })
}
/**
 * 关注
 */
export const follow = (targetId, targetType) => {
  const params = { targetId, targetType }
  return http({
    url: 'meowcloud/api/action/follow',
    method: 'POST',
    data: params,
  })
}
/**
 * 取消关注
 */
export const cancelFollow = (targetId, targetType) => {
  const params = { targetId, targetType }
  return http({
    url: 'meowcloud/api/action/follow/cancel',
    method: 'POST',
    data: params,
  })
}
