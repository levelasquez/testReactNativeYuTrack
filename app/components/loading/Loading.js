import React from 'react'
import { Image, Text, StyleSheet } from 'react-native'

const phrases = [
  '¿Cual es la respuesta a la vida, el universo y todo lo demás?',
  'Si pudieses elegir entre 1 billón de dólares y volver a ser jóven, ¿que auto te comprarías?',
  'Si el vino es líquido, ¿Cómo puede ser seco?',
  '¿Cómo se escribe el cero en número romano?',
  'Que tengas un buen día!, tus amigos de Yu-Track <3',
  'Recuerda ser firme pero comprensivo',
  'Si hay un más allá, hay un menos acá?',
  '¿Debería cortarme las venas o dejarmelas largas?',
  '¿Porque no hay pilas B?',
  'Cuando el imperio romano cayó, ¿Quién lo empujó?',
  '¿Que harias si vez un animal en peligro de extinción comiendose una planta en peligro de extinción?',
  'Si se te acaba el aceite de oliva, ¿usas el de Popeye?',
  'Cuando sientas que hiciste algo sin sentido recuerda que hay personas que van en auto al gimnasio para hacer bicicleta estática',
  'Adán y Eva, ¿tenían ombligos?'
]

export default props =>
  <Image
    source={require('../../images/map.png')}
    style={styles.container}
  >
    <Text style={styles.phrases}>
      {phrases[Math.floor(Math.random() * phrases.length)]}
    </Text>
    <Text style={styles.loading}>Cargando...</Text>
    <Image
      source={require('../../images/pin.png')}
      style={styles.pin}
    />
  </Image>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#355c95',
    justifyContent: 'center',
    alignItems: 'center',
  },
  phrases: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 20,
    backgroundColor: 'transparent',
    padding: '10%',
    fontSize: 18,
  },
  loading: {
    color: '#fff',
    backgroundColor: 'transparent',
  },
  pin: {
    maxWidth: '20%',
    resizeMode: 'contain'
  }
})
