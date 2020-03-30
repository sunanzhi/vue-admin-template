import request from '@/utils/request'

/**
 * 七牛上传图片
 */
export function qiniuUploadImage(data) {
  return request({
    url: '/cultures/system/qiniuUploadImage',
    method: 'post',
    data
  })
}

