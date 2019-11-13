import React from 'react';
import './css/Main.css'

import SearchLine from './components/SearchLine'
import VideoList from './components/VideoList'
import FilterBar from './components/FilterBar'
import PopUpWindow from './components/PopUpWindow'

const api_key="AIzaSyA9us6vBoPFTwVfUjoUlgIw6BofXcP3rGk"
const max_result=50

class Main extends React.Component {
  state = {
    searchQuery: "",
    searchQueryFilterBar: "",
    searchQueryMas: [],
    videoList: [],
    totalResults: "",
    x4: true,
    x1: false,
    indicatorFavorites: false,
    indicatorPopUpWindow: true
  }
  inputSearchQuery = event => {
    this.setState({ searchQuery: event.target.value });
  }
  changeIndicatorFilterX4 = event => {
    this.setState({x4: true, x1: false})
  }
  changeIndicatorFilterX1 = event => {
    this.setState({x4: false, x1: true})
  }
  changeIndicatorFavorites = event => {
    if (this.state.searchQueryFilterBar!=="") {
      this.setState({indicatorFavorites: !event.target.checked})
      if (this.state.indicatorPopUpWindow===false) {
        this.setState({indicatorPopUpWindow: true})
      }
      if (!this.state.indicatorFavorites===true) {
        this.setState(prevState => ({
          searchQueryMas: [...prevState.searchQueryMas, this.state.searchQueryFilterBar]
        }))
      }
    }
  }
  changeIndicatorPopupWindow = event => {
    if (this.state.indicatorFavorites===true) {
      this.setState({indicatorPopUpWindow: false})
    }
  }
  getListVideos = async (event) => {
    event.preventDefault()
    let searchQuery = this.state.searchQuery
    const apiUrl = await fetch(`https://cors-anywhere.herokuapp.com/https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&type=video&maxResults=${max_result}&key=${api_key}`)
    const data = await apiUrl.json()
    this.setState({totalResults: data.pageInfo.totalResults})
    const items=data.items
    const videoList = []
    for (var i=0; i<items.length; i++) {
      videoList[i]=[items[i].snippet.thumbnails.medium.url, items[i].snippet.title, items[i].snippet.channelTitle]
    }
    this.setState({videoList: videoList})
    this.setState({searchQueryFilterBar: this.state.searchQuery})
  }
  render () {
    console.log(this.props.abc)
    return (
      <div className="main">
        <PopUpWindow
          indicatorFavorites={this.state.indicatorFavorites}
          changeIndicatorPopupWindow={this.changeIndicatorPopupWindow}
            indicatorPopUpWindow={this.state.indicatorPopUpWindow}
        />
        <div className="header">
          Поиск видео
        </div>
        <SearchLine
          searchQuery={this.state.searchQuery}
          inputSearchQuery={this.inputSearchQuery}
          getListVideos={this.getListVideos}
          indicatorFavorites={this.state.indicatorFavorites}
          changeIndicatorFavorites={this.changeIndicatorFavorites}
          totalResults={this.state.totalResults}
        />
        <FilterBar
          searchQueryFilterBar={this.state.searchQueryFilterBar}
          totalResults={this.state.totalResults}
          x4={this.state.x4}
          x1={this.state.x1}
          changeIndicatorFilterX4={this.changeIndicatorFilterX4}
          changeIndicatorFilterX1={this.changeIndicatorFilterX1}
        />
        <VideoList
          videoList={this.state.videoList}
          x4={this.state.x4}
          x1={this.state.x1}
        />
      </div>
    )
  }
}

export default Main;
