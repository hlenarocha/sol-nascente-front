import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ReservationScreen from './screens/ReservationScreen';
import CheckInScreen from './screens/CheckInScreen';
import CheckOutScreen from './screens/CheckOutScreen';
import ChooseScreen from './screens/ChooseScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Hotel Fazenda Sol Nascente' }} />
        <Stack.Screen name="Choose" component={ChooseScreen} options={{ title: 'Escolha seu chalé' }} />
        <Stack.Screen name="Reservation" component={ReservationScreen} options={{ title: 'Faça sua reserva' }} />
        <Stack.Screen name="CheckIn" component={CheckInScreen} options={{ title: 'Check-In' }} />
        <Stack.Screen name="CheckOut" component={CheckOutScreen} options={{ title: 'Check-Out' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}