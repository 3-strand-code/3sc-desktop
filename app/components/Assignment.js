import _ from 'lodash'
import autobind from 'autobind-decorator'
import cx from 'classnames'
import path from 'path'
import React, { Component, PropTypes } from 'react'
import { Divider, Header, Input, Message, Segment, Segments } from 'stardust'

import { grade } from '../content/lib'
import Step from './Step'

const getSteps = (steps) => _.map(steps, (step, i) => <Step key={i} { ...step } />)

const REPO_DIR = path.resolve('..')

export default class Assignment extends Component {
  static propTypes = {
    title: PropTypes.string,
    visible: PropTypes.bool,
    prereqs: PropTypes.array,
    steps: PropTypes.arrayOf(PropTypes.func),
  }

  constructor(props, context) {
    super(props, context)
    const dir = 'sexy-shopping-list'
    const resolvedDir = path.resolve(REPO_DIR, dir)
    const graded = grade(this.props, resolvedDir)

    this.state = {
      dir,
      graded,
      resolvedDir,
    }

    // TODO: Interval is for POC only, should use some kind of watch functionality
    this.gradeInterval = setInterval(this.grade, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.gradeInterval)
  }

  @autobind
  handleChangeDirectory(e) {
    this.setState({
      dir: e.target.value,
      resolvedDir: path.resolve(REPO_DIR, e.target.value),
    })
  }

  @autobind
  grade() {
    this.setState({
      graded: grade(this.props, this.state.resolvedDir),
    })
  }

  render() {
    const { dir, resolvedDir, graded } = this.state

    const prereqSteps = _.map(graded.prereqs, (prereq, i) => {
      const isComplete = _.every(prereq.steps, 'check')
      const steps = isComplete ? null : getSteps(prereq.steps)
      const headerIconClasses = cx({
        'green checkmark box': isComplete,
        'square outline': !isComplete,
      }, 'icon')
      const segmentsClasses = cx({
        piled: !isComplete,
      })
      return (
        <Segments key={i} className={segmentsClasses}>
          <Segment>
            <Header.H4>
              <i className={headerIconClasses} style={{ float: 'left' }} />
              {prereq.title}
            </Header.H4>
          </Segment>
          {steps}
        </Segments>
      )
    })
    const assignmentSteps = (
      <Segments className='piled'>
        {getSteps(graded.steps)}
      </Segments>
    )

    return (
      <div>
        <Header.H1 className='center aligned'>{graded.title}</Header.H1>
        <Input className='left icon' icon='folder' value={dir} onChange={this.handleChangeDirectory} />
        <div>
          <small>{resolvedDir}</small>
        </div>

        <Header.H2 className='center aligned'>Prereqs</Header.H2>
        {prereqSteps}

        <Header.H2 className='center aligned'>Steps</Header.H2>
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
