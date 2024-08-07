import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles.js";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Toast from "react-native-toast-message";
import { useContextProvider } from "../../context/AuthContext.js";
import Loading from "../../components/LoadingElement/index.js";

export default function CadastroDieta4Screen() {
  const { dieta, loading, setLoading, msTotalDigitado, moTotal, calcularMSDieta } = useContextProvider();
  const navigation = useNavigation();
  const [selectedLivrarias, setSelectedLivrarias] = useState([]);


  const renderSelectedLivrarias = () => {
   
    return dieta.selectedLivrarias.map((livraria, index) => (
      <View key={index} style={styles.containerItemTitle}>
        <Text style={styles.listagemItemTitle}>{livraria.nome}</Text>
        <Text>Valor em Materia organica: {livraria.materiaOrganicaFormatada}</Text>
      </View>
    ));
  };

  const handleProximo = () => {
    setLoading(true);
    try {
      calcularMSDieta(msTotalDigitado, moTotal)
      navigation.navigate("DetalhesDieta");
    } finally {
      setLoading(false);
    }
  };



  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("CadastroDieta2Screen")}>
          <Ionicons name="chevron-back-outline" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Valores em MO</Text>
        <TouchableOpacity onPress={() => navigation.navigate("DetalhesLivrariaScreen")}>
        </TouchableOpacity>
      </View>
      <View style={styles.secondContainer}>
       
        <ScrollView style={styles.containerList}>
          {renderSelectedLivrarias()}
          <View style={styles.containerButton}>
            <TouchableOpacity onPress={handleProximo} style={styles.createButton}>
              <Text style={styles.textButton}>VER PARÂMETROS</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      {loading && <Loading />}
    </View>
  );
}
