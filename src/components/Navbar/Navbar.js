import React, { Component } from 'react'
import { MenuItems } from './MenuItems'

class Navbar extends Component {
  state = { clicked: false }
  
  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    return (
      <nav className='NavbarItems'>
        <a className='navbar-logo' href="/">
          <img src='https://amplify-web-staging-11952-deployment.s3.us-west-1.amazonaws.com/Logo-Letters-Trimmed-White-Transparent.png' className="navbar-logo" alt='logo-white-transparent' />
        </a>
        <div className='menu-icon' onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems?.map((item, index) => {
            return (
              <li key={item.title}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}

export default Navbar