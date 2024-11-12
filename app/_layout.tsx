import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Dimensions, ImageBackground } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Selamat Datang</Text>
      <Text style={styles.subTitle}>Di Top Up Game termurah</Text>
      <TextInput
        placeholder="abc@gmail.com"
        style={styles.TextInput}
      />
      <TextInput
        placeholder="Password"
        style={styles.TextInput}
      />
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 70,
    color: '#34434D',
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 20,
    color: 'gray',
  },
  TextInput: {
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
});