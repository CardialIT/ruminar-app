import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../DetalhesLivraria/styles.js";
import { useContextProvider } from "../../context/AuthContext.js";
import Loading from "../../components/LoadingElement/index.js";

export default function DetalhesDieta({ route }) {
  const navigation = useNavigation();
  const {
    dieta,
    milhoEstimado,
    materiaSecaExistente,
    fracaoProteica, mineral,
    materiaSecaFaltando,
  
    loading,
    
    setLoading } = useContextProvider();
  const { fdnTotal } = dieta;

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

        <Text style={styles.title}>Parâmetros da dieta</Text>

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
            {renderSelectedLivrarias()}

            {/* <View style={styles.itensPercentageC}>
              <Text style={styles.itens}>FDN Total: {fdnTotal.toFixed(2)}</Text>
              <Text style={styles.percetange}> em MS</Text>
            </View> */}

            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>PB: {milhoEstimado}</Text>
              <Text style={styles.percetange}>%</Text>
            </View>

            <View style={styles.itensPercentageC}>
              <Text style={styles.itens}>PNDR: {materiaSecaExistente}</Text>
              <Text style={styles.percetange}>%</Text>
            </View>

            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>PDR: {fracaoProteica}</Text>
              <Text style={styles.percetange}>%</Text>
            </View>

            <View style={styles.itensPercentageC}>
              <Text style={styles.itens}>PROTEÍNA SOLÚVEL: {materiaSecaFaltando}</Text>
              <Text style={styles.percetange}>%</Text>
            </View>

            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>FDN Efetivo: {mineral}</Text>
              <Text style={styles.percetange}>%</Text>
            </View>

            <View style={styles.itensPercentageC}>
              <Text style={styles.itens}>NDT: {materiaSecaFaltando}</Text>
              <Text style={styles.percetange}>%</Text>
            </View>

            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>FDN: {mineral}</Text>
              <Text style={styles.percetange}>%</Text>
            </View>

            <View style={styles.itensPercentageC}>
              <Text style={styles.itens}>CNF: {mineral}</Text>
              <Text style={styles.percetange}>%</Text>
            </View>

            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>AMIDO: {mineral}</Text>
              <Text style={styles.percetange}>%</Text>
            </View>

            <View style={styles.itensPercentageC}>
              <Text style={styles.itens}>EE: {mineral}</Text>
              <Text style={styles.percetange}>%</Text>
            </View>

          </View>
        </View>
      </View>
      {loading && <Loading />}
    </View>
  );
}
