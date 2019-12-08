import Taro, { Component } from '@tarojs/taro'
import { View, Icon } from '@tarojs/components'

// 导入样式
import './index.scss'

class SearchBar extends Component {
  // 跳转到搜索页面
  goToSearch = () => {
    Taro.navigateTo({
      url: '/pages/search/index'
    })
  }

  render() {
    return (
      <View className="weui-search-bar__box" onClick={this.goToSearch}>
        <Icon
          className="weui-icon-search_in-box"
          type="search"
          color="#ff8d44"
          size="14"
        ></Icon>
        <View className="weui-search-bar__input">
          <Text>{this.props.placeholder}</Text>
        </View>
      </View>
    )
  }
}

export default SearchBar
