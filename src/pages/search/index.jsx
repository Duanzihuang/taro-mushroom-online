import { Component } from '@tarojs/taro'
import { View, Text, Input, Navigator, Image } from '@tarojs/components'

import { fetch } from '../../utils/request'
import { SEARCH_COURSE } from '../../constants/api'

// 导入样式
import './index.scss'

class Search extends Component {
  constructor() {
    super()

    this.state = {
      isFocus: true, // 是否聚焦
      keyword: '',
      courses: []
    }
  }

  // 取消搜索
  cancel = () => {
    this.setState(
      {
        isFocus: false,
        keyword: ''
      },
      () => {
        this.getCoursesData()
      }
    )
  }

  // 搜索课程数据
  getCoursesData = async () => {
    const result = await fetch({
      url: SEARCH_COURSE,
      data: {
        name: this.state.keyword
      }
    })

    this.setState({
      courses: result.data.message
    })
  }

  render() {
    const { keyword, isFocus, courses } = this.state
    return (
      <View className="search-container">
        <View className="search-head">
          <Input
            focus={true}
            className="search-input"
            value={keyword}
            onInput={e => this.setState({ keyword: e.detail.value })}
            placeholder="请输入课程名称"
            type="text"
            onConfirm={this.getCoursesData}
            onFocus={() => this.setState({ isFocus: true })}
          />
          <View className="iconfont icon-search"></View>
          {isFocus && (
            <View className="search-button" onClick={this.cancel}>
              取消
            </View>
          )}
        </View>
        <View className="search-body">
          {courses.map(item => {
            return (
              <Navigator
                key={item.id}
                url={`/pages/course-detail/main?id=${item.id}`}
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
          {courses.length == 0 && (
            <View className="empty">
              <Text>暂无内容哦,请输入关键字搜索~</Text>
            </View>
          )}
        </View>
      </View>
    )
  }
}

export default Search
