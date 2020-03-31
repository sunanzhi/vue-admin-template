import request from '@/utils/request'

export function setStatus(data) {
  return request({
    url: '/cultures/cultures/setStatus',
    method: 'post',
    data
  })
}
