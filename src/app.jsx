import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {
  config = {
    pages: [
      'pages/home/index',
      'pages/course/index',
      'pages/study/index',
      'pages/my/index',
      'pages/index/index',
      'pages/phone-login/index',
      'pages/login/index',
      'pages/course-detail/index'
    ],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '蘑菇在线',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#999',
      backgroundColor: '#fff',
      selectedColor: '#ff9a29',
      borderStyle: 'white',
      list: [
        {
          pagePath: 'pages/home/index',
          text: '首页',
          iconPath: 'assets/tabs/icon_home@2x.png',
          selectedIconPath: 'assets/tabs/icon_home_selected@2x.png'
        },
        {
          pagePath: 'pages/course/index',
          text: '课程',
          iconPath: 'assets/tabs/icon_course@2x.png',
          selectedIconPath: 'assets/tabs/icon_course_selected@2x.png'
        },
        {
          pagePath: 'pages/study/index',
          text: '学习',
          iconPath: 'assets/tabs/icon_study@2x.png',
          selectedIconPath: 'assets/tabs/icon_study_selected@2x.png'
        },
        {
          pagePath: 'pages/my/index',
          text: '我的',
          iconPath: 'assets/tabs/icon_my@2x.png',
          selectedIconPath: 'assets/tabs/icon_my_selected@2x.png'
        }
      ]
    }
  }

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
