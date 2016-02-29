import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import HomePage from './containers/HomePage'
import CounterPage from './containers/CounterPage'
import AssignmentsPage from './containers/AssignmentsPage'
import ProfilePage from './containers/ProfilePage'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={HomePage} />
    <Route path='/counter' component={CounterPage} />
    <Route path='/assignments' component={AssignmentsPage} />
    <Route path='/profile' component={ProfilePage} />
  </Route>
)
