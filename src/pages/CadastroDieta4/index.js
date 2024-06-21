import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles.js";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Toast from "react-native-toast-message";
import { useContextProvider } from "../../context/AuthContext.js";
import Loading from "../../components/LoadingElement/index.js";

export default function CadastroDieta4Screen() {
  const { dieta, updateDieta, calcularFDNAlimentos, calcularFDNTotal, calcularMOIndividualAlimentos, loading, setLoading } = useContextProvider();
  const navigation = useNavigation();
  const [selectedLivrarias, setSelectedLivrarias] = useState([]);

  const handleSelectLivraria = (item) => {
    const updatedLivrarias = [...dieta.selectedLivrarias, item];
    updateDieta("selectedLivrarias", updatedLivrarias);
    navigation.navigate("CadastroDieta2Screen");
  };

  const renderSelectedLivrarias = () => {
    console.log("DIETAAA DO CRLHHH", JSON.stringify(dieta, null, 2));
    return dieta.selectedLivrarias.map((livraria, index) => (
      <View key={index} style={styles.containerItemTitle}>
        <Text style={styles.listagemItemTitle}>{livraria.nome}</Text>
        <Text>MO: {livraria.materiaOrganicaFormatada}</Text>
      </View>
    ));
  };

  const handleProximo = () => {
    setLoading(true);
    try {
      calcularFDNAlimentos();
      calcularMOIndividualAlimentos();
      calcularFDNTotal();
      navigation.navigate("DetalhesDieta");
    } finally {
      setLoading(false);
    }
  };



  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("CadastroDieta3Screen")}>
          <Ionicons name="chevron-back-outline" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Valores em Matéria Orgânica</Text>
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
