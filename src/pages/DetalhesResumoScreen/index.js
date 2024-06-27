import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

export default function DetalhesResumoScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Detalhes do Resumo</Text>
      </View>
      <View style={styles.secondContainer}>
        <View style={styles.detailContainer}>
          <Text style={styles.detailText}>Nome: {item.nome_resumo}</Text>
          <Text style={styles.detailText}>Alimento Select: {item.alimentos_select}</Text>
          <Text style={styles.detailText}>Produção Estimada: {item.milho_estimado}</Text>
          <Text style={styles.detailText}>Dias de Lactação: {item.materia_seca_existente}</Text>
          <Text style={styles.detailText}>Materia Seca Existente: {item.fracao_proteica_necessaria}</Text>
          <Text style={styles.detailText}>Materia Seca Faltando: {item.materia_seca_faltando}</Text>
          <Text style={styles.detailText}>Mineral: {item.mineral}</Text> 
        </View>
      </View>
    </View>
  );
}
