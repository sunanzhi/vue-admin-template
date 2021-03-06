import request from '@/utils/request'

export function adminList(data) {
  return request({
    url: '/cultures/culturesWorksPainting/adminList',
    method: 'post',
    data
  })
}

export function get(data) {
  return request({
    url: '/cultures/culturesWorksPainting/get',
    method: 'post',
    data
  })
}

export function add(data) {
  return request({
    url: '/cultures/culturesWorksPainting/add',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: '/cultures/culturesWorksPainting/edit',
    method: 'post',
    data
  })
}

export function list(data) {
  return request({
    url: '/cultures/culturesWorksPainting/list',
    method: 'post',
    data
  })
}

export function detail(data) {
  return request({
    url: '/cultures/culturesWorksPainting/detail',
    method: 'post',
    data
  })
}

