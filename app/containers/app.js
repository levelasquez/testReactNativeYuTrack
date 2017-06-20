import React, { Component } from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { reducer as form } from 'redux-form'
import { MemoryRouter as Router, Route, Switch } from 'react-router'
import { routerReducer } from 'react-router-redux'

import * as reducers from '../reducers'
import Login from './login'
import Map from './map'
import Support from './support'
import Points from './points'
import Contacts from './contacts'
import Settings from './settings'

const store = createStore(combineReducers({
  ...reducers,
  form,
  router: routerReducer,
}))

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/map" component={Map} />
            <Route path="/support" component={Support} />
            <Route path="/settings" component={Settings} />
            <Route path="/points" component={Points} />
            <Route path="/contacts" component={Contacts} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}
