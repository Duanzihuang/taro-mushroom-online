import Taro from '@tarojs/taro'
import { BASEURL } from '../constants/api'

export const fetch = options => {
  const { url, method = 'GET', data } = options

  const header = {}
  if (method === 'POST') {
    header['content-type'] = 'application/json'
  }

  return Taro.request({
    url: BASEURL + url,
    data,
    method,
    header
  })
}
