import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  KeyboardAvoidingView,
} from 'react-native'
import { connect } from 'react-redux'

import Loading from '../components/loading/Loading'
import LoginForm from '../components/login/LoginForm'

class Login extends Component {
  // constructor(props) {
  //   super(props)

  //   // this.handleEmail = this.handleEmail.bind(this)
  //   // this.handlePassword = this.handlePassword.bind(this)
  //   // this.handleSubmit = this.handleSubmit.bind(this)
  //   // const { Login } = this.props
  // }

  // handleEmail(text) {
  //   this.setState({
  //     email: text
  //   })
  // }

  // handlePassword(text) {
  //   this.setState({
  //     password: text
  //   })
  // }

  // handleSubmit() {
  //   if (this.state.email === '' || this.state.password === '') {
  //     this.setState({
  //       validate: true,
  //       email: '',
  //       password: '',
  //     })
  //   } else {
  //     this.setState({
  //       validate: false
  //     })
  //   }
  // }

  render() {
    const { Login, login, loading } = this.props
    setTimeout(() => loading(), 4000)
    return Login.loading
      ? <Loading />
      : <Image
        source={require('../images/bg.jpg')}
        style={styles.container}
      >
        <KeyboardAvoidingView behavior="padding">
          <Image
            source={require('../images/logo.png')}
            style={styles.logo}
          />
          <LoginForm onSubmit={login}/>
          {/*handleEmail={this.handleEmail}
            handlePassword={this.handlePassword}
            handleSubmit={this.handleSubmit}
            email={this.state.email}
            password={this.state.password}
            validate={this.state.validate}*/}
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

const mapStateToProps = state => ({ Login: state.Login })

const mapActionsToProps = dispatch => ({
  login: x => {
    console.log(x)
    dispatch({ type: 'LOGIN', payload: x })},
  loading: () => dispatch({ type: 'LOADING_END' }),
})

Login = connect(mapStateToProps, mapActionsToProps)(Login)

export default Login
