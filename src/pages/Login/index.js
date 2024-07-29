import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { login } from "../../services/api";
import { useContextProvider } from "../../context/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import Toast from "react-native-toast-message";

export default function LoginScreen() {
  const navigation = useNavigation();
  const {
    loading,
    setLoading,
    setToken,
    setUserName,
    setUserId,
    setUserEmail,
    setUserCreatedAt,
    setIsAuth,
    userName,
  } = useContextProvider();
  
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const onChangeEmailHandler = (email) => setEmail(email);
  const onChangeSenhaHandler = (senha) => setSenha(senha);

  const handleLogin = async () => {
    const payload = { email, senha };
    try {
      setLoading(true);
      Toast.show({
        type: "info",
        text1: "Carregando",
        text2: "Aguarde enquanto fazemos login...",
        autoHide: false,
      });

      const response = await login(payload);
      const { token, user } = response;
      
      setToken(token);
      setUserName(user.nome);
      setUserId(user.usuario_id);
      setIsAuth(true);
      setLoading(false);
      setUserEmail(user.email);
      setUserCreatedAt(user.data_cadastro);

      Toast.hide();
    } catch (err) {
      setLoading(false);
      Toast.hide();
      Toast.show({
        type: "error",
        text1: "Login falhou",
        text2: "Verifique suas credenciais",
      });
    }
  };

  const handleRegisterPress = () => navigation.navigate("Register");

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        Bem vindo! Fico feliz em vê-lo novamente
      </Text>

      <View style={styles.inputField}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={onChangeEmailHandler}
        />
      </View>

      <View style={styles.inputField}>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={showPassword}
          value={senha}
          onChangeText={onChangeSenhaHandler}
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

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleRegisterPress}>
        <Text style={styles.register}>
          Não tem uma conta?{" "}
          <Text style={styles.register2}>Cadastre-se agora</Text>
        </Text>
      </TouchableOpacity>
      <Toast />
    </View>
  );
}
