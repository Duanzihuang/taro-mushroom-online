import { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'

class Study extends Component {
  config = {
    navigationBarTitleText: '学习进度'
  }

  render() {
    return (
      <View>
        <Text>学习进度</Text>
      </View>
    )
  }
}

export default Study
