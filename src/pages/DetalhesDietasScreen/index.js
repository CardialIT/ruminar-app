import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../DetalhesDietasScreen/styles";
import { useContextProvider } from "../../context/AuthContext";

export default function DetalhesDietasScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { item } = route.params;

  const { dieta } = useContextProvider();

  const renderSelectedAlimentos = () => {
    return item.alimentos_select.map((alimento, index) => (
      <View key={index} style={styles.itensPercentageC}>
        <Text style={styles.itensC}>{alimento.nome}</Text>
        <Text style={styles.percetangeN}>MS: </Text>
        <Text style={styles.percetangeB}>{alimento.kgMs}</Text>
        <Text style={styles.percetangeN}>MO: </Text>
        <Text style={styles.percetangeB}>{alimento.kgMo}</Text>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back-outline" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Detalhes da Dieta</Text>
      </View>

      <ScrollView>
      <View style={styles.secondContainer}>
        <View style={styles.containerProps}>
          <View style={styles.containerPropsItens}>
            <Text style={styles.itemTitle}>{item.nome_da_dieta}</Text>
            {renderSelectedAlimentos()}

            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>MS: </Text>
              <Text style={styles.percetange}>{item.ms_dieta} %</Text>
            </View>

            <View style={styles.itensPercentageC}>
              <Text style={styles.itens}>PB: </Text>
              <Text style={styles.percetange}>{item.pb_dieta} %</Text>
            </View>
            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>PNDR: </Text>
              <Text style={styles.percetange}>{parseFloat(item.pndr_dieta).toFixed(2)} %</Text>
            </View>
            <View style={styles.itensPercentageC}>
              <Text style={styles.itens}>PDR: </Text>
              <Text style={styles.percetange}>{item.pdr_dieta} %</Text>
            </View>
            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>FDN Efetivo:</Text>
              <Text style={styles.percetange}>{item.fdn_efetivo_dieta} %</Text>
            </View>
            <View style={styles.itensPercentageC}>
              <Text style={styles.itens}>NDT: </Text>
              <Text style={styles.percetange}>{item.ndt_dieta} %</Text>
            </View>
            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>FDN: </Text>
              <Text style={styles.percetange}>{item.fdn_dieta} %</Text>
            </View>
            <View style={styles.itensPercentageC}>
              <Text style={styles.itens}>CNF: </Text>
              <Text style={styles.percetange}>{item.cnf_dieta} %</Text>
            </View>
            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>AMIDO: </Text>
              <Text style={styles.percetange}>{item.amido_dieta} %</Text>
            </View>
            <View style={styles.itensPercentageC}>
              <Text style={styles.itens}>EE: </Text>
              <Text style={styles.percetange}>{item.ee_dieta} %</Text>
            </View>
          </View>
        </View>
      </View>
      </ScrollView>
    </View>
  );
}