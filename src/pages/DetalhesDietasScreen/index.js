import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../DetalhesDietasScreen/styles";
import { useContextProvider } from "../../context/AuthContext";

export default function DetalhesDietasScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { item } = route.params;

  const {
    dieta
  } = useContextProvider();

  const renderSelectedLivrarias = () => {
    return dieta.selectedLivrarias.map((livraria, index) => (
      <View key={livraria.id} style={styles.itensPercentageC}>
        <Text style={styles.itens}>{livraria.nome}: </Text>
        <Text style={styles.percetange}>{livraria.kgMs} em MS</Text>
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

        <Text style={styles.title}>Detalhes da Dieta</Text>

      </View>

      <View style={styles.secondContainer}>

        <View style={styles.containerProps}>

          <View style={styles.containerPropsItens}>
            
            <Text style={styles.itemTitle}>{item.nome_resumo}</Text>
            
            {renderSelectedLivrarias()}

            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>PB: </Text>
              <Text style={styles.percetange}>{item.pbTotal} %</Text>
            </View>

            <View style={styles.itensPercentageC}>
              <Text style={styles.itens}>PNDR: </Text>
              <Text style={styles.percetange}>{item.pndrTotal} %</Text>
            </View>

            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>PDR: </Text>
              <Text style={styles.percetange}>{item.pdrTotal} %</Text>
            </View>

            <View style={styles.itensPercentageC}>
              <Text style={styles.itens}>Proteína Solúvel: </Text>
              <Text style={styles.percetange}>{item.proteinaSoluvelTotal} %</Text>
            </View>

            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>FDN Efetivo:</Text>
              <Text style={styles.percetange}>{item.fdnEfetivoTotal} %</Text>
            </View>

            <View style={styles.itensPercentageC}>
              <Text style={styles.itens}>NDT: </Text>
              <Text style={styles.percetange}>{item.ndtTotal} %</Text>
            </View>

            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>FDN: </Text>
              <Text style={styles.percetange}>{item.itemFDNTotal} %</Text>
            </View>

            <View style={styles.itensPercentageC}>
              <Text style={styles.itens}>CNF: </Text>
              <Text style={styles.percetange}>{item.cnfTotal} %</Text>
            </View>

            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>AMIDO: </Text>
              <Text style={styles.percetange}>{item.amidoTotal} %</Text>
            </View>

            <View style={styles.itensPercentageC}>
              <Text style={styles.itens}>EE: </Text>
              <Text style={styles.percetange}>{item.eeTotal} %</Text>
            </View>
          </View>
        </View>
      </View>
    </View >
  );
}
