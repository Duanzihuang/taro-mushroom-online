import { Component } from '@tarojs/taro'
import { View, Navigator, Image } from '@tarojs/components'

import './index.scss'

import { fetch } from '../../utils/request'
import { GET_COURSE_LIST } from '../../constants/api'

class Course extends Component {
  config = {
    navigationBarTitleText: '课程'
  }

  constructor() {
    super()

    this.state = {
      courses: []
    }
  }

  componentDidMount() {
    // 获取课程列表数据
    this.getCoursesData()
  }

  getCoursesData = async () => {
    const result = await fetch({
      url: GET_COURSE_LIST
    })

    this.setState({
      courses: result.data.message
    })
  }

  render() {
    const { courses } = this.state
    return (
      <View className="course-container">
        {courses.map(item => {
          return (
            <Navigator
              url={`/pages/course-detail/main?id=${item.id}`}
              key={item.id}
              className="course-item"
            >
              <Image src={item.icon} className="img" />
              <Text class="title">{item.title}</Text>
              <Text class="subtitle">{item.subtitle}</Text>
              {item.level === 1 && <Text className="level">初级</Text>}
              {item.level === 2 && <Text className="level">中级</Text>}
              {item.level === 3 && <Text className="level">高级</Text>}
            </Navigator>
          )
        })}
      </View>
    )
  }
}

export default Course
