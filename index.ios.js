import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  KeyboardAvoidingView,
} from 'react-native'

import Loading from './src/components/loading/Loading'
import LoginForm from './src/components/login/LoginForm'
import Validate from './src/components/login/Validate'

export default class testYuTrack extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      validate: false,
      loading: true,
    }

    this.handleEmail = this.handleEmail.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleEmail(text) {
    this.setState({
      email: text
    })
  }

  handlePassword(text) {
    this.setState({
      password: text
    })
  }

  handleSubmit() {
    if (this.state.email === '' || this.state.password === '') {
      this.setState({
        validate: true,
        email: '',
        password: '',
      })
    } else {
      this.setState({
        validate: false
      })
    }
}

componentDidMount() {
  const sleep = (timeout) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(), timeout))

  sleep(4000).then(x => {
    this.setState(Object.assign({}, this.state, { loading: false }))
  })
}

  render() {
    return this.state.loading
      ? <Loading />
      : <Image
          source={require('./img/bg.jpg')}
          style={styles.container}
        >
          <KeyboardAvoidingView behavior="padding">
            <Image
              source={require('./img/logo.png')}
              style={styles.logo}
            />
            <Validate validate={this.state.validate} />
            <LoginForm
              handleEmail={this.handleEmail}
              handlePassword={this.handlePassword}
              handleSubmit={this.handleSubmit}
              email={this.state.email}
              password={this.state.password}
              validate={this.state.validate}
            />
            <View style={styles.hr}></View>
            <Text style={styles.link}>REGÍSTRATE</Text>
            <Text style={styles.link}>¿OLVIDASTE TU CLAVE?</Text>
          </KeyboardAvoidingView>
        </Image >
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
