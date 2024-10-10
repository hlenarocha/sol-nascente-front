import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import ReservationScreen from "./screens/ReservationScreen";
import CheckInScreen from "./screens/CheckInScreen";
import CheckOutScreen from "./screens/CheckOutScreen";
import ChooseScreen from "./screens/ChooseScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import { UserProvider } from "./assets/contexts/UserContext";

const Stack = createStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ title: "Bem vindo" }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ title: "Cadastre-se!" }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: "Cadastre-se!" }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Hotel Fazenda Sol Nascente" }}
          />
          <Stack.Screen
            name="Choose"
            component={ChooseScreen}
            options={{ title: "Escolha seu chalé" }}
          />
          <Stack.Screen
            name="Reservation"
            component={ReservationScreen}
            options={{ title: "Faça sua reserva" }}
          />
          <Stack.Screen
            name="CheckIn"
            component={CheckInScreen}
            options={{ title: "Check-In" }}
          />
          <Stack.Screen
            name="CheckOut"
            component={CheckOutScreen}
            options={{ title: "Check-Out" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
