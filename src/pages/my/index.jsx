import { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'

import './index.scss'

// 导入图片
import avatarImage from '../../assets/images/avatar@2x.png'
import arrowImage from '../../assets/images/arrow@2x.png'

import { fetch } from '../../utils/request'
import { GET_MY_INFO } from '../../constants/api'

class My extends Component {
  config = {
    navigationBarTitleText: '我的',
    navigationBarTextStyle: 'white',
    navigationBarBackgroundColor: '#ff8d44'
  }

  constructor() {
    super()

    this.state = {
      userInfo: null
    }
  }

  componentDidMount() {
    // 获取用户个人信息
    this.getUserInfoData()
  }

  getUserInfoData = async () => {
    const result = await fetch({
      url: GET_MY_INFO
    })

    this.setState({
      userInfo: result.data.message
    })
  }

  // 清理缓存
  clearCache = () => {
    Taro.showToast({
      title: '缓存清理中...', //提示的内容,
      icon: 'loading', //图标,
      duration: 2000, //延迟时间,
      mask: true, //显示透明蒙层，防止触摸穿透,
      success: res => {
        setTimeout(() => {
          wx.showToast({
            title: '清理缓存成功', //提示的内容,
            icon: 'success', //图标,
            duration: 1000, //延迟时间,
            mask: true //显示透明蒙层，防止触摸穿透
          })
        }, 2000)
      }
    })
  }

  // 打电话
  contact = () => {
    Taro.makePhoneCall({
      phoneNumber: '400-618-9090'
    })
  }

  render() {
    return (
      <View className="my-container">
        <View className="header">
          <Image
            className="avatar"
            src={userInfo.avatar ? userInfo.avatar : avatarImage}
            alt=""
          />
          <Text className="nickname">{userInfo.nickname || '酷小鱼'}</Text>
        </View>
        <View className="tips">
          <View className="left">
            <View className="title">
              <Text>{userInfo.study_hour}</Text>
            </View>
            <View className="subtitle">
              <Text>累计学习小时</Text>
            </View>
          </View>
          <View className="middle">
            <View className="title">
              <Text>{userInfo.follow_count}</Text>
            </View>
            <View className="subtitle">
              <Text>我的关注</Text>
            </View>
          </View>
          <View className="right">
            <View className="title">
              <Text>{userInfo.course_count}</Text>
            </View>
            <View className="subtitle">
              <Text>我的课程</Text>
            </View>
          </View>
        </View>
        <View className="cells">
          <View className="cell">
            <Text className="title">学习历史</Text>
            <Image className="img" src={arrowImage} alt="" />
          </View>
          <View className="cell">
            <Text className="title">消息提醒</Text>
            <Image className="img" src={arrowImage} alt="" />
          </View>
          <View onClick={this.clearCache} className="cell">
            <Text className="title">清除缓存</Text>
            <Image className="img" src={arrowImage} alt="" />
          </View>
          <View className="cell">
            <Text className="title">商务合作</Text>
            <Image className="img" src={arrowImage} alt="" />
          </View>
          <View onClick={this.contact} className="cell">
            <Text className="title">在线客服</Text>
            <Image className="img" src={arrowImage} alt="" />
          </View>
        </View>
      </View>
    )
  }
}

export default My
