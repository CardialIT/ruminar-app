import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "../DietaCalculo/styles.js";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { postLivraria } from "../../services/api.js";
import Toast from "react-native-toast-message";

export default function DietasCalculo() {
  const navigation = useNavigation();
  const [itemName, setItemName] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Ionicons name="chevron-back-outline" size={24} color="white" />
        </TouchableOpacity>

        <Text style={styles.title}>Nova Dieta</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("DetalhesLivrariaScreen")}
        >
          {/* <Image
            source={require("../../../assets/Fill.png")}
            style={styles.containerItem}
          /> */}
        </TouchableOpacity>
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.titleHead}>
          Preencha as informações relacionadas ao amido
        </Text>
      </View>

      <View style={styles.containerItem}>
        <Text style={styles.containerTitle}>Amido estimado</Text>

        <TextInput
          value={itemName}
          onChangeText={(text) => setItemName(text)}
          placeholder="KG / MS"
          style={styles.containerInput}
        />
      </View>

      <View style={styles.containerItem}>
        <TextInput
          value={itemName}
          onChangeText={(text) => setItemName(text)}
          placeholder="IMS:"
          style={styles.containerInputIMSFDN}
        />
        <TextInput
          value={itemName}
          onChangeText={(text) => setItemName(text)}
          placeholder="FDN:"
          style={styles.containerInputIMSFDN}
        />
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity
          onPress={() => navigation.navigate("")}
          style={styles.createButton}
        >
          <Text style={styles.textButton}>PRÓXIMO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
