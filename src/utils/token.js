import Taro from '@tarojs/taro'

const KEY = 'mushroom-online-token'

export const setToken = token => {
  Taro.setStorageSync(KEY, token)
}

export const getToken = () => {
  return Taro.getStorageSync(KEY)
}
