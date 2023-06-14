import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {MdHome, MdWork} from 'react-icons/md'

import {FiLogOut} from 'react-icons/fi'

import './index.css'

const Header = props => {
  const onClickButton = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <nav className="heading-app">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt=" website logo"
          className="header-logo"
        />
      </Link>

      <div className="lg-container">
        <ul className="nav-list-items">
          <li className="list-items">
            <Link className="link-item" to="/">
              Home
            </Link>
          </li>
          <li className="list-items">
            <Link className="link-item" to="/jobs">
              Jobs
            </Link>
          </li>
        </ul>
        <button className="logout-button" type="button" onClick={onClickButton}>
          Logout
        </button>
      </div>
      <div className="mobile-container">
        <ul className="list-container-mobile">
          <li className="list-item-mobile">
            <Link className="link-items-mobile" to="/">
              <MdHome className="image-logo-mobile" />
            </Link>
          </li>
          <li className="list-item-mobile">
            <Link className="link-items-mobile" to="/jobs">
              <MdWork className="image-logo-mobile" />
            </Link>
          </li>

          <li className="list-item-mobile">
            <button
              className="mobile-view-button"
              type="button"
              onClick={onClickButton}
            >
              <FiLogOut className="image-logo-mobile" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Header)
