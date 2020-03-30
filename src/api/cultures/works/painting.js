import request from '@/utils/request'

export function adminList(data) {
  return request({
    url: '/cultures/culturesWorksPainting/adminList',
    method: 'post',
    data
  })
}
