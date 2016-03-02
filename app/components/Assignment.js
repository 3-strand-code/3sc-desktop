import _ from 'lodash'
import autobind from 'autobind-decorator'
import path from 'path'
import React, { Component, PropTypes } from 'react'
import { Divider, Header, Input, Message, Segment, Segments } from 'stardust'

import { grade } from '../content/utils'
import Step from './Step'

const getSteps = (steps) => _.map(steps, (step, i) => <Step key={i} { ...step } />)

export default class Assignment extends Component {
  static propTypes = {
    title: PropTypes.string,
    visible: PropTypes.bool,
    prereqs: PropTypes.array,
    steps: PropTypes.arrayOf(PropTypes.func),
  }

  constructor(props, context) {
    super(props, context)
    const DEFAULT_DIR = '../sexy-shopping-list'
    this.state = {
      dir: DEFAULT_DIR,
      resolvedDir: path.resolve(DEFAULT_DIR),
    }
  }

  @autobind
  handleChangeDirectory(e) {
    this.setState({
      dir: e.target.value,
      resolvedDir: path.resolve(e.target.value),
    })
  }

  render() {
    const { dir, resolvedDir } = this.state
    const graded = grade(this.props, resolvedDir)

    const prereqSteps = _.map(graded.prereqs, (prereq, i) => {
      const steps = getSteps(prereq.steps)
      return (
        <Segments key={i}>
          <Segment>
            <Header.H4 className=''>
              <span><i className='book icon' /> {prereq.title}</span>
            </Header.H4>
          </Segment>
          {steps}
        </Segments>
      )
    })
    const assignmentSteps = getSteps(graded.steps)

    return (
      <div>
        <Header.H1 className='center aligned'>{graded.title}</Header.H1>
        <Input className='left icon' icon='folder' value={dir} onChange={this.handleChangeDirectory} />
        <div>
          <small>{resolvedDir}</small>
        </div>

        <Header>Prereqs</Header>
        {prereqSteps}

        <Header>Steps</Header>
        {assignmentSteps}

        <Divider className='hidden section' />

        <Message className='small'>
          Graded Assignment
          <pre>{JSON.stringify(graded, null, 2)}</pre>
        </Message>
      </div>
    )
  }
}

// ----------------------------------
// PREREQS
// ----------------------------------

// ////////////////////////////////////////////////////////////////////////////////////////////
// √  Install Node                                                                          //
// ////////////////////////////////////////////////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////////////////////////////////////
// X  Install Git                                                                           //
// ////////////////////////////////////////////////////////////////////////////////////////////
//
// Instructions
//
// NPM is a package manager that comes with node.js. We'll use it to install packages our project
// needs, we call these dependencies. If you don't yet have node.js installed, go install it now.
//
// Once installed, open or restart your terminal and run npm. You should see help on how to use
// it, you're all set. If you get an error saying the command wasn't found, ensure it is installed
// and your system $PATH variable includes the path to npm.

// ----------------------------------
// Sexy Shopping List
// ----------------------------------

// Which repo?
// ...list of dirs in ~/src

// Next step title here
// Next step title here
// Next step title here
// Next step title here
// Next step title here
