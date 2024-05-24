import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import IconReturn from "../../assets/icons-voltar-.png";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(true);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.topLeftButton}>
        <Image source={IconReturn} style={styles.buttonReturn} />
      </TouchableOpacity>

      <Text style={styles.welcomeText}>
        Bem vindo! Fico feliz em vê-lo novamente
      </Text>

      <View style={styles.inputField}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={input.email}
          onChangeText={(text) => setInput({ ...input, email: text })}
        />
      </View>

      <View style={styles.inputField}>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={showPassword}
          value={input.password}
          onChangeText={(text) => setInput({ ...input, password: text })}
        />
        <TouchableOpacity
          style={styles.icon}
          onPress={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <Ionicons name="eye-off" size={24} color="black" />
          ) : (
            <Ionicons name="eye" size={24} color="black" />
          )}
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.register}>
          Não tem uma conta?{" "}
          <Text style={styles.register2}>Cadastre-se agora</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
