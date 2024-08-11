import { View, TouchableOpacity, Image, Text, ScrollView } from "react-native";
import React from "react";
import styles from "../Home/styles";
import { useNavigation } from "@react-navigation/native";
import { useContextProvider } from "../../context/AuthContext"
import { Feather } from '@expo/vector-icons';

export default function HomeScreen() {
  const navigation = useNavigation();

  const { userName, setIsAuth, setToken } = useContextProvider();

  function logout() {
    setIsAuth(false);
    setToken("");
  }

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

      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
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
            <Text style={styles.imageSubtitle}>Tenha uma ideia inicial de como será sua dieta</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => navigation.navigate("Dietas")}
        >
          <Image
            source={require("../../../assets/Library.png")}
            style={styles.images}
          />
          <View style={styles.overlay}>
            <Text style={styles.imageTitle}>Dietas</Text>
            <Text style={styles.imageSubtitle}>Crie a dieta ideal</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => navigation.navigate("Finance")}
        >
          <Image
            source={require("../../../assets/Library.png")}
            style={styles.images}
          />
          <View style={styles.overlay}>
            <Text style={styles.imageTitle}>Finanças</Text>
            <Text style={styles.imageSubtitle}>Saiba quanto vai custar sua dieta</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
