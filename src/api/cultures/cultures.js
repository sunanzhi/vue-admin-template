import request from '@/utils/request'

export function setStatus(data) {
  return request({
    url: '/cultures/cultures/setStatus',
    method: 'post',
    data
  })
}

export function getTags(data) {
  return request({
    url: '/cultures/cultures/getTags',
    method: 'post',
    data
  })
}

export function setTags(data) {
  return request({
    url: '/cultures/cultures/setTags',
    method: 'post',
    data
  })
}

export function batchDelete(data) {
  return request({
    url: '/cultures/cultures/batchDelete',
    method: 'post',
    data
  })
}
