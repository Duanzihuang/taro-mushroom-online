import Taro from '@tarojs/taro'
import { BASEURL } from '../constants/api'
import { getToken } from './token'

export const fetch = options => {
  const { url, method = 'GET', data } = options

  const header = {}
  if (method === 'POST') {
    header['content-type'] = 'application/json'
  }

  // 设置token
  const token = getToken()
  if (token) {
    header['Authorization'] = token
  }

  return Taro.request({
    url: BASEURL + url,
    data,
    method,
    header
  })
}
