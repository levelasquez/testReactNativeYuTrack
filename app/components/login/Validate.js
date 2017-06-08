import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default props =>
  <View style={props.errors ? styles.invalid : styles.valid}>
    <Text style={styles.titleError}>ERROR</Text>
    {
      props.errors
        ? props.errors.map((x, i) => {
          <Text key={i}>{x.errors}</Text>
        })
        : null
    }
  </View>

const styles = StyleSheet.create({
  valid: {
    display: 'none',
  },
  invalid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#e00109',
    borderStyle: 'solid',
    borderWidth: 1,
    paddingTop: 27,
    paddingBottom: 27,
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 10,
  },
  titleError: {
    fontSize: 15,
    color: '#ce0000',
    margin: 0,
  },
  textError: {
    fontSize: 14,
    color: '#666666',
    marginTop: 5,
  },
})
