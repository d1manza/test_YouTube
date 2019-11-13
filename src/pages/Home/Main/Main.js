import React from 'react';
import './css/Main.css'

import SearchLine from './components/SearchLine'
import VideoList from './components/VideoList'
import FilterBar from './components/FilterBar'
import PopUpWindow from './components/PopUpWindow'


function Main (props) {
  return (
    <div className="main">
      <PopUpWindow
        indicatorFavorites={props.indicatorFavorites}
        changeIndicatorPopupWindow={props.changeIndicatorPopupWindow}
        indicatorPopUpWindow={props.indicatorPopUpWindow}
      />
      <div className="header">
        Поиск видео
      </div>
      <SearchLine
        searchQuery={props.searchQuery}
        inputSearchQuery={props.inputSearchQuery}
        getListVideos={props.getListVideos}
        indicatorFavorites={props.indicatorFavorites}
        changeIndicatorFavorites={props.changeIndicatorFavorites}
        totalResults={props.totalResults}
      />
      <FilterBar
        searchQueryFilterBar={props.searchQueryFilterBar}
        totalResults={props.totalResults}
        x4={props.x4}
        x1={props.x1}
        changeIndicatorFilterX4={props.changeIndicatorFilterX4}
        changeIndicatorFilterX1={props.changeIndicatorFilterX1}
      />
      <VideoList
        videoList={props.videoList}
        x4={props.x4}
        x1={props.x1}
      />
    </div>
  )
}

export default Main;
