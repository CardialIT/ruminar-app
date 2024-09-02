import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../DetalhesDieta/styles.js";
import { useContextProvider } from "../../context/AuthContext.js";
import Loading from "../../components/LoadingElement/index.js";
import { postCalculoAgua } from "../../services/api.js";  // Certifique-se de importar a função corretamente
import Toast from "react-native-toast-message";

export default function DetalhesWater({ route }) {

  const navigation = useNavigation();
  const {
    loading,
    setLoading,
    userId,
    token,
    msEstimadaCalculoAgua, 
    setMSEstimadaCalculoAgua,
    msExistenteCalculoAgua, 
    setMSExistenteCalculoAgua,
    calculoAgua, 
    nomeCalculoAgua
  } = useContextProvider();

  const handleCriarCalculoAgua = async () => {
    setLoading(true);

    const waterData = {
      nome_calculo: nomeCalculoAgua,
      valor_materia_seca_estimada: msEstimadaCalculoAgua,
      valor_materia_seca_existente: msExistenteCalculoAgua,
      resultado: calculoAgua,
      usuario_id: userId
    };

    try {
      
      console.log("JSON QUE ESTÁ SENDO ENVIADO:", JSON.stringify(waterData, null, 2));
      await postCalculoAgua(waterData, token);
      Toast.show({
        type: "success",
        text1: "Cálculo de água criado com sucesso",
      });
      navigation.navigate("Water");
    } catch (error) {
      console.error("Erro ao criar cálculo de água:", error);
      Toast.show({
        type: "error",
        text1: "Erro ao criar cálculo de água",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("CadastroWaterScreen")}>
          <Ionicons name="chevron-back-outline" size={24} color="white" />
        </TouchableOpacity>

        <Text style={styles.title}>Resultados do cálculo da água</Text>

        <TouchableOpacity>
        </TouchableOpacity>
      </View>

      <View style={styles.secondContainer}>
        <View style={styles.containerProps}>
          <View style={styles.containerPropsItens}>
            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>Nome do cálculo: </Text>
              <Text style={styles.percetange}>{nomeCalculoAgua}</Text>
            </View>
            
            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>Matéria seca estimada: </Text>
              <Text style={styles.percetange}>{msEstimadaCalculoAgua}</Text>
            </View>
            
            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>Matéria seca existente: </Text>
              <Text style={styles.percetange}>{msExistenteCalculoAgua}</Text>
            </View>
            
            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>Resultado: </Text>
              <Text style={styles.percetange}>{calculoAgua}</Text>
            </View>
          </View>
        </View>
      </View>
      
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.createButton} onPress={handleCriarCalculoAgua}>
          <Text style={styles.textButton}>CRIAR CÁLCULO</Text>
        </TouchableOpacity>
      </View>
      {loading && <Loading />}
    </View>
  );
}
