import React, { Component } from 'react'
import { Button } from 'stardust'
import autobind from 'autobind-decorator'

import browserTest from '../content/lib/browser/runBrowserTest'

const initialState = { status: null, err: null, stdout: null, stderr: null }

export default class BrowserTests extends Component {
  state = initialState

  @autobind
  testYahoo() {
    this.setState({ ...initialState, status: '...running' })

    browserTest('yahoo')
      .then(res => {
        this.setState({ ...res, status: 'passed' })
      })
      .catch(err => {
        this.setState({ ...err, status: 'failed' })
      })
  }

  render() {
    return (
      <div>
        <Button onClick={this.testYahoo}>Test Yahoo</Button>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    )
  }
}
