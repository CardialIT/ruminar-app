import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../DetalhesLivraria/styles";
import { useContextProvider } from "../../context/AuthContext.js";

export default function DetalhesDieta({ route }) {
  const navigation = useNavigation();
  const { dieta, milhoEstimado, materiaSecaExistente, fracaoProteica, calcularMineral } = useContextProvider();
  const { fdnTotal } = dieta;

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={24} color="white" />
        </TouchableOpacity>

        <Text style={styles.title}>Resumo do planejamento</Text>

        <TouchableOpacity>
          {/* <Image
            source={require("../../../assets/Fill.png")}
            style={styles.containerImage}
          /> */}
        </TouchableOpacity>
      </View>

      <View style={styles.secondContainer}>
        <View style={styles.containerProps}>
          <View style={styles.containerPropsItens}>
            <View style={styles.itensPercentageC}>
              <Text style={styles.itens}>FDN Total: {fdnTotal.toFixed(2)}</Text>
              <Text style={styles.percetange}> em MS</Text>
            </View>

            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>Milho Estimado: {milhoEstimado}</Text>
              <Text style={styles.percetange}> em MS</Text>
            </View>

            <View style={styles.itensPercentageC}>
              <Text style={styles.itens}>Matéria Seca Existente: {materiaSecaExistente}</Text>
              <Text style={styles.percetange}> em MS</Text>
            </View>

            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>Fração Proteica Necessária: {fracaoProteica}</Text>
              <Text style={styles.percetange}> em MS</Text>
            </View>

            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>Mineral: {calcularMineral}</Text>
              <Text style={styles.percetange}> em KG</Text>
            </View>

          </View>
        </View>
      </View>
    </View>
  );
}
