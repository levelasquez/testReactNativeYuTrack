import React from 'react'
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native'
import { reduxForm, Field } from 'redux-form'

import validate from './Validate'
import Error from './Error'

const email = ({ input: { value, onChange, onBlur }, meta: { touched, error }, ...rest }) =>
  <View>
    <TextInput
      placeholder="Ingresa tu email"
      returnKeyType="next"
      ref={input => this.emailInput = input}
      onSubmitEditing={() => this.passwordInput.focus()}
      keyboardType="email-address"
      autoCapitalize="none"
      autoCorrect={false}
      onBlur={value => onBlur(value)}
      onChangeText={value => onChange(value)}
      value={value}
      style={
        touched && error
          ? styles.error
          : touched && !error
            ? styles.valid
            : styles.input
      }
      {...rest}
    />
    {
      touched && error &&
      <View>
        <Text>{error}</Text>
      </View>
    }
  </View>

const password = ({ submit, input: { value, onChange, onBlur }, meta: { touched, error }, ...rest }) =>
  <View>
    <TextInput
      placeholder="Ingresa tu clave"
      secureTextEntry
      returnKeyType="go"
      ref={input => this.passwordInput = input}
      onBlur={value => onBlur(value)}
      onChangeText={value => onChange(value)}
      value={value}
      onSubmitEditing={submit}
      style={
        touched && error
          ? styles.error
          : touched && !error
            ? styles.valid
            : styles.input
      }
      {...rest}
    />
    {
      touched && error &&
      <View>
        <Text>{error}</Text>
      </View>
    }
  </View>

const LoginForm = ({ handleSubmit, status }) =>
  <View>
    <Error status={status} />
    <Field name="email" component={email} />
    <Field name="password" component={password} submit={handleSubmit} />
    <TouchableOpacity onPress={handleSubmit}>
      <Text style={styles.button}>INGRESAR</Text>
    </TouchableOpacity>
  </View>

const styles = StyleSheet.create({
  input: {
    borderColor: '#88c793',
    paddingLeft: 20,
    backgroundColor: '#FFF',
    marginTop: 10,
    borderWidth: 1,
    height: 40,
    width: 350,
  },
  error: {
    borderColor: '#88c793',
    paddingLeft: 20,
    backgroundColor: '#ffc2c2',
    marginTop: 10,
    borderWidth: 1,
    height: 40,
    width: 350,
  },
  valid: {
    borderColor: '#88c793',
    paddingLeft: 20,
    backgroundColor: 'lightgreen',
    marginTop: 10,
    borderWidth: 1,
    height: 40,
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
})

export default reduxForm({
  form: 'login',
  validate,
})(LoginForm)
