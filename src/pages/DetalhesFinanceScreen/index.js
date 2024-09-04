import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import { useContextProvider } from "../../context/AuthContext";

export default function DetalhesFinanceScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { item } = route.params;

  const {
    dieta,
    loading,
    setLoading,
    userId,
    token,
    totalCusto
  } = useContextProvider();


  const renderSelectedAlimentos = () => {
    return item.alimentos_select.map((alimento, index) => (
      <View key={index} style={styles.itensPercentage}>
        <Text style={styles.itens}>{alimento.nome}</Text>
        <Text style={styles.percetange}>{alimento.kgMs} em MS</Text>
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

        <Text style={styles.title}>Detalhes da Finança</Text>

      </View>

      <View style={styles.secondContainer}>

        <View style={styles.containerProps}>

          <View style={styles.containerPropsItens}>
            
            <Text style={styles.itemTitle}>{item.nome_da_financa}</Text>

            {renderSelectedAlimentos()}

            <View style={styles.itensPercentageC}>
              <Text style={styles.itensN}>Valor total dieta </Text>
              <Text style={styles.percetangeN}>{item.valor_total_dieta} em Kg</Text>
            </View>


            

          



          </View>
        </View>
      </View>
    </View>
  );
}
