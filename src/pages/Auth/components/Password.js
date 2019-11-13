import React from 'react';

function Password (props) {
  return (
    <div className="inputForm">
      <div className="miniheader">Пароль</div>
      <div className="inputTextLayoutPassword">
        <input
          className="inputText"
          type={props.visibleIndicator ? "password" : "text"}
          name="login"
          value={props.password}
          onChange={props.onChangePassword}
        >
        </input>
        <div
          className={!props.visibleIndicator ? "visible" : "visible--active"}
          checked={props.visibleIndicator}
          onClick={props.changeVisibleIndicator}
        >
        </div>
      </div>
    </div>
  )
}

export default Password
