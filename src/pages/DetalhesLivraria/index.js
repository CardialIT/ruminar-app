import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../DetalhesLivraria/styles";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function DetalhesLivrariaScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("CadastroLivrariaScreen")}
        >
          <Ionicons name="chevron-back-outline" size={24} color="white" />
        </TouchableOpacity>

        <Text style={styles.title}>Detalhes da Livraria</Text>

        <TouchableOpacity>
          <Image
            source={require("../../../assets/Fill.png")}
            style={styles.containerItem}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.secondContainer}>
        <View>
          <Text style={styles.containerTitle}>Pastagem</Text>
        </View>

        <View style={styles.containerItems1}>
          <Text style={styles.items}>MS - Nome sem Abreviar</Text>
          <Text style={styles.percentage}>1%</Text>
        </View>

        <View style={styles.containerItemsC}>
          <Text style={styles.items}>PB - Nome sem Abreviar</Text>
          <Text style={styles.percentage}>7%</Text>
        </View>

        <View style={styles.containerItems}>
          <Text style={styles.items}>PDR - Nome sem Abreviar</Text>
          <Text style={styles.percentage}>60%</Text>
        </View>

        <View style={styles.containerItemsC}>
          <Text style={styles.items}>Amído</Text>
          <Text style={styles.percentage}>29%</Text>
        </View>

        <View style={styles.containerItems}>
          <Text style={styles.items}>NDT - Nome sem Abreviar</Text>
          <Text style={styles.percentage}>67%</Text>
        </View>

        <View style={styles.containerItemsC}>
          <Text style={styles.items}>FDN - Nome sem Abreviar</Text>
          <Text style={styles.percentage}>52%</Text>
        </View>

        <View style={styles.containerItems}>
          <Text style={styles.items}>FDN Efeito</Text>
          <Text style={styles.percentage}>49%</Text>
        </View>

        <View style={styles.containerItemsC}>
          <Text style={styles.items}>CNF - Nome se Abreviar</Text>
          <Text style={styles.percentage}>34%</Text>
        </View>

        <View style={styles.containerItems2}>
          <Text style={styles.items}>EE - Nome se Abreviar</Text>
          <Text style={styles.percentage}>1,42%</Text>
        </View>
      </View>

      <View style={styles.containerInfo}>
        <Image
          source={require("../../assets/Notification.png")}
          style={styles.image}
        />
        <Text style={styles.infoText}>
          Alguma mensagem de informação ou um texto?
        </Text>
      </View>
    </View>
  );
}
