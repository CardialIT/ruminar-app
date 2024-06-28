import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../DetalhesResumo/styles.js";
import { useContextProvider } from "../../context/AuthContext.js";
import Loading from "../../components/LoadingElement/index.js";
import { postResumo } from "../../services/api.js";
import Toast from "react-native-toast-message";

export default function DetalhesResumo({ route }) {
  const navigation = useNavigation();
  const {
    dieta,
    milhoEstimado,
    materiaSecaExistente,
    fracaoProteica,
    mineral,
    materiaSecaFaltando,
    loading,
    setLoading
  } = useContextProvider();

  const { nome_da_dieta } = dieta;

  const [resumo, setResumo] = useState({
    nome_resumo: nome_da_dieta,
    alimentos_select: [],
    milho_estimado: 0,
    materia_seca_existente: 0,
    fracao_proteica_necessaria: 0,
    materia_seca_faltando: 0,
    mineral: 0
  });

  useEffect(() => {
    const selectedAlimentos = dieta.selectedLivrarias.map(livraria => livraria.nome);
    setResumo(prevResumo => ({
      ...prevResumo,
      alimentos_select: selectedAlimentos,
      milho_estimado: milhoEstimado,
      materia_seca_existente: materiaSecaExistente,
      fracao_proteica_necessaria: fracaoProteica,
      materia_seca_faltando: materiaSecaFaltando,
      mineral: mineral,
      nome_resumo: nome_da_dieta
    }));
  }, [dieta, milhoEstimado, materiaSecaExistente, fracaoProteica, mineral, materiaSecaFaltando]);

  const postCadastroResumo = async () => {
    setLoading(true);
    try {
      await postResumo(resumo);
      Toast.show({
        type: "success",
        text1: "Cadastro realizado com sucesso",
      });
      navigation.navigate("ResumoScreen"); 
    } catch (error) {
      console.error("Erro ao cadastrar resumo:", error);
      Toast.show({
        type: "error",
        text1: "Erro ao cadastrar resumo",
      });
    } finally {
      setLoading(false);
    }
  };

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
        <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Resumo do planejamento</Text>
      </View>

      <View style={styles.secondContainer}>

        <View style={styles.containerProps}>

          <View style={styles.containerPropsItens}>
            {renderSelectedLivrarias()}
            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>Milho Estimado: {milhoEstimado}</Text>
              <Text style={styles.percetange}> em MS</Text>
            </View>
            <View style={styles.itensPercentageC}>
              <Text style={styles.itens}>Matéria Seca Existente: {materiaSecaExistente}</Text>
              <Text style={styles.percetange}> em MS</Text>
            </View>
            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>Fração Proteica Necessária: {fracaoProteica}</Text>
              <Text style={styles.percetange}> em MS</Text>
            </View>
            <View style={styles.itensPercentageC}>
              <Text style={styles.itens}>Materia Seca Faltando: {materiaSecaFaltando}</Text>
              <Text style={styles.percetange}> em KG</Text>
            </View>
            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>Mineral: {mineral}</Text>
              <Text style={styles.percetange}> em KG</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={postCadastroResumo}>
          <Text style={styles.addButtonText}>SALVAR RESUMO</Text>
          <Ionicons name="save-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
      {loading && <Loading />}
    </View>
  );
}
