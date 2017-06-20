import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'
import FontAwesome, { Icons } from 'react-native-fontawesome'

export default props =>
  <View style={styles.tabs}>
    <View>
      <Link to="/points">
        <View>
          <Text style={styles.text}>
            <FontAwesome style={styles.icon}>{Icons.mapMarker}</FontAwesome>
          </Text>
          <Text style={styles.text}>Puntos</Text>
        </View>
      </Link>
    </View>
    <View>
      <Link to="/contacts">
        <View>
          <Text style={styles.text}>
            <FontAwesome style={styles.icon}>{Icons.userCircleO}</FontAwesome>
          </Text>
          <Text style={styles.text}>Contactos</Text>
        </View>
      </Link>
    </View>
    <View>
      <Link to="/map">
        <View>
          <Text style={[styles.text, styles.active]}>
            <FontAwesome style={styles.icon}>{Icons.compass}</FontAwesome>
          </Text>
          <Text style={[styles.text, styles.active]}>Mapa</Text>
        </View>
      </Link>
    </View>
    <View>
      <Link to="/settings">
        <View>
          <Text style={styles.text}>
            <FontAwesome style={styles.icon}>{Icons.cog}</FontAwesome>
          </Text>
          <Text style={styles.text}>Ajustes</Text>
        </View>
      </Link>
    </View>
    <View>
      <Link to="/support">
        <View>
          <Text style={styles.text}>
            <FontAwesome style={styles.icon}>{Icons.questionCircle}</FontAwesome>
          </Text>
          <Text style={styles.text}>Soporte</Text>
        </View>
      </Link>
    </View>
  </View>

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fafafae5',
    height: 43,
  },
  text: {
    color: '#bdcadb',
    textAlign: 'center',
  },
  icon: {
    fontSize: 22,
  },
  active: {
    color: '#5B9842',
  },
})
