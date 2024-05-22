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
import Toast from "react-native-toast-message";

const fieldNamesMap = {
  nome_da_dieta: "Nome da Dieta",
  peso_medio: "Peso Médio (KG)",
  producao_estimada: "Produção Estimada",
  del: "Dias de Lactação (Del)",
  fill_preenchimento_ruminal: "Fill - Preenchimento Ruminal",
};

export default function CadastroDietaScreen() {
  const [cadastroStatus, setCadastroStatus] = useState(null);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const [dieta, setDieta] = useState({
    nome_da_dieta: "",
    peso_medio: "",
    producao_estimada: "",
    del: "",
    fill_preenchimento_ruminal: "",
  });

  const [ims, setIMS] = useState(null);
  const [fdn, setFDN] = useState(null);

  const handleInputChange = (fieldName) => (value) => {
    setDieta({ ...dieta, [fieldName]: value });
    console.log(fieldName + ": " + value);
  };

  const calcularIMS_FDN = () => {
    const { peso_medio, producao_estimada, del, fill_preenchimento_ruminal } =
      dieta;
    const peso = parseFloat(peso_medio.replace(",", "."));
    const producao = parseFloat(producao_estimada.replace(",", "."));
    const dell = parseInt(del);
    const fill = parseFloat(fill_preenchimento_ruminal.replace(",", "."));

    const ims = peso * 0.02 + producao / 3;
    const fdn = peso * fill;

    setIMS(ims.toFixed(2));
    setFDN(fdn.toFixed(2));
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

        <TouchableOpacity
          onPress={() => navigation.navigate("DetalhesLivrariaScreen")}
        >
          <Image
            source={require("../../../assets/Fill.png")}
            style={styles.containerItem}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.containerList}>
        {Object.entries(dieta).map(([fieldName, value]) => (
          <View key={fieldName} style={styles.containerItem}>
            <Text style={styles.containerTitle}>
              {fieldNamesMap[fieldName]}:
            </Text>
            <TextInput
              value={value}
              onChangeText={handleInputChange(fieldName)}
              placeholder={`Digite o ${fieldNamesMap[fieldName]}`}
              style={styles.containerInput}
            />
          </View>
        ))}

        <View style={styles.containerResult}>
          <View style={styles.containerItem}>
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
            onPress={() =>
              navigation.navigate("CadastroDieta2Screen")
            }
            style={styles.createButton}
          >
            <Text style={styles.textButton}>PRÓXIMO</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
}
