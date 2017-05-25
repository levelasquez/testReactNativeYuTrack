import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native'

export default class testYuTrack extends Component {
  render() {
    return (
      <Image
        source={require('./img/bg.jpg')}
        style={styles.container}
      >
        <View>
          <Image
            source={require('./img/logo.png')}
            style={styles.logo}
          />
          <TextInput
            placeholder="Ingresa tu email"
            style={styles.input}
          />
          <TextInput
            placeholder="Ingresa tu clave"
            style={styles.input}
          />
          <TouchableOpacity>
            <Text style={styles.button}>INGRESAR</Text>
          </TouchableOpacity>
          <View style={styles.hr}></View>
          <Text style={styles.link}>REGÍSTRATE</Text>
          <Text style={styles.link}>¿OLVIDASTE TU CLAVE?</Text>
        </View>
      </Image >
    )
  }
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 200,
    height: 220,
  },
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  input: {
    borderColor: '#88c793',
    paddingLeft: 20,
    backgroundColor: '#FFF',
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderWidth: 1,
    height: 37,
    width: 350,
  },
  button: {
    color: 'white',
    height: 30,
    paddingTop: 10,
    paddingBottom: 40,
    lineHeight: 30,
    marginTop: 30,
    textAlign: 'center',
    width: 350,
    backgroundColor: '#d95220',
    fontSize: 20,
  },
  link: {
    fontSize: 18,
    color: '#239a38',
    marginTop: 10,
    textAlign: 'right',
    fontWeight: '500',
  },
  hr: {
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#96b89a',
    width: 350,
  },
})

AppRegistry.registerComponent('testYuTrack', () => testYuTrack)
