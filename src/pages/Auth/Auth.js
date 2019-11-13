import React from 'react';
import logPasBase from '.././logPasBase'
import './css/Auth.css'

import Logo from './components/Logo'
import Header from './components/Header'
import Login from './components/Login'
import Password from './components/Password'
import ButtonSignIn from './components/ButtonSignIn'

class Auth extends React.Component {
  state = {
    login: "",
    password: "",
    authIndicator: 0,
    visibleIndicator: true
  }
  onChangeLogin = event => {
    this.setState({ login: event.target.value })
  }
  onChangePassword = event => {
    this.setState({ password: event.target.value })
  }
  changeVisibleIndicator = event => {
    this.setState({ visibleIndicator: !event.target.checked })
  }
  changeIndicatorAuth = event => {
    let json=logPasBase
    var token
    for (let i=0; i<json.length; i++) {
      if (json[i].login===this.state.login && json[i].password===this.state.password)
        {this.setState({ authIndicator: 2 });
          var rand = function() {
            return Math.random().toString(36).substr(2)
          };
          token = rand() + rand();
          localStorage.setItem("token", token)
          break;
        }
      else
        {this.setState({ authIndicator: 1 })}
    }
  }
  render() {
    return (
      <div className="Auth">
        <Logo />
        <Header />
        <Login
          login={this.state.login}
          onChangeLogin={this.onChangeLogin}
        />
        <Password
          password={this.state.password}
          onChangePassword={this.onChangePassword}
          visibleIndicator={this.state.visibleIndicator}
          changeVisibleIndicator={this.changeVisibleIndicator}
        />
        <ButtonSignIn
          login={this.state.login}
          password={this.state.password}
          authIndicator={this.state.authIndicator}
          changeIndicatorAuth={this.changeIndicatorAuth}
        />
      </div>
    )
  }
}

export default Auth;
