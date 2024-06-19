import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import styles from "../CadastroDieta4/styles";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { postDieta } from "../../services/api.js";
import Toast from "react-native-toast-message";
import { useContextProvider } from "../../context/AuthContext.js";
import Loading from "../../components/LoadingElement/index.js";

export default function CadastroDieta4Screen() {
  const {
    dieta,
    updateDieta,
    ims,
    fdn,
    calcularFDNAlimentos,
    calcularFDNTotal,
    loading,
    setLoading,
    calcularMOAlimentos,
    materiaOrganicaFormatada
  } = useContextProvider();
  const navigation = useNavigation();
  const [selectedLivrarias, setSelectedLivrarias] = useState([]);


  const handleInputChange = (text, index) => {
    const updatedLivrarias = [...dieta.selectedLivrarias];
    updatedLivrarias[index].kgMs = text;
  
    console.log("Valor do texto:", text);
    console.log("Valor de ms:", updatedLivrarias[index].ms);
  
    const materiaOrganica = parseFloat(text) / parseFloat(updatedLivrarias[index].ms);
    const materiaOrganicaFormatada = materiaOrganica.toFixed(2);
    
    console.log("Matéria Orgânica:", materiaOrganica);
    console.log("Matéria Orgânica Formatada:", materiaOrganicaFormatada);
  
    updatedLivrarias[index].materiaOrganicaFormatada = materiaOrganicaFormatada;
    updateDieta("selectedLivrarias", updatedLivrarias);
  };
  

  const renderSelectedLivrarias = () => {
    return dieta.selectedLivrarias.map((livraria, index) => (
        <View key={index} style={styles.containerItemTitle}>
            <Text style={styles.listagemItemTitle}>{livraria.nome}</Text>
            <TextInput
                style={styles.inputField}
                placeholder="em MO"
                value={livraria.kgMs || ''}
                onChangeText={(text) => handleInputChange(text, index)}
                keyboardType="numeric"
            />
            <Text style={styles.listagemItemSubtitle}>
                Matéria Orgânica: {livraria.materiaOrganicaFormatada || '0.00'}
            </Text>
        </View>
    ));
};


  const handleProximo = () => {
    setLoading(true);
    try {
      calcularFDNAlimentos();
      calcularFDNTotal();
      navigation.navigate("ResultadoDieta");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.firstContainer}>

        <TouchableOpacity onPress={() => navigation.navigate("DetalhesDieta")}>
          <Ionicons name="chevron-back-outline" size={24} color="white" />
        </TouchableOpacity>

        <Text style={styles.title}>Nova Dieta</Text>

        <TouchableOpacity onPress={() => navigation.navigate("DetalhesLivrariaScreen")}>

        </TouchableOpacity>
      </View>

      <View style={styles.secondContainer}>
        <Text style={styles.listagemTitle}>ADICIONAR MAIS LIVRARIAS</Text>

        <ScrollView style={styles.containerList}>

          {renderSelectedLivrarias()}

          <View style={styles.containerAddItem}>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => navigation.navigate("ListagemLivrariaScreen")}
            >
              <Text style={styles.createButtonText}>ADICIONAR LIVRARIA</Text>
              <Ionicons name="add-outline" size={24} color="#307C31" />
            </TouchableOpacity>
          </View>

          <View style={styles.containerButton}>
            <TouchableOpacity
              onPress={() =>
                handleProximo()
              }
              style={styles.createButton}
            >
              <Text style={styles.textButton}>PRÓXIMO</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      {loading && <Loading />}
    </View >
  )
}
