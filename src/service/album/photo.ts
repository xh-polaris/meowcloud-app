import { http } from '@/utils/http'
/**
 * 分页获取所有照片
 */
export const getPhotoList = (params) => {
  const { pageNum, pageSize } = params
  return http({
    url: `/meowcloud/api/photo/${pageNum}/${pageSize}`,
    method: 'GET',
  })
}
/**
 * 根据id获取照片
 */
export const getPhotoById = (params) => {
  const { id } = params
  return http({
    url: `/meowcloud/api/photo/${id}`,
    method: 'GET',
  })
}
/**
 * 根据id获取相片详情
 */
export const getPhotoDetailById = (params) => {
  const { id } = params
  return http({
    url: `/meowcloud/api/photo/detail/${id}`,
    method: 'GET',
  })
}
