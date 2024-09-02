import { View, TouchableOpacity, Image, Text, ScrollView, Modal } from "react-native";
import React, {useState} from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useContextProvider } from "../../context/AuthContext"
import { Feather } from '@expo/vector-icons';

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(true);
  const navigation = useNavigation();

  const { userName, setIsAuth, setToken } = useContextProvider();

  function logout() {
    setIsAuth(false);
    setToken("");
  }

  function handleAccept() {
    setModalVisible(false);
  }

  function handleDecline() {
    setIsAuth(false);
    setToken("");
  }

  return (
    <View style={styles.container}>

<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          logout();
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              O RESULTADO PRODUTIVO É BASEADO NO MANEJO NUTRICIONAL COMO UM TODO. AO CLICAR EM ACEITAR, O PRODUTOR/TÉCNICO SE RESPONSABILIZA PELA EXECUÇÃO DOS DADOS NUTRICIONAIS FORMULADOS NESTE APLICATIVO.
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.buttonModal} onPress={handleAccept}>
                <Text style={styles.buttonModalText}>Aceitar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonModal} onPress={handleDecline}>
                <Text style={styles.buttonModalText}>Recusar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.firstContainer}>
        <TouchableOpacity onPress={logout}>
          <Feather name="log-out" size={25} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.secondContainer}>
        <Text style={styles.title}>Bem-vindo {userName}</Text>
        <Text style={styles.subtitle}>O que você gostaria de fazer hoje?</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => navigation.navigate("Livraria")}
        >
          <Image
            source={require("../../../assets/Library.png")}
            style={styles.images}
          />
          <View style={styles.overlay}>
            <Text style={styles.imageTitle}>Livraria</Text>
            <Text style={styles.imageSubtitle}>Adicione alimentos importantes</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => navigation.navigate("Resumo")}
        >
          <Image
            source={require("../../../assets/Cows.png")}
            style={styles.images}
          />
          <View style={styles.overlay}>
            <Text style={styles.imageTitle}>Dietas base</Text>
            <Text style={styles.imageSubtitle}>Tenha uma ideia inicial de como será sua dieta</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => navigation.navigate("Dietas")}
        >
          <Image
            source={require("../../../assets/Library.png")}
            style={styles.images}
          />
          <View style={styles.overlay}>
            <Text style={styles.imageTitle}>Dietas da propriedade</Text>
            <Text style={styles.imageSubtitle}>Crie a dieta ideal</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => navigation.navigate("Finance")}
        >
          <Image
            source={require("../../../assets/Library.png")}
            style={styles.images}
          />
          <View style={styles.overlay}>
            <Text style={styles.imageTitle}>Finanças</Text>
            <Text style={styles.imageSubtitle}>Saiba quanto vai custar sua dieta</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => navigation.navigate("Water")}
        >
          <Image
            source={require("../../../assets/Library.png")}
            style={styles.images}
          />
          <View style={styles.overlay}>
            <Text style={styles.imageTitle}>Hidratação da dieta</Text>
            <Text style={styles.imageSubtitle}>Saiba o percentual de hidratação da sua dieta</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
