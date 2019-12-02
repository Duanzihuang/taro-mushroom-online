import { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'

class Course extends Component {
  config = {
    navigationBarTitleText: '课程'
  }

  render() {
    return (
      <View>
        <Text>课程</Text>
      </View>
    )
  }
}

export default Course
