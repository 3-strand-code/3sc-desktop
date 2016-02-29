import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Menu } from 'stardust'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  }

  render() {
    return (
      <div>
        <Menu className='top attached'>
          <Link className='item' to='/'>
            Home
          </Link>
          <Link className='item' to='/assignments'>
            Assignments
          </Link>
          <Link className='item' to='/profile'>
            Profile
          </Link>
        </Menu>
        {this.props.children}
        {(() => {
          if (process.env.NODE_ENV !== 'production') {
            const DevTools = require('./DevTools')
            return <DevTools />
          }
        })()}
      </div>
    )
  }
}
