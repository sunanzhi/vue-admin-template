import request from '@/utils/request'

export function login(data) {
  return request({
    url: 'http://dev.tp6.test/cultures/user/loginByPassword',
    method: 'post',
    data
  })
}

