import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

export default function CheckInScreen() {
  const handleCheckIn = () => {
    alert('Check-In realizado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/checkin.png')} style={styles.background}>
        <TouchableOpacity style={styles.button} onPress={handleCheckIn}>
          <Text style={styles.title}>Fazer Check-In</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    borderWidth: 10,
    borderColor: '#e3c5a4'
  },
  title: {
    fontSize: 24,
    color: '#41280b',
  },
});