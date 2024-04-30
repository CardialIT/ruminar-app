import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import IconReturn from "../../assets/icons-voltar-.png";
import { Ionicons } from "@expo/vector-icons";

export default function RegisterScreen({ navigation }) {
  const handlePress = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.topLeftButton}>
          <Image source={IconReturn} style={styles.buttonReturn} />
        </TouchableOpacity>

        <Text style={styles.welcomeText}>Olá! Registre-se para começar</Text>

        <View style={styles.inputField}>
          <TextInput style={styles.input} placeholder="Nome" />
        </View>

        <View style={styles.inputField}>
          <TextInput style={styles.input} placeholder="Email" />
        </View>

        <View style={styles.inputField}>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
          />
        </View>

        <View style={styles.inputField}>
          <TextInput
            style={styles.input}
            placeholder="Confirme sua Senha"
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity
          onPress={handlePress}
          style={styles.loginButton}>
          <Text style={styles.buttonText}>REGISTRAR-SE</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Text style={styles.register}>
            Você já tem uma conta?{" "}
            <Text style={styles.register2}>Faça login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
