import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../DetalhesDieta/styles.js";
import { useContextProvider } from "../../context/AuthContext.js";
import Loading from "../../components/LoadingElement/index.js";
import { postDieta } from "../../services/api.js";
import Toast from "react-native-toast-message";

export default function DetalhesFinance({ route }) {

  const navigation = useNavigation();
  const {
    dieta,
    pdrTotal,
    proteinaSoluvelTotal,
    fdnEfetivoTotal,
    pbTotal,
    pndrTotal,
    ndtTotal,
    itemFDNTotal,
    cnfTotal,
    amidoTotal,
    eeTotal,
    loading,
    setLoading,
    msTotalDieta,
    userId,
    token
  } = useContextProvider();

  const { nome_da_dieta } = dieta;

  const [dietaBack, setDietaBack] = useState({
    nome_da_dieta: nome_da_dieta,
    alimentos_select: [],
    peso_medio: 0,
    producao_estimada: 0,
    del: 0,
    fill_preenchimento_ruminal: 0,
    preco_do_leite: 0,
    ms_dieta: msTotalDieta,
    pb_dieta: pbTotal,
    pndr_dieta: pndrTotal,
    pdr_dieta: pdrTotal,
    proteina_soluvel_dieta: proteinaSoluvelTotal,
    fdn_efetivo_dieta: fdnEfetivoTotal,
    ndt_dieta: ndtTotal,
    fdn_dieta: itemFDNTotal,
    cnf_dieta: cnfTotal,
    amido_dieta: amidoTotal,
    ee_dieta: eeTotal,
    usuario_id: userId
  });
 
  useEffect(() => {
    const selectedAlimentos = dieta.selectedLivrarias.map(livraria => ({
      nome: livraria.nome,
      kgMs: livraria.kgMs,
      kgMo: livraria.materiaOrganicaFormatada,
    }));
    
    setDietaBack(prevDieta => ({
      ...prevDieta,
      alimentos_select: selectedAlimentos,
      ms_dieta: msTotalDieta,
      pb_dieta: pbTotal,
      pndr_dieta: pndrTotal,
      pdr_dieta: pdrTotal,
      proteina_soluvel_dieta: proteinaSoluvelTotal,
      fdn_efetivo_dieta: fdnEfetivoTotal,
      ndt_dieta: ndtTotal,
      fdn_dieta: itemFDNTotal,
      cnf_dieta: cnfTotal,
      amido_dieta: amidoTotal,
      ee_dieta: eeTotal,
      usuario_id: userId
    }));
  }, [dieta, msTotalDieta, pbTotal, pndrTotal, pdrTotal, proteinaSoluvelTotal, fdnEfetivoTotal, ndtTotal, itemFDNTotal, cnfTotal, amidoTotal, eeTotal]);

  const handleCriarDieta = async () => {
    setLoading(true);

    try {
      console.log("JSON QUE TA SENDO ENVIADO " + JSON.stringify(dietaBack, null, 2));
      await postDieta(dietaBack, token);
      Toast.show({
        type: "success",
        text1: "Dieta criada com sucesso",
      });
      navigation.reset({
        index: 0,
        routes: [{ name: "Dietas" }],
      });
    } catch (error) {
      console.error("Erro ao criar dieta:", error);
      Toast.show({
        type: "error",
        text1: "Erro ao criar dieta",
      });
    } finally {
      setLoading(false);
    }
  };

  const renderSelectedLivrarias = () => {
    return dieta.selectedLivrarias.map((livraria, index) => (
      <View key={livraria.id} style={styles.itensPercentageC}>
        <Text style={styles.itens}>{livraria.nome}: </Text>
        <Text style={styles.percetange}>{livraria.kgMs} em MS</Text>

      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Ionicons name="chevron-back-outline" size={24} color="white" />
        </TouchableOpacity>

        <Text style={styles.title}>Resultados das finanças</Text>

        <TouchableOpacity>
        </TouchableOpacity>
      </View>

      <View style={styles.secondContainer}>
        <View style={styles.containerProps}>
          <View style={styles.containerPropsItens}>
          
        

            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>Valor total da dieta: </Text>
              <Text style={styles.percetange}>R$ {eeTotal}</Text>
            </View>

          </View>
        </View>
      </View>
      
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.createButton} onPress={handleCriarDieta}>
          <Text style={styles.textButton}>CRIAR FINANÇA</Text>
        </TouchableOpacity>
      </View>
      {loading && <Loading />}
    </View>
  );
}
