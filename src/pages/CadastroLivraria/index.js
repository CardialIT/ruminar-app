import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import styles from "../CadastroLivraria/styles";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { postLivraria } from "../../services/api.js";
import Toast from "react-native-toast-message";
import Loading from "../../components/LoadingElement/index.js";
import { useContextProvider } from "../../context/AuthContext.js";

export default function CadastroLivrariaScreen() {
  const [cadastroStatus, setCadastroStatus] = useState(null);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const {loading, setLoading } = useContextProvider();

  const [livro, setLivro] = useState({
    nome: "",
    ms: "",
    pb: "",
    pndr: "",
    pdr: "",
    proteina_soluvel: "",
    fdn_efetivo: "",
    ndt: "",
    fdn: "",
    cnf: "",
    amido: "",
    ee: "",
  });

  const handleInputChange = (fieldName) => (value) => {
    setLivro({ ...livro, [fieldName]: value });
    console.log(fieldName + ": " + value);
  };

  const postCadastroLivraria = async () => {
    setLoading(true);
    try {
      await postLivraria(livro);
      setCadastroStatus("success");
      console.log("Cadastro realizado com sucesso");
      Toast.show({
        type: "success",
        text1: "Cadastro realizado com sucesso",
      });
    } catch (error) {
      setCadastroStatus("failed");
      console.error("Erro ao cadastrar livro:", error);
      Toast.show({
        type: "error",
        text1: "Erro ao cadastrar livro",
      });
    } finally {
      setLoading(false); 
    }
  };
  

  const getKeyboardType = (fieldName) => {
    const numericFields = ["ms", "pb", "pndr", "pdr", "proteina_soluvel", "fdn_efetivo", "ndt", "fdn", "cnf", "amido", "ee"];
    return numericFields.includes(fieldName) ? "numeric" : "default";
  };

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("LivrariaScreen")}>
          <Ionicons name="chevron-back-outline" size={24} color="white" />
        </TouchableOpacity>

        <Text style={styles.title}>Cadastro Livraria</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("DetalhesLivrariaScreen")}
        >
          <Image
            source={require("../../../assets/Fill.png")}
            style={styles.containerItem}
          />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        {Object.entries(livro).map(([fieldName, value]) => (
          <View key={fieldName} style={styles.containerItem}>
            <Text style={styles.containerTitle}>
              {fieldName.toUpperCase()}:
            </Text>
            <TextInput
              value={value}
              onChangeText={handleInputChange(fieldName)}
              placeholder={`Digite o ${fieldName}`}
              style={styles.containerInput}
              keyboardType={getKeyboardType(fieldName)}
            />
          </View>
        ))}

        <View style={styles.containerButton}>
          <TouchableOpacity
            onPress={postCadastroLivraria}
            style={styles.createButton}
          >
            <Text style={styles.textButton}>CRIAR ITEM</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Toast ref={(ref) => Toast.setRef(ref)} />
      {loading && <Loading />}
    </View>
  );
}
