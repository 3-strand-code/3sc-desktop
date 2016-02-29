import React, { Component, PropTypes } from 'react'
// import marked from 'marked'
import { Segment } from 'stardust'
import cx from 'classnames'

export default class Step extends Component {
  static propTypes = {
    title: PropTypes.string,
    check: PropTypes.bool,
    /** path to markdown file */
    instructions: PropTypes.string,
  }

  render() {
    const { title, check, instructions } = this.props
    const iconClasses = cx('circular icon', {
      'green check': check,
      'grey minus': !check,
    })
    return (
      <Segment>
        <i className={iconClasses} /> {title}
        <p>
          {/* TODO render markdown: marked(instructions) */}
          {instructions}
        </p>
      </Segment>
    )
  }
}
