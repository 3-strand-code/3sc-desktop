import React, { Component, PropTypes } from 'react'
import hljs from 'highlight.js'

export default class CodeBlock extends Component {
  static propTypes = {
    literal: PropTypes.string,
    language: PropTypes.string
  }

  componentDidMount() {
    this.highlightCode()
  }

  componentDidUpdate() {
    this.highlightCode()
  }

  highlightCode() {
    hljs.highlightBlock(this.refs.code)
  }

  render() {
    const { language, literal } = this.props
    return (
      <pre><code ref='code' className={language}>{literal}</code></pre>
    )
  }
}
