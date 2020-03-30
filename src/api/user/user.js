import request from '@/utils/request'

/**
 * 登陆
 * @param {account, password} data 账号密码
 */
export function login(data) {
  return request({
    url: '/cultures/user/loginByPassword',
    method: 'post',
    data
  })
}

/**
 * 退出登陆
 */
export function logout() {
  return request({
    url: '/cultures/user/logout',
    method: 'post'
  })
}

