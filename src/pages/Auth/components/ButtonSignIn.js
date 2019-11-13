import React from 'react';
import {Link} from 'react-router-dom'

import logPasBase from './../../logPasBase'

function ButtonSignIn(props) {
  let route
  let json=logPasBase
  for (let i=0; i<json.length; i++) {
    if (json[i].login===props.login && json[i].password===props.password)
      {route="/Home"; break;}
    else
      {route="/"}
  }
  return (
    <div className="bottomAuth">
      <div className="failAuth">
        {props.authIndicator===1 ? <div>Ну ты чего? :( Подумай еще</div> : <div></div>}
      </div>
      <div className="button">
        <Link className="linkSignIn" to={route} onClick={props.changeIndicatorAuth}>
          Вход
        </Link>
      </div>
    </div>
    )
  }


export default ButtonSignIn
