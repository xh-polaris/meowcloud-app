import { http } from '@/utils/http'

/**
 * 团队列表
 */
export const getTeamList = (page) => {
  return http({
    url: `/meowcloud/api/team/${page.pageNum}/${page.pageSize}`,
    method: 'GET',
  })
}
/**
 * 团队空间相册信息
 */
export const getAlbumInfo = (params) => {
  const { id, pageNum, pageSize } = params
  return http({
    url: `/meowcloud/api/album/basic/team/${id}/${pageNum}/${pageSize}`,
    method: 'GET',
  })
}
/**
 * 创建相册
 */
export const createAlbumApi = (params) => {
  return http({
    url: `/meowcloud/api/album`,
    method: 'POST',
    data: params,
  })
}
