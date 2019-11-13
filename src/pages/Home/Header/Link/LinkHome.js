import React from 'react';

function LinkHome (props) {
  return (
    <div
      className={props.route==="/Home" ? "linkLayout linkLayout--active" : "linkLayout"}>
      <button
        className="link"
        onClick={props.changeRouteHome}
      >
        Главная
      </button>
    </div>
  )
}

export default LinkHome
