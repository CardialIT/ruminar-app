import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Modal,
} from "react-native";
import styles from "../Livraria/styles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { getLivraria } from "../../services/api.js";

export default function LivrariaScreen() {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [livrarias, setLivrarias] = useState([]);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  async function fetchLivrarias() {
    try {
      const livrariasData = await getLivraria();
      console.log("Dados recebidos:", livrariasData);
      setLivrarias(livrariasData);
    } catch (error) {
      console.error("Erro ao buscar livrarias:", error);
    }
  }

  useEffect(() => {
    fetchLivrarias();
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.firstContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("LivrariaScreen")}>
            <Ionicons name="chevron-back-outline" size={24} color="white" />
          </TouchableOpacity>

          <Text style={styles.title}>Livraria</Text>

          <TouchableOpacity>
            <Image
              source={require("../../../assets/Fill.png")}
              style={styles.containerItem}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.secondContainer}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.navigate("CadastroLivrariaScreen")}
          >
            <Text style={styles.addButtonText}>Adicionar Livraria</Text>
            <Ionicons name="add-outline" size={24} color="white" />
          </TouchableOpacity>

          <FlatList
            data={livrarias}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.listItemContainer}
                onPress={() =>
                  navigation.navigate("DetalhesLivrariaScreen", { item })
                }
              >
                <Text style={styles.listTextItem}>{item.nome}</Text>
                <View style={styles.containerImages}>
                  <Image
                    source={require("../../assets/Edit.png")}
                    style={styles.containerInputItem}
                  />
                  <Image
                    source={require("../../assets/Trash.png")}
                    style={styles.containerInputItem}
                  />
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Excluir livraria</Text>

            <Text style={styles.modalText}>
              Você tem certeza que deseja excluir a livria "Pastagem"?
            </Text>

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={toggleModal}
              >
                <Text style={styles.modalButton}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.excluirButton}
                onPress={toggleModal}
              >
                <Text style={styles.modalButtonDelete}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </GestureHandlerRootView>
  );
}
