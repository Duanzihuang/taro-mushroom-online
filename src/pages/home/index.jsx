import { Component } from '@tarojs/taro'
import { View, Swiper, Image, ScrollView, Navigator } from '@tarojs/components'

// 导入样式
import './index.scss'

import { fetch } from '../../utils/request'
import {
  GET_SWIPERS,
  GET_RECOMMEND_COURSE,
  GET_HOT_VIDEO
} from '../../constants/api'

// 导入相关图片
import arrowImage from '../../assets/images/arrow@2x.png'

// 导入子组件
import SearchBar from '../../components/SearchBar'

class Home extends Component {
  constructor() {
    super()

    this.state = {
      swipers: [], // 轮播图
      courses: [], // 推荐课程
      videos: [] // 热门视频
    }
  }

  componentDidMount() {
    this.getSwipersData()

    this.getRecommendCoursesData()

    this.getHotVideosData()
  }

  // 获取轮播图数据
  getSwipersData = async () => {
    const result = await fetch({
      url: GET_SWIPERS
    })

    this.setState({
      swipers: result.data.message
    })
  }

  // 获取推荐课程数据
  getRecommendCoursesData = async () => {
    const result = await fetch({
      url: GET_RECOMMEND_COURSE
    })

    this.setState({
      courses: result.data.message
    })
  }

  // 获取热门视频数据
  getHotVideosData = async () => {
    const result = await fetch({
      url: GET_HOT_VIDEO
    })

    this.setState({
      videos: result.data.message
    })
  }

  // 渲染轮播图
  renderSwipers = () => {
    const { swipers } = this.state

    return (
      <Swiper
        className="swiper"
        indicatorActiveColor="#fff"
        circular
        indicatorDots
        autoplay
      >
        {swipers.map(item => {
          return (
            <SwiperItem key={item.id} className="swiper-item">
              <Image className="swiper-item-image" src={item.img_url} />
            </SwiperItem>
          )
        })}
      </Swiper>
    )
  }

  // 渲染推荐课程
  renderRecommendCourses = () => {
    const { courses } = this.state
    return (
      <View>
        <View className="tips">
          <Text className="title">推荐课程</Text>
          <Image
            className="img"
            onClick={this.goToCoursePage}
            src={arrowImage}
            alt=""
          />
        </View>
        <ScrollView scroll-x className="course-container">
          {courses.map(item => {
            return (
              <Navigator
                key={item.id}
                url={`/pages/course-detail/index?id=${item.relation_id}`}
                className="course-item"
              >
                <Image className="img" src={item.icon} alt="" />
              </Navigator>
            )
          })}
        </ScrollView>
      </View>
    )
  }

  // 渲染热门视频
  renderHotVideos = () => {
    const { videos } = this.state
    return (
      <View>
        <View className="tips">
          <Text className="title">热门视频</Text>
          <Image
            onClick={() => this.goToCourseDetail(3)}
            className="img"
            src={arrowImage}
            alt=""
          />
        </View>
        <View className="hot-video">
          {videos.map(item => {
            return (
              <Navigator
                key={item.id}
                url={`/pages/course-detail/index?id=${item.course_id}`}
                className="video-item"
              >
                <Image className="img" src={item.cover_photo_url} alt="" />
                <View className="title">
                  <Text>{item.name}</Text>
                </View>
                <View className="subtitle">
                  <Text>{item.view_count}人已观看</Text>
                </View>
              </Navigator>
            )
          })}
        </View>
      </View>
    )
  }

  // 切换到其它页面
  goToCoursePage = () => {
    Taro.switchTab({
      url: '/pages/course/index'
    })
  }

  // 跳转到详情页面
  goToCourseDetail = id => {
    Taro.navigateTo({
      url: `/pages/course-detail/index?id=${id}`
    })
  }

  render() {
    const { swipers, courses, videos } = this.state
    return (
      <View className="home-container">
        {/* 搜索框 */}
        <SearchBar placeholder="请输入课程的名称" />
        {/* 轮播图 */}
        {swipers.length > 0 && this.renderSwipers()}
        {/* 推荐课程 */}
        {courses.length > 0 && this.renderRecommendCourses()}
        {/* 热门视频 */}
        {videos.length > 0 && this.renderHotVideos()}
      </View>
    )
  }
}

export default Home
