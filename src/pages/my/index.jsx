import { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'

class My extends Component {
  config = {
    navigationBarTitleText: '我的'
  }

  render() {
    return (
      <View>
        <Text>我的</Text>
      </View>
    )
  }
}

export default My
