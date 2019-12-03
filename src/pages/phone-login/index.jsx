import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Image } from '@tarojs/components'

import './index.scss'

import { fetch } from '../../utils/request'
import { GET_VCODE, PHONE_LOGIN } from '../../constants/api'
import { setToken } from '../../utils/token'

// 导入图片等静态资源
import phoneLogin from '../../assets/images/phone_login@2x.png'

class PhoneLogin extends Component {
  state = {
    phone: '17704051019', // 手机号
    vcode: '' // 验证码
  }

  config = {
    navigationBarTitleText: ''
  }

  changeValue = e => {
    this.setState({
      [e.target.dataset.name]: e.target.value
    })
  }

  // 获取验证码
  getVcode = async () => {
    if (this.state.phone.trim().length === 0) {
      Taro.showToast({
        title: '手机号不能为空',
        icon: 'none',
        duration: 1000
      })
      return
    }

    const result = await fetch({
      url: GET_VCODE,
      data: {
        phone: this.state.phone
      }
    })

    if (result.statusCode === 200) {
      Taro.showToast({
        title: '' + result.data.vcode,
        icon: 'none',
        duration: 1000
      })
    }
  }

  // 手机号登录
  phoneLogin = async () => {
    if (this.state.phone.trim().length === 0) {
      Taro.showToast({
        title: '手机号不能为空',
        icon: 'none',
        duration: 1000
      })
      return
    }

    if (this.state.vcode.trim().length === 0) {
      Taro.showToast({
        title: '验证码不能为空',
        icon: 'none',
        duration: 1000
      })
      return
    }

    const result = await fetch({
      url: PHONE_LOGIN,
      method: 'POST',
      data: this.state
    })

    if (result.data.status === 0) {
      // 登录成功
      // 保存token
      setToken(result.data.token)

      // 跳转到首页
      Taro.reLaunch({
        url: '/pages/home/index'
      })
    } else {
      Taro.showToast({
        title: result.data.message,
        icon: 'none',
        duration: 1000
      })
    }
  }

  render() {
    const { phone, vcode } = this.state
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
            value={phone}
            data-name="phone"
            onInput={this.changeValue}
          />
          <View className="get_vcode" onClick={this.getVcode}>
            获取验证码
          </View>
          <Input
            className="vcode"
            placeholder="请输入验证码"
            type="number"
            value={vcode}
            data-name="vcode"
            onInput={this.changeValue}
          />
        </View>
        <View className="phone-login" onClick={this.phoneLogin}>
          {/* <Image
            className="img"
            src={phoneLogin}
            alt=""
          /> */}
          <Text>登录</Text>
        </View>
      </View>
    )
  }
}

export default PhoneLogin
