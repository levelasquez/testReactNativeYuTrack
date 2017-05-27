import React from 'react'
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native'

export default props =>
  <View>
    <TextInput
      placeholder="Ingresa tu email"
      placeholderTextColor={props.validate ? '#000' : '#c7c7cd'}
      returnKeyType="next"
      ref={input => this.emailInput = input}
      onSubmitEditing={() => this.passwordInput.focus()}
      keyboardType="email-address"
      autoCapitalize="none"
      autoCorrect={false}
      onChange={event => props.handleEmail(event.nativeEvent.text)}
      value={props.email}
      style={props.validate ? styles.error : styles.input}
    />
    <TextInput
      placeholder="Ingresa tu clave"
      placeholderTextColor={props.validate ? '#000' : '#c7c7cd'}
      secureTextEntry
      returnKeyType="go"
      ref={input => this.passwordInput = input}
      value={props.password}
      onChange={event => props.handlePassword(event.nativeEvent.text)}
      onSubmitEditing={props.handleSubmit}
      style={props.validate ? styles.error : styles.input}
    />
    <TouchableOpacity onPress={props.handleSubmit}>
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
