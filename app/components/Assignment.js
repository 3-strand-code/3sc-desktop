import _ from 'lodash'
import autobind from 'autobind-decorator'
import cx from 'classnames'
import path from 'path'
import React, { Component, PropTypes } from 'react'
import Markdown from './Markdown/Markdown'
import { Divider, Header, Input, Message, Segment, Segments } from 'stardust'

import { grade } from '../content/lib'
import Step from './Step'

const getSections = (assignmentsArray) => _.map(assignmentsArray, (assignment, i) => {
  const { description, steps, title } = assignment
  const isComplete = _.every(steps, 'check')
  const renderedSteps = !isComplete && _.map(steps, (step, j) => <Step key={j} { ...step } />)
  const headerIconClasses = cx({
    'green checkmark box': isComplete,
    'square outline': !isComplete,
  }, 'icon')
  const segmentsClasses = cx({
    piled: !isComplete,
  })
  const renderedDescription = !isComplete && description && <Markdown source={description} />
  return (
    <Segments key={i} className={segmentsClasses}>
      <Segment>
        <Header.H4>
          <i className={headerIconClasses} style={{ float: 'left' }} />
          {title}
        </Header.H4>
        {renderedDescription}
      </Segment>
      {renderedSteps}
    </Segments>
  )
})

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

    const prereqs = getSections(graded.prereqs)
    const sections = getSections(graded.sections)

    return (
      <div>
        <Header.H1 className='center aligned'>{graded.title}</Header.H1>
        <Input className='left icon' icon='folder' value={dir} onChange={this.handleChangeDirectory} />
        <div>
          <small>{resolvedDir}</small>
        </div>

        <Header.H2 className='center aligned'>Prereqs</Header.H2>
        {prereqs}

        <Header.H2 className='center aligned'>Sections</Header.H2>
        {sections}

        <Divider className='hidden section' />

        <Message className='small'>
          Graded Assignment
          <pre>{JSON.stringify(graded, null, 2)}</pre>
        </Message>
      </div>
    )
  }
}
