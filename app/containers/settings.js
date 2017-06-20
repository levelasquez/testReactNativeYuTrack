import React, { Component } from 'react'
import { StyleSheet, Text, View, } from 'react-native'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import MapView from 'react-native-maps'

import Header from './../components/common/header'
import Tabs from './../components/common/tabs'

class Settings extends Component {
  render() {
    // const { Login, login, loading } = this.props
    return (
      <View style={styles.container}>
        <Header title="Ajustes" />
        <Text>Ajustes</Text>
        <Tabs />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const mapStateToProps = state => ({ Settings: state.Settings })

const mapActionsToProps = dispatch => ({
  // login: x => dispatch({ type: 'LOGIN', payload: x }),
  // loading: () => dispatch({ type: 'LOADING_END' }),
})

Settings = withRouter(connect(mapStateToProps, mapActionsToProps)(Settings))

export default Settings
