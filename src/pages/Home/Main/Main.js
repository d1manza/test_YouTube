import React from 'react';
import './css/Main.css'

import SearchLine from './components/SearchLine'
import VideoList from './components/VideoList'
import FilterBar from './components/FilterBar'
import PopUpWindow from './components/PopUpWindow'


class Main extends React.Component {
  state = {

  }

  render () {
    return (
      <div className="main">
        <PopUpWindow
          indicatorFavorites={this.props.indicatorFavorites}
          changeIndicatorPopupWindow={this.props.changeIndicatorPopupWindow}
          indicatorPopUpWindow={this.props.indicatorPopUpWindow}
        />
        <div className="header">
          Поиск видео
        </div>
        <SearchLine
          searchQuery={this.props.searchQuery}
          inputSearchQuery={this.props.inputSearchQuery}
          getListVideos={this.props.getListVideos}
          indicatorFavorites={this.props.indicatorFavorites}
          changeIndicatorFavorites={this.props.changeIndicatorFavorites}
          totalResults={this.props.totalResults}
        />
        <FilterBar
          searchQueryFilterBar={this.props.searchQueryFilterBar}
          totalResults={this.props.totalResults}
          x4={this.props.x4}
          x1={this.props.x1}
          changeIndicatorFilterX4={this.props.changeIndicatorFilterX4}
          changeIndicatorFilterX1={this.props.changeIndicatorFilterX1}
        />
        <VideoList
          videoList={this.props.videoList}
          x4={this.props.x4}
          x1={this.props.x1}
        />
      </div>
    )
  }
}

export default Main;
