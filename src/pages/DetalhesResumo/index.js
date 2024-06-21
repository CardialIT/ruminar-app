import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../DetalhesLivraria/styles.js";
import { useContextProvider } from "../../context/AuthContext.js";
import Loading from "../../components/LoadingElement/index.js";

export default function DetalhesResumoScreen({ route }) {
  const navigation = useNavigation();
  const {
    dieta,
    loading,
  } = useContextProvider();
  const { milhoEstimado, materiaSecaExistente, fracaoProteica, mineral, materiaSecaFaltando } = route.params;

  const renderSelectedLivrarias = () => {
    return dieta.selectedLivrarias.map((livraria, index) => (
      <View key={livraria.id} style={styles.itensPercentageC}>
        <Text style={styles.itens}>{livraria.nome}: {livraria.kgMs}</Text>
        <Text style={styles.percetange}>em MS</Text>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Resumo do planejamento</Text>
        <TouchableOpacity>
          {/* <Image
            source={require("../../../assets/Trash.png")}
            style={styles.titleImage}
          /> */}
        </TouchableOpacity>
      </View>

      <View style={styles.secondContainer}>
        <Text style={styles.listagemTitle}>Resumo</Text>
        <View style={styles.containerList}>
          <View style={styles.containerItemTitle}>
            <Text style={styles.listagemItemTitle}>Milho Estimado: {milhoEstimado}</Text>
          </View>
          <View style={styles.containerItemTitle}>
            <Text style={styles.listagemItemTitle}>Matéria Seca Existente: {materiaSecaExistente}</Text>
          </View>
          <View style={styles.containerItemTitle}>
            <Text style={styles.listagemItemTitle}>Fração Proteica: {fracaoProteica}</Text>
          </View>
          <View style={styles.containerItemTitle}>
            <Text style={styles.listagemItemTitle}>Mineral: {mineral}</Text>
          </View>
          <View style={styles.containerItemTitle}>
            <Text style={styles.listagemItemTitle}>Matéria Seca Faltando: {materiaSecaFaltando}</Text>
          </View>
          {renderSelectedLivrarias()}
        </View>
      </View>
      {loading && <Loading />}
    </View>
  );
}
