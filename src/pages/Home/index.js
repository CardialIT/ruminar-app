import { View, TouchableOpacity, Image, Text } from "react-native";
import React from "react";
import styles from "../Home/styles";
import { useNavigation } from "@react-navigation/native";
import { getLivraria } from "../../services/api";

export default function HomeScreen() {
  const Nome = "{Nome}";

  const navigation = useNavigation();

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
        <TouchableOpacity>
          {/* <Image
            source={require("../../../assets/Fill.png")}
            style={styles.containerItem}
          /> */}
        </TouchableOpacity>
      </View>

      <View style={styles.secondContainer}>
        <Text style={styles.title}>Bem-vindo </Text>
        <Text style={styles.subtitle}>O que você gostaria de fazer hoje?</Text>
      </View>

      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => navigation.navigate("DietasScreen")}
      >
        <Image
          source={require("../../../assets/Cows.png")}
          style={styles.image}
        />
        <View style={styles.overlay}>
          <Text style={styles.imageTitle}>Dietas</Text>
          <Text style={styles.imageSubtitle}>Crie a dieta ideal</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => navigation.navigate("LivrariaScreen")}
      >
        <Image
          source={require("../../../assets/Library.png")}
          style={styles.image}
        />
        <View style={styles.overlay}>
          <Text style={styles.imageTitle}>Livraria</Text>
          <Text style={styles.imageSubtitle}>Adicione alimentos importantes</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
