import React from 'react';
import './css/Header.css'

import LinkHome from './Link/LinkHome'
import LinkFavorites from './Link/LinkFavorites'
import LinkExit from './Link/LinkExit'

function Header (props) {
  return (
    <div className="header">
      <div className="logo">
      </div>
      <LinkHome changeRouteHome={props.changeRouteHome} route={props.route}/>
      <LinkFavorites changeRouteFavorites={props.changeRouteFavorites} route={props.route}/>
      <div>
      </div>
      <LinkExit
        changeRouteExit={props.changeRouteExit}
      />
      <div>
      </div>
    </div>
  )
}

export default Header
