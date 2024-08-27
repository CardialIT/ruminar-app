import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../DetalhesDieta/styles.js";
import { useContextProvider } from "../../context/AuthContext.js";
import Loading from "../../components/LoadingElement/index.js";
import { postDieta } from "../../services/api.js";
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



  // const [waterBack, setWaterBack] = useState({
  //   nome_calculo_agua: nomeDaFinanca,
  //   alimentos_select: [],
  //   usuario_id: userId
  // });
 

  // const handleCriarDieta = async () => {
  //   setLoading(true);

  //   try {
  //     console.log("JSON QUE TA SENDO ENVIADO " + JSON.stringify(dietaBack, null, 2));
  //     await postDieta(financeBack, token);
  //     Toast.show({
  //       type: "success",
  //       text1: "Finança criada com sucesso",
  //     });
  //     navigation.reset({
  //       index: 0,
  //       routes: [{ name: "Dietas" }],
  //     });
  //   } catch (error) {
  //     console.error("Erro ao criar dieta:", error);
  //     Toast.show({
  //       type: "error",
  //       text1: "Erro ao criar dieta",
  //     });
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("CadastroWaterScreen")}>
          <Ionicons name="chevron-back-outline" size={24} color="white" />
        </TouchableOpacity>

        <Text style={styles.title}>Resultados do calculo da água</Text>

        <TouchableOpacity>
        </TouchableOpacity>
      </View>

      <View style={styles.secondContainer}>
        <View style={styles.containerProps}>
          <View style={styles.containerPropsItens}>
          
        

            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>Nome do calculo: </Text>
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
        <TouchableOpacity style={styles.createButton} onPress={() => {}}>
          <Text style={styles.textButton}>CRIAR CALCULO</Text>
        </TouchableOpacity>
      </View>
      {loading && <Loading />}
    </View>
  );
}
