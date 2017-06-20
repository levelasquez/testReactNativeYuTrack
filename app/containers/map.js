import React, { Component } from 'react'
import { StyleSheet, Text, View, } from 'react-native'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import MapView from 'react-native-maps'

import Header from './../components/common/header'
import Search from './../components/map/search'
import Tabs from './../components/common/tabs'

class Map extends Component {
  render() {
    // const { Login, login, loading } = this.props
    return (
      <View style={styles.container}>
        <Header title="Mapa" />
        <Search />
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -33.4232926,
            longitude: -70.6226652,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <MapView.Marker
            coordinate={{
              latitude: -33.4232926,
              longitude: -70.6226652,
            }}
            title="Yu-Track"
            description="Los Conquistadores 1700"
          />
        </MapView>
        <Tabs />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: '79%',
    width: '100%',
  },
})

const mapStateToProps = state => ({ Map: state.Map })

const mapActionsToProps = dispatch => ({
  // login: x => dispatch({ type: 'LOGIN', payload: x }),
  // loading: () => dispatch({ type: 'LOADING_END' }),
})

Map = withRouter(connect(mapStateToProps, mapActionsToProps)(Map))

export default Map
