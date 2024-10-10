import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
  ImageBackground,
  Pressable,
  Image,
} from "react-native";

import { postLogin } from "../assets/api/axiosInstance";
import { UserContext } from "../assets/contexts/UserContext";

export default function LoginScreen({ navigation }) {
  const { setUser } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    if (email === "" || password === "") {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    const userCredentials = {
      email,
      password,
    };

    try {
      const request = await postLogin(userCredentials);

      setUser(request);
      Alert.alert("Sucesso", "Conta criada!");
      navigation.navigate("Home");
    } catch (err) {
      Alert.alert("Error", "Error creating account!");
      console.error(err);
    }
  }

  return (
    <ImageBackground
      source={require("../assets/img/background.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={{ marginBottom: 20 }}
            source={require("../assets/img/montanha.png")}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.title}>Entrar</Text>

          <TextInput
            style={styles.input}
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text style={styles.footerText}>
              Não possui uma conta? Cadastre-se
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#000",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
  },
  button: {
    width: "100%",
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#D1A16C",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerText: {
    marginTop: 20,
    color: "#000",
    textAlign: "center",
  },
  inputContainer: {
    width: "95%",
    height: "60%",
    backgroundColor: "#FCFCFC",
    padding: 20,
    borderWidth: 0,
    borderRadius: 15,
  },
});
