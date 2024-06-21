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
    fracaoProteica, 
    mineral,
    materiaSecaFaltando,
    pbTotal,
    pndrTotal,
    pdrTotal,
    proteinaSoluvelTotal,
    fdnEfetivoTotal,   
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
              <Text style={styles.itens}>PB: </Text>
              <Text style={styles.percetange}>{pbTotal} %</Text>
            </View>

            <View style={styles.itensPercentageC}>
              <Text style={styles.itens}>PNDR: </Text>
              <Text style={styles.percetange}>{pndrTotal} %</Text>
            </View>

            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>PDR: </Text>
              <Text style={styles.percetange}>{pdrTotal} %</Text>
            </View>  

            <View style={styles.itensPercentageC}>
              <Text style={styles.itens}>Proteína Solúvel: </Text>
              <Text style={styles.percetange}>{proteinaSoluvelTotal} %</Text>
            </View>

            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>FDN Efetivo: </Text>
              <Text style={styles.percetange}>{fdnEfetivoTotal} %</Text>
            </View>  
      
        
          </View>
        </View>
      </View>
      {loading && <Loading />}
    </View>
  );
}
