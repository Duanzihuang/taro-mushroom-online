import { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import './index.scss'

import { fetch } from '../../utils/request'
import { GET_STUDY_PROGRESS } from '../../constants/api'

class Study extends Component {
  config = {
    navigationBarTitleText: '学习进度'
  }

  constructor() {
    super()

    this.state = {
      isEmpty: false, //是否为空【是否有学习记录】
      studyProgresses: []
    }
  }

  componentDidMount() {
    // 获取学习进度数据
    this.getStudyProgressData()
  }

  getStudyProgressData = async () => {
    const result = await fetch({
      url: GET_STUDY_PROGRESS
    })

    this.setState({
      studyProgresses: result.data.message,
      isEmpty: result.data.message.length === 0
    })
  }

  render() {
    const { isEmpty, studyProgresses } = this.state
    return (
      <View className="study-container">
        {isEmpty ? (
          <Text className="no-study-tip">
            您还没有任何学习记录哦，赶快去学习吧~
          </Text>
        ) : (
          <View>
            {studyProgresses.map(item => {
              return (
                <View key={item.sid} className="study-item">
                  <Image className="img" src={item.icon} />
                  <View className="meta">
                    <View className="title">
                      <Text>{item.title}</Text>
                    </View>
                    <View className="progress">
                      <Text>
                        已学习{item.study_hour}课时/{item.total_hour || 0}课时
                      </Text>
                    </View>
                  </View>
                </View>
              )
            })}
          </View>
        )}
      </View>
    )
  }
}

export default Study
