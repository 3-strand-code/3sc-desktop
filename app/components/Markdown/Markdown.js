import React, { Component, PropTypes } from 'react'
import ReactMarkdown from 'react-markdown'
import CodeBlock from './CodeBlock'

export default class Markdown extends Component {
  static propTypes = {
    source: PropTypes.string.isRequired,
  }

  render() {
    const renderers = {
      ...ReactMarkdown.renderers,
      CodeBlock,
    }
    return (
      <ReactMarkdown
        { ...this.props }
        escapeHtml
        renderers={renderers}
      />
    )
  }
}
