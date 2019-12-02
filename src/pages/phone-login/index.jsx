import { Component } from '@tarojs/taro'
import { View, Text, Input, Image } from '@tarojs/components'

import './index.scss'

// 导入图片等静态资源
import phoneLogin from '../../assets/images/phone_login@2x.png'

class PhoneLogin extends Component {
  config = {
    navigationBarTitleText: ''
  }

  render() {
    return (
      <View className="phone-login-container">
        <View>
          <Text className="phone-validate">手机号验证</Text>
        </View>
        <View style={{ marginTop: '20rpx' }}>
          <Text className="subtitle">用于即使获取课程最新信息</Text>
        </View>
        <View className="content">
          <Input
            className="phone"
            placeholder="请输入您的手机号"
            type="number"
          />
          <View className="get_vcode">获取验证码</View>
          <Input className="vcode" placeholder="请输入验证码" type="number" />
        </View>
        <View className="phone-login">
          <Image className="img" src={phoneLogin} alt="" />
        </View>
      </View>
    )
  }
}

export default PhoneLogin
