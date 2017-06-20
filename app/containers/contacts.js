import React, { Component } from 'react'
import { StyleSheet, Text, View, } from 'react-native'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import MapView from 'react-native-maps'

import Header from './../components/common/header'
import Tabs from './../components/common/tabs'

class Contacts extends Component {
  render() {
    // const { Login, login, loading } = this.props
    return (
      <View style={styles.container}>
        <Header title="Contactos" />
        <Text>Contactos</Text>
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

const mapStateToProps = state => ({ Contacts: state.Contacts })

const mapActionsToProps = dispatch => ({
  // login: x => dispatch({ type: 'LOGIN', payload: x }),
  // loading: () => dispatch({ type: 'LOADING_END' }),
})

Contacts = withRouter(connect(mapStateToProps, mapActionsToProps)(Contacts))

export default Contacts
