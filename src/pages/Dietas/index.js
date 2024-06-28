import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  FlatList,
  Alert,
} from "react-native";
import styles from "../Dietas/styles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { getDieta, deleteDieta } from "../../services/api.js";
import Loading from "../../components/LoadingElement/index.js";
import { useContextProvider } from "../../context/AuthContext.js";

export default function DietasScreen() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [isModalVisible, setModalVisible] = useState(false);
  const [dietas, setDietas] = useState([]);
  const [dietaToDelete, setDietaToDelete] = useState(null);
  const { loading, setLoading } = useContextProvider();

  const toggleModal = (dieta) => {
    setDietaToDelete(dieta);
    setModalVisible(!isModalVisible);
  };

  async function fetchDietas() {
    setLoading(true);
    try {
      const dietasData = await getDieta();
      console.log("Dietas recebidas:", dietasData);
      setDietas(dietasData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (isFocused) {
      fetchDietas();
    }
  }, [isFocused]);

  const handleDeletePress = (dieta) => {
    toggleModal(dieta);
  };

  const confirmDelete = async () => {
    if (dietaToDelete) {
      setLoading(true);
      try {
        console.log("Excluindo dieta:", dietaToDelete);
        await deleteDieta(dietaToDelete.id);
        setDietas(dietas.filter((dieta) => dieta.id !== dietaToDelete.id));
        toggleModal(null);
        Alert.alert("Sucesso", "Dieta excluída com sucesso!");
      } catch (error) {
        console.error("Erro ao excluir dieta:", error);
        Alert.alert("Erro", "Não foi possível excluir a dieta.");
      } finally {
        setLoading(false);
      }
    }
  };

  const renderDietaItem = ({ item }) => (
    <TouchableOpacity
      style={styles.listItemContainer}
      onPress={() => navigation.navigate("DetalhesDietaScreen", { item })}
    >
      <Text style={styles.listTextItem}>{item.nome_da_dieta}</Text>
      <View style={styles.containerImages}>
        <TouchableOpacity onPress={() => handleDeletePress(item)}>
          <Ionicons name="trash" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.firstContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Ionicons name="chevron-back-outline" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Dietas</Text>
      </View>

      <View style={styles.secondContainer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("CadastroDietaScreen")}
        >
          <Text style={styles.addButtonText}>CRIAR NOVA DIETA</Text>
          <Ionicons name="add-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <FlatList
          scrollEnabled={false}
          data={dietas}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderDietaItem}
          contentContainerStyle={styles.containerList}
        />
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => toggleModal(null)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Excluir Dieta</Text>
            <Text style={styles.modalText}>
              Você tem certeza que deseja excluir a dieta "{dietaToDelete?.nome_da_dieta}"?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.cancelButton} onPress={() => toggleModal(null)}>
                <Text style={styles.modalButton}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.excluirButton} onPress={confirmDelete}>
                <Text style={styles.modalButtonDelete}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {loading && <Loading />}
    </GestureHandlerRootView>
  );
}
