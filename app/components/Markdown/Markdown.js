import React, { Component, PropTypes } from 'react'
import ReactMarkdown from 'react-markdown'
import CodeBlock from './CodeBlock'

export default class Markdown extends Component {
  static propTypes = {
    source: PropTypes.string,
  }

  render() {
    const renderers = {
      ...ReactMarkdown.renderers,
      CodeBlock,
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
