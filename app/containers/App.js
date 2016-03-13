import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Menu } from 'stardust'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  }

  render() {
    const scrollBarPadding = {
      paddingRight: '1em',
    }
    return (
      <div>
        <Menu className='top attached'>
          <Link className='item' to='/'>
            Home
          </Link>
          <Link className='item' to='/assignments'>
            Assignments
          </Link>
          <Link className='item' to='/browser-tests'>
            Browser Tests
          </Link>
          <Link className='item' to='/profile'>
            Profile
          </Link>
        </Menu>
        <div style={scrollBarPadding}>
          {this.props.children}
        </div>
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
