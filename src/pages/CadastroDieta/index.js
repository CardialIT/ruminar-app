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
  Modal,
  StatusBar
} from "react-native";
import styles from "../CadastroDieta/styles";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { postDieta } from "../../services/api.js";
//import Toast from "react-native-toast-message";
import { useContextProvider } from "../../context/AuthContext.js";
import Loading from "../../components/LoadingElement/index.js";


export default function CadastroDietaScreen() {
  const [nomeDaDieta, setNomeDaDieta] = useState("");
  const [pesoMedio, setPesoMedio] = useState("");
  const [producaoEstimada, setProducaoEstimada] = useState("");
  const [del, setDel] = useState("");
  const [fillPreenchimentoRuminal, setFillPreenchimentoRuminal] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  // const { calcularIMS_FDN } = useContextProvider();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  const { dieta, updateDieta, setFdn, setIms, ims, fdn, loading, setLoading } = useContextProvider();
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
    const fill_porcento = fill / 100;
    
    const ims = (peso * 0.02) + (producao / 3);
    const fdn = peso * fill_porcento;

    setFdn(fdn);
    setIms(ims);

    updateDieta("producao_estimada", producao.toFixed(2));
    updateDieta("ims", ims.toFixed(2));
    updateDieta("fdn", fdn.toFixed(2)) / 100;
    
  };

  const calcularMineral = () => {
    const producaoMineral = parseFloat(producaoEstimada.replace(",", "."))
    const mineral = producaoMineral * 0.14;

    setMineral(mineral.toFixed(2));
    console.log("mineral" + mineral);
    console.log("producaoEstimada" + producao);
  }

  const postCadastroDieta = async () => {
    setLoading(true);
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
    } finally {
      setLoading(false);
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
            keyboardType="default"
          />

          <Text style={styles.containerTitle}>
            Peso Médio (KG):
          </Text>
          <TextInput
            onChangeText={onChangePesoMedio}
            placeholder={`Digite o peso médio (KG):`}
            style={styles.containerInput}
            keyboardType="numeric"
          />

          <Text style={styles.containerTitle}>
            Produção Estimada L/dia:
          </Text>
          <TextInput
            onChangeText={onChangeProducaoEstimada}
            placeholder={`Digite a produção estimada:`}
            style={styles.containerInput}
            keyboardType="numeric"
          />

          <Text style={styles.containerTitle}>
            Dias de Lactação (Del):
          </Text>
          <TextInput
            onChangeText={onChangeDel}
            placeholder={`Digite os dias de lactação (Del):`}
            style={styles.containerInput}
            keyboardType="numeric"
          />
          

          {/* NOTIFICATION */}
          <TouchableOpacity
            style={styles.containerItemNotification}
            onPress={toggleModal}>

            <View style={styles.containerImageNotification}>
              <Image source={require("../../assets/Notification.png")} style={styles.notificationIcon} />
            </View>

            <View style={styles.containerTextNotification}>
              <Text style={styles.notificationText}>Caso você tenha dúvidas sobre o preenchimento do Fill <Text style={styles.underlinedText}>clique aqui</Text>
              </Text>
            </View>

          </TouchableOpacity>


          <Text style={styles.containerTitle}>
            Fill - Preenchimento Ruminal:
          </Text>
          <TextInput
            onChangeText={onChangeFillPreenchimentoRuminal}
            placeholder={`Digite o fill - preenchimento ruminal:`}
            style={styles.containerInput}
            keyboardType="numeric"
          />
          

        </View>


        <View style={styles.containerResult}>
          <View style={styles.containerResultItems}>
            <Text style={styles.containerTitle}>IMS: {ims.toFixed(2)} kg</Text>
            <Text style={styles.containerTitle}>FDN: {fdn.toFixed(2)} kg</Text>
          </View>
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
      
      {loading && <Loading />}
      {/* MODAL */}
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>

            <Text style={styles.modalTitle}>Regras parar checar o Fill</Text>

            <View style={styles.modalItemContainer}>
              <Text>{'\u2022'}</Text>
              <Text style={styles.modalText}>Se o Del é de 0 a 60 dias Então o Fill que usuário deve preencher é de 0,8 a 1,05</Text>
            </View>

            <View style={styles.modalItemContainer}>
              <Text>{'\u2022'}</Text>
              <Text style={styles.modalText}>Se o Del é de 60 a 150 dias Então o Fill que usuário deve preencher é de 1,05 a 1,15</Text>
            </View>

            <View style={styles.modalItemContainer}>
              <Text>{'\u2022'}</Text>
              <Text style={styles.modalText}>Se o Del é de acima de 150 dias Então o Fill que usuário deve preencher é de 1,15 a 1,2</Text>
            </View>

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={toggleModal}
              >
                <Text style={styles.modalButton}>Fechar</Text>
              </TouchableOpacity>


            </View>
          </View>
        </View>
      </Modal>
      {loading && <Loading />}
    </View>
  );
}
