import { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'

class My extends Component {
  config = {
    navigationBarTitleText: '课程详情'
  }

  render() {
    return (
      <View>
        <Text>课程详情</Text>
      </View>
    )
  }
}

export default My
