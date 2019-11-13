import React from 'react';
import './css/Home.css'

import Header from './Header/Header'
import Main from './Main/Main'
import Favorites from './Favorites/Favorites'

class Home extends React.Component {
  state = {
    route: "/Home",
    abc: []
  }
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
          ? <Main abc={this.state.abc}/>
          : <Favorites />}
      </div>
    )
  }
}

export default Home;
