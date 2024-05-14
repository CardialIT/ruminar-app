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

  const handleInputChange = (fieldName) => (value) => {
    setDieta({ ...dieta, [fieldName]: value });
    console.log(fieldName + ": " + value);
  };

  const postCadastroDieta = async () => {
    try {
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
              {fieldName.toUpperCase()}:
            </Text>
            <TextInput
              value={value}
              onChangeText={handleInputChange(fieldName)}
              placeholder={`Digite o ${fieldName}`}
              style={styles.containerInput}
            />
          </View>
        ))}

        <View style={styles.containerButton}>
          <TouchableOpacity
            onPress={postCadastroDieta}
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
