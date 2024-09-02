import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { register } from "../../services/api";
import Toast from "react-native-toast-message";

export default function RegisterScreen() {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");

  const onChangeNomeHandler = (nome) => setNome(nome);
  const onChangeEmailHandler = (email) => setEmail(email);
  const onChangeSenhaHandler = (senha) => setSenha(senha);

  const handleRegisterPress = async () => {
    const payload = { nome, email, senha };
    console.log("Payload:", payload);

    Toast.show({
      type: "info",
      text1: "Carregando",
      text2: "Aguarde enquanto fazemos seu cadastro...",
      autoHide: true,
    });

    try {
      const response = await register(payload);

      console.log("Response:", response);
      
      // Exibe um Toast com base no status da resposta
      if (response.status === 200) {
        Toast.show({
          type: "success",
          text1: "Cadastro realizado com sucesso!",
          text2: "Seja bem-vindo!",
        });

        // Aqui você pode navegar para a tela de login, por exemplo
        navigation.navigate('Login');
      } else {
        Toast.show({
          type: "error",
          text1: "Cadastro falhou",
          text2: "Algo deu errado, tente novamente.",
        });
      }
    } catch (err) {
      console.error("Erro no cadastro:", err);
      
      Toast.show({
        type: "error",
        text1: "Cadastro falhou",
        text2: "Entre em contato com o suporte.",
      });
    } finally {
      Toast.hide(); // Isso vai garantir que o Toast de carregamento seja ocultado
    }
  };

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Olá! Registre-se para começar</Text>

        <View style={styles.inputField}>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            onChangeText={onChangeNomeHandler}
          />
        </View>

        <View style={styles.inputField}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={onChangeEmailHandler}
          />
        </View>

        <View style={styles.inputField}>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
            onChangeText={onChangeSenhaHandler}
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
          onPress={handleRegisterPress}
          style={styles.loginButton}
        >
          <Text style={styles.buttonText}>REGISTRAR-SE</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={handleLoginPress}>
          <Text style={styles.register}>
            Você já tem uma conta?{" "}
            <Text style={styles.register2}>Faça login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
