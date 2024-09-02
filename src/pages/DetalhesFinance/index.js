import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../DetalhesDieta/styles.js";
import { useContextProvider } from "../../context/AuthContext.js";
import Loading from "../../components/LoadingElement/index.js";
import { postFinanca } from "../../services/api.js";
import Toast from "react-native-toast-message";

export default function DetalhesFinance({ route }) {

  const navigation = useNavigation();
  const {
    dieta,
    loading,
    setLoading,
    userId,
    token,
    totalCusto
  } = useContextProvider();

  const { nomeDaFinanca } = dieta;

  const [financeBack, setFinanceBack] = useState({
    nome_da_financa: nomeDaFinanca,
    valor_total_dieta: totalCusto,
    alimentos_select: [],
    usuario_id: userId
  });

  useEffect(() => {
    const selectedAlimentos = dieta.selectedLivrarias.map(livraria => ({
      nome: livraria.nome,
      kgMs: livraria.kgMs,
      r$: livraria.r$,
    }));
    
    setFinanceBack(prevFinanca => ({
      ...prevFinanca,
      alimentos_select: selectedAlimentos,
      usuario_id: userId
    }));
  }, [dieta]);

  const handleCriarFinanca = async () => {
    setLoading(true);

    try {
      console.log("JSON QUE TA SENDO ENVIADO " + JSON.stringify(financeBack, null, 2));
      await postFinanca(financeBack, token);
      Toast.show({
        type: "success",
        text1: "Finança criada com sucesso",
      });
      navigation.navigate("Finance");
    } catch (error) {
      console.error("Erro ao criar finança:", error);
      Toast.show({
        type: "error",
        text1: "Erro ao criar finança",
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
        <TouchableOpacity onPress={() => navigation.navigate("CadastroFinanceScreen2")}>
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
              <Text style={styles.percetange}>R$ {totalCusto}</Text>
            </View>
          </View>
        </View>
      </View>
      
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.createButton} onPress={handleCriarFinanca}>
          <Text style={styles.textButton}>CRIAR FINANÇA</Text>
        </TouchableOpacity>
      </View>
      {loading && <Loading />}
    </View>
  );
}
