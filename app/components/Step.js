import cx from 'classnames'
import React, { Component, PropTypes } from 'react'
import { Segment } from 'stardust'

import Markdown from './Markdown/Markdown'

export default class Step extends Component {
  static propTypes = {
    title: PropTypes.string,
    check: PropTypes.bool,
    /** path to markdown file */
    description: PropTypes.string,
  }

  render() {
    const { title, check, description } = this.props
    const iconClasses = cx({
      'green check': check,
      'grey square outline': !check,
    }, 'icon')
    const segmentClasses = cx({
      'secondary': check,
    })
    const renderedDescription = !check && description && <Markdown source={description} />
    return (
      <Segment className={segmentClasses}>
        <i className={iconClasses} /> {title}
        {renderedDescription}
      </Segment>
    )
  }
}
