import React, { Component } from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { reducer as form } from 'redux-form'

import * as reducers from '../reducers'
import Login from './login'

const store = createStore(combineReducers({
  ...reducers,
  form,
}))

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    )
  }
}
