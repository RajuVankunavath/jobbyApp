import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {
    UserName: '',
    Password: '',
    errorMsg: '',
    messageError: false,
  }

  submitForm = async event => {
    event.preventDefault()
    const {UserName, Password} = this.state
    const loginDetails = {
      username: UserName,
      password: Password,
    }

    const Url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(loginDetails),
    }
    const response = await fetch(Url, options)
    const data = await response.json()
    if (response.ok) {
      const jwtToken = data.jwt_token
      const {history} = this.props

      Cookies.set('jwt_token', jwtToken, {expires: 30})
      history.replace('/')
    } else {
      const message = data.error_msg
      this.setState({errorMsg: message, messageError: true})
    }
  }

  onChangeUserName = event => {
    this.setState({UserName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({Password: event.target.value})
  }

  render() {
    const {UserName, Password, errorMsg, messageError} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-app">
        <div className="app-container">
          <img
            className="image-logo"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          />
          <form className="form" onSubmit={this.submitForm}>
            <div className="label-container">
              <label className="label" htmlFor="name">
                Username
              </label>
              <input
                id="name"
                className="name-input"
                type="text"
                placeholder="Username"
                value={UserName}
                onChange={this.onChangeUserName}
              />
            </div>
            <div className="label-container">
              <label className="label" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                className="name-input"
                type="password"
                placeholder="password"
                value={Password}
                onChange={this.onChangePassword}
              />
            </div>
            <button className="button" type="submit">
              Login
            </button>
            {messageError && <p className="errorMessage">*{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default Login
