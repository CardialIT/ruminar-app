import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../DetalhesResumoScreen/styles";
import { useContextProvider } from "../../context/AuthContext";

export default function DetalhesResumoScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { item } = route.params;

  const {
    dieta 
  } = useContextProvider();

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
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Detalhes do Resumo</Text>
      </View>

      <View style={styles.secondContainer}>

        <View style={styles.containerProps}>

          <View style={styles.containerPropsItens}>

            {renderSelectedLivrarias()}

            <View style={styles.itensPercentage}>
              <Text style={styles.detailText}>Milho Estimado: </Text>
              <Text style={styles.percetange}>{item.milho_estimado} em MS</Text>
            </View>

            <View style={styles.itensPercentageC}>
              <Text style={styles.detailText}>Matéria Seca Existente: </Text>
              <Text style={styles.percetange}>{item.materia_seca_existente} em MS</Text>
            </View>

            <View style={styles.itensPercentage}>
              <Text style={styles.detailText}>Fração Proteica: </Text>
              <Text style={styles.percetange}>{item.fracao_proteica_necessaria} em MS</Text>
            </View>

            <View style={styles.itensPercentageC}>
              <Text style={styles.detailText}>Materia Seca Faltando: </Text>
              <Text style={styles.percetange}>{item.materia_seca_faltando} em MS</Text>
            </View>

            <View style={styles.itensPercentage}>
              <Text style={styles.detailText}>Mineral: </Text>
              <Text style={styles.percetange}>{item.mineral} em KG</Text>
            </View>

          </View>
        </View>
      </View>
    </View >
  );
}
