import React, { Component } from 'react'
import { StyleSheet, Text, View, } from 'react-native'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import MapView from 'react-native-maps'

import Header from './../components/common/header'
import Tabs from './../components/common/tabs'

class Points extends Component {
  render() {
    // const { Login, login, loading } = this.props
    return (
      <View style={styles.container}>
        <Header title="Puntos" />
        <Text>Puntos</Text>
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

const mapStateToProps = state => ({ Points: state.Points })

const mapActionsToProps = dispatch => ({
  // login: x => dispatch({ type: 'LOGIN', payload: x }),
  // loading: () => dispatch({ type: 'LOADING_END' }),
})

Points = withRouter(connect(mapStateToProps, mapActionsToProps)(Points))

export default Points
