import 'highlight.js/styles/github.css'
import autobind from 'autobind-decorator'
import hljs from 'highlight.js'
import React, { Component, PropTypes } from 'react'

export default class CodeBlock extends Component {
  static propTypes = {
    literal: PropTypes.string,
    language: PropTypes.string,
  }

  componentDidMount() {
    this.highlightCode()
  }

  componentDidUpdate() {
    this.highlightCode()
  }

  @autobind
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
