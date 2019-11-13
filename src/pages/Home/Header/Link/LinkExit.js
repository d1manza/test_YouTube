import React from 'react';
import {Link} from 'react-router-dom'

function LinkExit (props) {
  return (
    <div className="linkLayout">
      <Link
        onClick={props.changeRouteExit}
        className="link"
        to="/"
      >
        Выйти
      </Link>
    </div>
  )
}

export default LinkExit
