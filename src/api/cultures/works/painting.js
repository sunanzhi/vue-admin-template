import request from '@/utils/request'

export function adminList(params) {
  return request({
    url: 'http://dev.tp6.test/cultures/culturesWorksPainting/adminList',
    method: 'post',
    params
  })
}
