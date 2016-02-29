import React, { Component } from 'react'
import { Grid, Header } from 'stardust'

export default class Profile extends Component {
  render() {
    return (
      <Grid className='one column padded'>
        <Grid.Column>
          <Header.H2>Profile</Header.H2>
          Your profile
        </Grid.Column>
      </Grid>
    )
  }
}
