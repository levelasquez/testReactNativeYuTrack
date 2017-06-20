import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FontAwesome, { Icons } from 'react-native-fontawesome'

export default ({ title, icon, action }) =>
  <View style={styles.header}>
    <Text style={styles.iconOff}>
      <FontAwesome>{Icons.compass}</FontAwesome>
    </Text>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.actionOff}>Accion</Text>
  </View>

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5B9842',
    paddingTop: 30,
    paddingBottom: 10,
  },
  iconOff: {
    display: 'none',
  },
  icon: {
    flex: 1,
    textAlign: 'center',
    color: '#fff',
    fontSize: 24,
  },
  title: {
    flex: 2,
    textAlign: 'center',
    color: '#fff',
  },
  actionOff: {
    display: 'none',
  },
  action: {
    flex: 1,
    textAlign: 'center',
    color: '#fff',
  },
})
