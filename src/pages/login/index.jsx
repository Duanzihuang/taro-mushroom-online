import Taro, { Component } from '@tarojs/taro'

import { View, Image, Button } from '@tarojs/components'

import './index.module.scss'

// 导入图片等静态资源
import logo from '../../assets/images/logo@2x.png'
import loginTip from '../../assets/images/login_tips@2x.png'
import wxLogin from '../../assets/images/wx_login@2x.png'

class Login extends Component {
  constructor() {
    super()

    this.state = {
      isWxLogin: false // 是否微信登录了
    }
  }

  config = {
    navigationBarTitleText: ''
  }

  phoneLogin = () => {
    Taro.navigateTo({
      url: '/pages/phone-login/index'
    })
  }

  render() {
    const { isWxLogin } = this.state
    return (
      <View style={{ height: '100%' }}>
        {!isWxLogin && (
          <View className="login-container">
            <Image className="logo" src={logo} alt="" />
            <Text className="title">蘑菇在线</Text>
            <Image className="login-tips" src={loginTip} alt="" />
            <Button open-type="getUserInfo" plain className="wx-login-button">
              <Image className="wx-login-img" src={wxLogin} alt="" />
            </Button>
            <View>
              <Text onClick={this.phoneLogin} className="phone-login">
                手机号登录
              </Text>
            </View>
            <Text className="bottom-tip">Copyright © 2019 蘑菇在线 </Text>
          </View>
        )}
      </View>
    )
  }
}

export default Login
