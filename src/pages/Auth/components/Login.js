import React from 'react';

function Login (props) {
  return (
    <div className="inputForm">
      <div className="miniheader">Логин</div>
      <div className="inputTextLayout">
        <input
          className="inputText"
          type="text"
          name="login"
          value={props.login}
          onChange={props.onChangeLogin}
        >
        </input>
      </div>
    </div>
  )
}

export default Login
