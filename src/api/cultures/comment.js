import request from '@/utils/request'

export function add(data) {
  return request({
    url: '/cultures/culturesComment/add',
    method: 'post',
    data
  })
}

export function list(data) {
  return request({
    url: '/cultures/culturesComment/list',
    method: 'post',
    data
  })
}
