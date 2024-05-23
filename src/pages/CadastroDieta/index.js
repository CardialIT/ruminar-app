//desable-prettier
//desable-eslint
import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import styles from "../CadastroDieta/styles";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { postDieta } from "../../services/api.js";
//import Toast from "react-native-toast-message";
import { useContextProvider } from "../../context/AuthContext.js";


export default function CadastroDietaScreen() {
  const [nomeDaDieta, setNomeDaDieta] = useState("");
  const [pesoMedio, setPesoMedio] = useState("");
  const [producaoEstimada, setProducaoEstimada] = useState("");
  const [del, setDel] = useState( "" );
  const [fillPreenchimentoRuminal, setFillPreenchimentoRuminal] = useState( "");


  const { dieta, updateDieta, setFdn, setIms, ims, fdn } = useContextProvider();
  const [cadastroStatus, setCadastroStatus] = useState(null);
  const navigation = useNavigation();
 
  const onChangeNomeDaDieta = (nomeDaDieta) => {
    setNomeDaDieta(nomeDaDieta);
    console.log(nomeDaDieta);
  };
  const onChangePesoMedio = (pesoMedio) => {
    setPesoMedio(pesoMedio);
    console.log(pesoMedio);
  }
  const onChangeProducaoEstimada = (producaoEstimada) => {
    setProducaoEstimada(producaoEstimada);
    console.log(producaoEstimada);
  }
  const onChangeDel = (del) => {
    setDel(del);
    console.log(del);
  }
  const onChangeFillPreenchimentoRuminal = (fillPreenchimentoRuminal) => {
    setFillPreenchimentoRuminal(fillPreenchimentoRuminal);
    console.log(fillPreenchimentoRuminal);
  }


  const calcularIMS_FDN = () => {
    const peso = parseFloat(pesoMedio.replace(",", "."));
    const producao = parseFloat(producaoEstimada.replace(",", "."));
    const dell = parseInt(del.replace(",", "."));
    const fill = parseFloat(fillPreenchimentoRuminal.replace(",", "."));

    const ims = (peso * 0.02) + (producao / 3);
    const fdn = peso * fill;

    setFdn(fdn);
    setIms(ims);

     updateDieta("ims", ims.toFixed(2));
     updateDieta("fdn", fdn.toFixed(2));
  };
 
  const postCadastroDieta = async () => {
    try {
      calcularIMS_FDN();
      await postDieta(dieta);
      setCadastroStatus("success");
      console.log("Cadastro realizado com sucesso");
      Toast.show({
        type: "success",
        text1: "Cadastro realizado com sucesso",
      });
    } catch (error) {
      setCadastroStatus("failed");
      console.error("Erro ao cadastrar dieta:", error);
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Ionicons name="chevron-back-outline" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Nova Dieta</Text>
        <TouchableOpacity onPress={() => navigation.navigate("DetalhesLivrariaScreen")}>
          <Image source={require("../../../assets/Fill.png")} style={styles.containerItem} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.containerList}>
        
          <View style={styles.containerViewItem}>
            <Text style={styles.containerTitle}>
             Nome da Dieta:
            </Text>
            <TextInput
             
              onChangeText={onChangeNomeDaDieta}
              placeholder={`Digite o nome da dieta:`}
              style={styles.containerInput}
            />
            <Text style={styles.containerTitle}>
            Peso Médio (KG):
            </Text>
            <TextInput
              
              onChangeText={onChangePesoMedio}
              
              placeholder={`Digite o peso médio (KG):`}
              style={styles.containerInput}
            />
            <Text style={styles.containerTitle}>
            Produção Estimada:
            </Text>
            <TextInput
             
              onChangeText={onChangeProducaoEstimada}
              
              placeholder={`Digite a produção estimada:`}
              style={styles.containerInput}
            />
            <Text style={styles.containerTitle}>
            Dias de Lactação (Del):
            </Text>
            <TextInput                       
              onChangeText={onChangeDel}
              placeholder={`Digite os dias de lactação (Del):`}
              style={styles.containerInput}
            />
            <Text style={styles.containerTitle}>
            Fill - Preenchimento Ruminal:
            </Text>
            <TextInput                          
              onChangeText={onChangeFillPreenchimentoRuminal}
              placeholder={`Digite o fill - preenchimento ruminal:`}
              style={styles.containerInput}
            />
          </View>
    

        <View style={styles.containerResult}>
          <View style={styles.containerResultItems}>
            <Text style={styles.containerTitle}>IMS: {ims} kg</Text>
            <Text style={styles.containerTitle}>FDN: {fdn} kg</Text>
          </View>
        </View>

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
            onPress={() => {
              calcularIMS_FDN();
              navigation.navigate("CadastroDieta2Screen");
            }}
            style={styles.createButton}
          >
            <Text style={styles.textButton}>PRÓXIMO</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
      {/* <Toast ref={(ref) => Toast.setRef(ref)} /> */}
    </View>
  );
}
