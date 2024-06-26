import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../DetalhesLivraria/styles.js";
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

  const [cadastroStatus, setCadastroStatus] = useState(null);
  const [resumo, setResumo] = useState({
    nome_resumo: "",
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
      nome_resumo: dieta.nome_da_dieta
    }));
  }, [dieta, milhoEstimado, materiaSecaExistente, fracaoProteica, mineral, materiaSecaFaltando]);

  // useEffect(() => {
  //   console.log("-- Dieta recebida: useEffect ", dieta);
  //   const selectedAlimentos = dieta.selectedLivrarias.map(livraria => livraria.nome);
  //   const novoResumo = {
  //     alimentos_select: selectedAlimentos,
  //     milho_estimado: milhoEstimado,
  //     materia_seca_existente: materiaSecaExistente,
  //     fracao_proteica_necessaria: fracaoProteica,
  //     materia_seca_faltando: materiaSecaFaltando,
  //     mineral: mineral,
  //     nome_resumo: nome_da_dieta,
  //   };
  //   console.log("Atualizando resumo: ", novoResumo);
  //   setResumo(novoResumo);
  // }, [dieta, milhoEstimado, materiaSecaExistente, fracaoProteica, mineral, materiaSecaFaltando, nome_da_dieta]);

  const postCadastroResumo = async () => {
    setLoading(true);
    console.log("-- POST CADASTRO RESUMO" + dieta)
    console.log("-- Resumo: ", resumo);
    try {
      await postResumo(resumo);
      setCadastroStatus("success");
      console.log("Cadastro realizado com sucesso");
      Toast.show({
        type: "success",
        text1: "Cadastro realizado com sucesso",
      });

      console.log("Navegando para ResumoScreen");
      navigation.navigate("ResumoScreen")

    } catch (error) {
      setCadastroStatus("failed");
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
        <TouchableOpacity onPress={() => navigation.goBack()}>
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
            <View style={styles.itensPercentageC}>
              <Text style={styles.itens}>Mineral: {mineral}</Text>
              <Text style={styles.percetange}> em KG</Text>
            </View>

            <TouchableOpacity onPress={postCadastroResumo}>
              <Text style={styles.itens}>Cadastrar</Text>
              <Ionicons name="checkmark-circle-outline" size={24} color="white" />
            </TouchableOpacity>

          </View>
        </View>
      </View>
      {loading && <Loading />}
    </View>
  );
}
