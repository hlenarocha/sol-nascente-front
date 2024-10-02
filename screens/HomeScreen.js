import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.wrapper}>
      <ImageBackground source={require('../assets/background.png')} style={styles.background}>
        {/* empty background image */}
      </ImageBackground>

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>

        <View style={{ width: '80%', marginBottom: 20, backgroundColor: '#e3c5a4', padding: 20, borderRadius: 15, opacity: '90%'}}>
          <Text style={{color: '#41280b', textAlign: 'center'}}>Onde a tranquilidade da natureza encontra o conforto de chalés aconchegantes. Viva momentos inesquecíveis em meio à natureza, com lazer e descanso garantidos. </Text>
          <Text style={{marginTop: 10, fontSize: 20, textAlign: 'center', color: '#41280b'}}>Reserve agora sua experiência perfeita!</Text>
        </View>



        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('../assets/montanha.png')} />
          <Text style={styles.title}>Hotel Fazenda Sol Nascente</Text>
        </View>



        <View style={styles.container}>


          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Choose')}>
              <Text style={styles.buttonText}>Fazer Reserva</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('CheckIn')}>
              <Text style={styles.buttonText}>Check-In</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('CheckOut')}>
              <Text style={styles.buttonText}>Check-Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  container: {
    backgroundColor: '#e3c5a4',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
    opacity: '90%'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fcfcfc',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
    marginTop: 10
  },
  button: {
    backgroundColor: '#fcfcfc',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    width: 200,
    alignItems: 'center'
  },
  buttonText: {
    color: '#41280b',
    fontWeight: '500',
    fontSize: 16
  }
});