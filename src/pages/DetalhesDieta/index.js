import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../DetalhesDieta/styles.js";
import { useContextProvider } from "../../context/AuthContext.js";
import Loading from "../../components/LoadingElement/index.js";
import { postDieta } from "../../services/api.js";
import Toast from "react-native-toast-message";

export default function DetalhesDieta({ route }) {

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
    setLoading
  } = useContextProvider();

  const { nome_da_dieta } = dieta;

  const [dietaBack, setDietaBack] = useState({
    nome_da_dieta: " ",
    peso_medio: 0,
    producao_estimada: 0,
    del: 0,
    fill_preenchimento_ruminal: 0,
    preco_do_leite: 0,
    pb_dieta: 0,
    pndr_dieta: 0,
    pdr_dieta: 0,
    proteina_soluvel_dieta: 0,
    fdn_efetivo_dieta: 0,
    ndt_dieta: 0,
    fdn_dieta: 0,
    cnf_dieta: 0,
    amido_dieta: 0,
    ee_dieta: 0
  });

  useEffect(() => {

    setDietaBack(prevDieta => ({
      ...prevDieta,
      nome_da_dieta: nome_da_dieta,
      pb_dieta: pbTotal,
      pndr_dieta: pndrTotal,
      pdr_dieta: pdrTotal,
      proteina_soluvel_dieta: proteinaSoluvelTotal,
      fdn_efetivo_dieta: fdnEfetivoTotal,
      ndt_dieta: ndtTotal,
      fdn_dieta: itemFDNTotal,
      cnf_dieta: cnfTotal,
      amido_dieta: amidoTotal,
      ee_dieta: eeTotal
    }));
  }, [dieta, pbTotal, pndrTotal, pdrTotal, proteinaSoluvelTotal, fdnEfetivoTotal,
    ndtTotal, itemFDNTotal, cnfTotal, amidoTotal, eeTotal
  ]);


  const handleCriarDieta = async () => {
    setLoading(true);

    try {
      await postDieta(dietaBack);
      Toast.show({
        type: "success",
        text1: "Dieta criada com sucesso",
      });
      navigation.reset({
        index: 0,
        routes: [{ name: "DietasScreen" }],
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
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={24} color="white" />
        </TouchableOpacity>

        <Text style={styles.title}>Parâmetros da dieta</Text>

        <TouchableOpacity>
        </TouchableOpacity>
      </View>

      <View style={styles.secondContainer}>
        <View style={styles.containerProps}>
          <View style={styles.containerPropsItens}>
            {renderSelectedLivrarias()}

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
              <Text style={styles.itens}>FDN Efetivo:</Text>
              <Text style={styles.percetange}>{fdnEfetivoTotal} %</Text>
            </View>

            <View style={styles.itensPercentageC}>
              <Text style={styles.itens}>NDT: </Text>
              <Text style={styles.percetange}>{ndtTotal} %</Text>
            </View>

            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>FDN: </Text>
              <Text style={styles.percetange}>{itemFDNTotal} %</Text>
            </View>

            <View style={styles.itensPercentageC}>
              <Text style={styles.itens}>CNF: </Text>
              <Text style={styles.percetange}>{cnfTotal} %</Text>
            </View>

            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>AMIDO: </Text>
              <Text style={styles.percetange}>{amidoTotal} %</Text>
            </View>

            <View style={styles.itensPercentageC}>
              <Text style={styles.itens}>EE: </Text>
              <Text style={styles.percetange}>{eeTotal} %</Text>
            </View>

          </View>
        </View>
      </View>
      
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.createButton} onPress={handleCriarDieta}>
          <Text style={styles.textButton}>CRIAR DIETA</Text>
        </TouchableOpacity>
      </View>
      {loading && <Loading />}
    </View>
  );
}
