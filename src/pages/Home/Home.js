import React from 'react';
import './css/Home.css'

import Header from './Header/Header'
import Main from './Main/Main'
import Favorites from './Favorites/Favorites'

const api_key="AIzaSyDP-tyPRpCpxxjgQijsrXvD3iiUUNlnUJg"
const max_result=50

class Home extends React.Component {
  state = {
    route: "/Home",
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
  // Переключение кнопок навигации
  changeRouteHome = event => {
    this.setState({ route: "/Home" });
  }
  changeRouteFavorites = event => {
    this.setState({ route: "/Favorites" });
  }
  changeRouteExit = event => {
    this.setState({ route: "/" });
    localStorage.clear()
  }
  // Считывание поискового запроса
  inputSearchQuery = event => {
    this.setState({ searchQuery: event.target.value });
  }
  // Фильтры на вывод таблицы видео
  changeIndicatorFilterX4 = event => {
    this.setState({x4: true, x1: false})
  }
  changeIndicatorFilterX1 = event => {
    this.setState({x4: false, x1: true})
  }
  // Добавление в избранное
  changeIndicatorFavorites = event => {
    if (this.state.searchQueryFilterBar!=="") { // если есть значение в фильтр баре
      this.setState({indicatorFavorites: !event.target.checked}) // то разрешай добавлять в избранное
      if (this.state.indicatorPopUpWindow===false) { // если нет всплывающего окна
        this.setState({indicatorPopUpWindow: true}) // вызывай его
      }
      if (!this.state.indicatorFavorites===true && !this.state.searchQueryMas.includes(this.state.searchQueryFilterBar)) { // если нажата кнопка добавить в избранное и значения нет в массиве
        this.setState(prevState => ({
          searchQueryMas: [...prevState.searchQueryMas, this.state.searchQueryFilterBar] // добавляй запись в массив
        }))
      }
    }
  }
  // Изменение индикатора всплывающего окна, когда нажата кнопка добавить в избранное
  changeIndicatorPopupWindow = event => {
    if (this.state.indicatorFavorites===true) {
      this.setState({indicatorPopUpWindow: false})
    }
  }
  // Получение списка видео
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
    this.setState({videoList: videoList, searchQueryFilterBar: this.state.searchQuery})
  }
  render () {
    return (
      <div className="Home">
        <Header
          route={this.state.route}
          changeRouteHome={this.changeRouteHome}
          changeRouteFavorites={this.changeRouteFavorites}
          changeRouteExit={this.changeRouteExit}
        />
        {this.state.route === "/Home"
          ?
          <Main
            // Высплывающее окно
            indicatorFavorites={this.state.indicatorFavorites}
            changeIndicatorPopupWindow={this.changeIndicatorPopupWindow}
            indicatorPopUpWindow={this.state.indicatorPopUpWindow}
            // Строка поиска
            searchQuery={this.state.searchQuery}
            inputSearchQuery={this.inputSearchQuery}
            getListVideos={this.getListVideos}
            changeIndicatorFavorites={this.changeIndicatorFavorites}
            // Фильтр бар
            searchQueryFilterBar={this.state.searchQueryFilterBar}
            totalResults={this.state.totalResults}
            changeIndicatorFilterX4={this.changeIndicatorFilterX4}
            changeIndicatorFilterX1={this.changeIndicatorFilterX1}
            // Таблица видео
            videoList={this.state.videoList}
            x4={this.state.x4}
            x1={this.state.x1}
          />
          :
          <Favorites
            searchQueryMas={this.state.searchQueryMas}
          />}
      </div>
    )
  }
}

export default Home;
