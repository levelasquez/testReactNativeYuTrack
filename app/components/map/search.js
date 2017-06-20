import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import FontAwesome, { Icons } from 'react-native-fontawesome'

export default props =>
  <View style={styles.searchContainer}>
    <TextInput
      placeholder="Buscar dirección"
      style={styles.searchInput}
    />
  </View>

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c9c9ce',
    height: 40,
  },
  searchInput: {
    marginTop: 5,
    backgroundColor: '#fff',
    height: '75%',
    width: '95%',
    borderRadius: 2.5,
    paddingLeft: 10,
  },
})
