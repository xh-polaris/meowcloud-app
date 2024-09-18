import { http } from '@/utils/http'

/**
 * 团队列表
 */
export const getTeamList = () => {
  return http({
    url: `/team`,
    method: 'GET',
  })
}
/**
 * 团队空间相册信息
 * 相册类型。0为个人相册，1为团队相册
 */
export const getAlbumInfo = (albumType) => {
  return http({
    url: `/album/basic/${albumType}`,
    method: 'GET',
  })
}
