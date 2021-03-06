import _ from 'lodash'
import autobind from 'autobind-decorator'
import React, { Component } from 'react'
import { Grid, Menu } from 'stardust'

import Assignment from './Assignment'
import assignments from '../content/assignments'

export default class Assignments extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      assignment: assignments.sexyShoppingList,
    }
  }

  @autobind
  selectAssignment(assignment) {
    this.setState({
      assignment,
    })
  }

  render() {
    const { assignment } = this.state
    const assignmentItems = _.filter(assignments, 'visible')
      .map((a) => (
        <Menu.Item key={a.title} onClick={this.selectAssignment.bind(this, a)}>{a.title}</Menu.Item>
      ))

    return (
      <Grid className='equal width padded'>
        <Grid.Column style={{ flex: '0 0 13rem' }}>
          <Menu className='secondary vertical fluid pointing'>
            {assignmentItems}
          </Menu>
        </Grid.Column>
        <Grid.Column>
          <Assignment { ...assignment } />
        </Grid.Column>
      </Grid>
    )
  }
}
