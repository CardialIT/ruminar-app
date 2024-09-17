import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import { useContextProvider } from "../../context/AuthContext";

export default function DetalhesWaterScreen() {
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




  return (
    <View style={styles.container}>

      <View style={styles.firstContainer}>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={24} color="white" />
        </TouchableOpacity>

        <Text style={styles.title}>Detalhes do cálculo</Text>

      </View>

      <View style={styles.secondContainer}>

        <View style={styles.containerProps}>

          <View style={styles.containerPropsItens}>
            
            <Text style={styles.itemTitle}>{item.nome_calculo}</Text>

            <View style={styles.itensPercentage}>
              <Text style={styles.itensN}>Valor Materia seca existente</Text>
              <Text style={styles.percetangeN}>{item.valor_materia_seca_estimada} em %</Text>
            </View>

            <View style={styles.itensPercentageC}>
              <Text style={styles.itensN}>Valor Materia Seca Estimada</Text>
              <Text style={styles.percetangeN}> {item.valor_materia_seca_existente} em %</Text>
            </View>

            <View style={styles.itensPercentage}>
              <Text style={styles.itensN}>Resultado</Text>
              <Text style={styles.percetangeN}>{item.resultado} em Litros</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
