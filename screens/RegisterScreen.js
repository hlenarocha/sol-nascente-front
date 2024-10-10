import React, { useState, useContext } from "react";
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

import { postRegister } from "../assets/api/axiosInstance";
import { UserContext } from "../assets/contexts/UserContext";

export default function RegisterScreen({ navigation }) {
  const { setUser } = useContext(UserContext);

  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleRegister() {
    if (
      name === "" ||
      cpf === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não batem!");
      return;
    }

    const newRegistration = {
      name,
      cpf,
      email,
      password,
      confirmPassword,
    };

    try {
      const request = await postRegister(newRegistration);

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
        <Image
          style={{ marginBottom: 20 }}
          source={require("../assets/img/montanha.png")}
        />

        <View style={styles.inputContainer}>
          <Text style={styles.title}>Criar Conta</Text>

          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={name}
            onChangeText={setName}
          />

          <TextInput
            style={styles.input}
            placeholder="CPF"
            value={cpf}
            onChangeText={setCpf}
            keyboardType="numeric"
          />

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

          <TextInput
            style={styles.input}
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>

          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={styles.footerText}>Já tem uma conta? Faça Login</Text>
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
    height: "85%",
    backgroundColor: "#FCFCFC",
    padding: 20,
    borderWidth: 0,
    borderRadius: 15,
  },
});
