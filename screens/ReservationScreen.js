import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function ReservationScreen() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [dateIn, setDateIn] = useState("");
  const [dateOut, setDateOut] = useState("");
  const [cabin, setCabin] = useState("");

  const handleReservation = () => {
    // lógica de reserva
    alert("Reserva confirmada!");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/img/rec.jpeg")}
        style={{ marginBottom: 20 }}
      ></Image>
      <Text style={{ fontWeight: "bold", marginBottom: 10, fontSize: 18 }}>
        Detalhes
      </Text>

      <Text style={{ fontWeight: "bold", marginBottom: 5 }}>Nome</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={{ fontWeight: "bold", marginBottom: 5 }}>CPF</Text>
      <TextInput
        style={styles.input}
        placeholder="000.000.000-00"
        value={cpf}
        onChangeText={setCpf}
      />

      <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
        Data de Entrada
      </Text>
      <TextInput
        style={styles.input}
        placeholder="dd/mm/aaaa"
        value={dateIn}
        onChangeText={setDateIn}
      />

      <Text style={{ fontWeight: "bold", marginBottom: 5 }}>Data de Saída</Text>
      <TextInput
        style={styles.input}
        placeholder="dd/mm/aaaa"
        value={dateOut}
        onChangeText={setDateOut}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ir para Pagamento</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#3e4a3f",
  },
  input: {
    height: 40,
    backgroundColor: "#f6f6f6",
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
  },

  button: {
    backgroundColor: "#ceb295",
    padding: 8,
    borderRadius: 5,
    marginBottom: 10,
    width: 340,
    alignItems: "center",
  },
  buttonText: {
    color: "#fcfcfc",
    fontWeight: "bold",
    fontSize: 20,
  },
});
