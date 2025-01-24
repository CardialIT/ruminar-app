import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
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
    setLoading,
    msTotalDieta,
    userId,
    token,
    kgMstotalDieta
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

  const getTextColor = (value, ranges) => {
    if (value <= ranges.low) return "#EEAC3F"; 
    if (value > ranges.low && value <= ranges.high) return "green"; 
    return "red"; 
  };
  
  const ranges = {
    ms: { low: 44, high: 55 },
    pb: { low: 14.4, high: 17 },
    pndr: { low: 4.4, high: 5.5 },
    pdr: { low: 9.9, high: 11.5 },
    fdnEfetivo: { low: 18.9, high: 24 },
    ndt: { low: 68.9, high: 74 },
    fdn: { low: 27.9, high: 40 },
    cnf: { low: 29.9, high: 41 },
    amido: { low: 19.9, high: 28 },
    ee: { low: 1.99, high: 5 },
  };
  
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
      <View key={livraria.id} style={styles.itensPercentage}>
        <Text style={styles.itens}>{livraria.nome}: </Text>
        <Text style={styles.percetange}>{livraria.kgMs} em MS</Text>

      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("CadastroDieta4Screen")}>
          <Ionicons name="chevron-back-outline" size={24} color="white" />
        </TouchableOpacity>

        <Text style={styles.title}>Parâmetros da dieta</Text>

        <TouchableOpacity>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.containerList}>
      <View style={styles.secondContainer}>
    
        <View style={styles.containerProps}>
          <View style={styles.containerPropsItens}>
         
          <View style={styles.itensPercentageC}>
              <Text style={styles.itenTotal}>Total em Kilos de matéria seca: </Text>
              <Text style={styles.percetangeTotal}>{kgMstotalDieta.toFixed(2)}</Text>
            </View>
            

          {renderSelectedLivrarias()}

          <View style={styles.itensPercentageC}>
              <Text style={styles.itens}>MS: </Text>
              <Text style={[styles.percetangeCX, { color: getTextColor(msTotalDieta , ranges.ms), fontWeight: "bold" }]}>
  {msTotalDieta} %
</Text>
            </View>
            
            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>PB: </Text>
              <Text style={[styles.percetange, { color: getTextColor(pbTotal, ranges.pb), fontWeight: "bold"  }]}>
  {pbTotal} %
</Text>
            </View>

            <View style={styles.itensPercentageC}>
            <Text style={styles.itens}>PNDR: </Text>
            <Text style={[styles.percetange, { color: getTextColor(pndrTotal, ranges.pndr), fontWeight: "bold"  }]}>
  {pndrTotal.toFixed(2)} %
</Text>
            </View>


            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>PDR: </Text>
              <Text style={[styles.percetange, { color: getTextColor(pdrTotal, ranges.pdr), fontWeight: "bold"  }]}>
  {pdrTotal} %
</Text>
            </View>

            <View style={styles.itensPercentageC}>
              <Text style={styles.itens}>FDN Efetivo:</Text>
              <Text style={[styles.percetange, { color: getTextColor(fdnEfetivoTotal, ranges.fdnEfetivo), fontWeight: "bold"  }]}>
  {fdnEfetivoTotal} %
</Text>
            </View>

            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>NDT: </Text>
              <Text style={[styles.percetange, { color: getTextColor(ndtTotal, ranges.ndt), fontWeight: "bold"  }]}>
  {ndtTotal} %
</Text>
            </View>

            <View style={styles.itensPercentageC}>
              <Text style={styles.itens}>FDN: </Text>
              <Text style={[styles.percetange, { color: getTextColor(itemFDNTotal, ranges.fdn), fontWeight: "bold"  }]}>
  {itemFDNTotal} %
</Text>
            </View>

            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>CNF: </Text>
              <Text style={[styles.percetange, { color: getTextColor(cnfTotal, ranges.cnf), fontWeight: "bold"  }]}>
  {cnfTotal} %
</Text>
            </View>

            <View style={styles.itensPercentageC}>
              <Text style={styles.itens}>AMIDO: </Text>
              <Text style={[styles.percetange, { color: getTextColor(amidoTotal, ranges.amido), fontWeight: "bold"  }]}>
  {amidoTotal} %
</Text>
            </View>

            <View style={styles.itensPercentage}>
              <Text style={styles.itens}>EE: </Text>
              <Text style={[styles.percetange, { color: getTextColor(eeTotal, ranges.ee), fontWeight: "bold"  }]}>
  {eeTotal} %
</Text>
            </View>

          </View>
        </View>
       
      </View>
      </ScrollView>
   
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.createButton} onPress={handleCriarDieta}>
          <Text style={styles.textButton}>CRIAR DIETA</Text>
        </TouchableOpacity>
      </View>
      {loading && <Loading />}
    </View>
  );
}
