import React, { Component, PropTypes } from 'react'
import ReactMarkdown from 'react-markdown'
import CodeBlock from './CodeBlock'
import Link from './Link'

export default class Markdown extends Component {
  static propTypes = {
    source: PropTypes.string,
  }

  render() {
    const renderers = {
      ...ReactMarkdown.renderers,
      CodeBlock,
      Link,
    }
    return !this.props.source ? null : (
      <ReactMarkdown
        { ...this.props }
        escapeHtml
        renderers={renderers}
      />
    )
  }
}
