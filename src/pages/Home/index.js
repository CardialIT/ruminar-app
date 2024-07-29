import { View, TouchableOpacity, Image, Text } from "react-native";
import React from "react";
import styles from "../Home/styles";
import { useNavigation } from "@react-navigation/native";
import { getLivraria } from "../../services/api";
import { useContextProvider } from "../../context/AuthContext"
import { Feather } from '@expo/vector-icons';

export default function HomeScreen() {
  const Nome = "{Nome}";

  const navigation = useNavigation();

  const {
    userName, 
    setIsAuth,
    setToken
  } = useContextProvider();

function logout (){
  setIsAuth(false)
  setToken("")
}

  // function btnGetLivraria() {
  //   console.log("Chamando btnGetLivraria");
  //   getLivraria()
  //     .then((response) => {
  //       console.log(response);
  //       navigation.navigate("LivrariaScreen", { livrariaData: response });
  //     })
  //     .catch((error) => {
  //       console.log("Erro ao mostrar Livraria", error);
  //     });
  // }

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <TouchableOpacity onPress={logout}>
        <Feather name="log-out" size={25} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.secondContainer}>
        <Text style={styles.title}>Bem-vindo {userName}</Text>
        <Text style={styles.subtitle}>O que você gostaria de fazer hoje?</Text>
      </View>

      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => navigation.navigate("Livraria")}
      >
        <Image
          source={require("../../../assets/Library.png")}
          style={styles.images}
        />
        <View style={styles.overlay}>
          <Text style={styles.imageTitle}>Livraria</Text>
          <Text style={styles.imageSubtitle}>Adicione alimentos importantes</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => navigation.navigate("Resumo")}
      >
        <Image
          source={require("../../../assets/Cows.png")}
          style={styles.images}
        />
        <View style={styles.overlay}>
          <Text style={styles.imageTitle}>Resumos</Text>
          <Text style={styles.imageSubtitle}>Crie a dieta ideal</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => navigation.navigate("Dietas")}
      >
        <Image
          source={require("../../../assets/imgDietas.jpg")}
          style={styles.imageR}
        />
        <View style={styles.overlay}>
          <Text style={styles.imageTitle}>Dietas</Text>
          <Text style={styles.imageSubtitle}>Adicione alimentos importantes</Text>
        </View>
      </TouchableOpacity>
      
    </View>
  );
}
