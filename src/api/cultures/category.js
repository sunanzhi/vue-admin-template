import request from '@/utils/request'

/**
 * 列表
 */
export function adminList() {
  return request({
    url: '/cultures/culturesCategory/adminList',
    method: 'post'
  })
}

/**
 * 设置状态
 * @param {culturesCategoryId, status} data 参数
 */
export function setStatus(data) {
  return request({
    url: '/cultures/culturesCategory/setStatus',
    method: 'post',
    data
  })
}

/**
 * 获取分类信息
 * @param {culturesCategoryId} data 参数
 */
export function get(data) {
  return request({
    url: '/cultures/culturesCategory/get',
    method: 'post',
    data
  })
}

/**
 * 编辑/更新
 * @param {culturesCategoryId, title, summary, image} data 参数
 */
export function edit(data) {
  return request({
    url: '/cultures/culturesCategory/edit',
    method: 'post',
    data
  })
}

