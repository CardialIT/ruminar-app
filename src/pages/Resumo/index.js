import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, Modal, Alert } from "react-native";
import styles from "../Resumo/styles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useIsFocused } from "@react-navigation/native"; 
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { getResumo, deleteResumo } from "../../services/api.js";
import Loading from "../../components/LoadingElement/index.js";
import { useContextProvider } from "../../context/AuthContext.js";

export default function ResumoScreen() {
  const navigation = useNavigation();
  const isFocused = useIsFocused(); 
  const [isModalVisible, setModalVisible] = useState(false);
  const [resumos, setResumos] = useState([]);
  const [resumoToDelete, setResumoToDelete] = useState(null);
  const { loading, setLoading } = useContextProvider();

  const toggleModal = (resumo) => {
    setResumoToDelete(resumo);
    setModalVisible(!isModalVisible);
  };

  async function fetchResumos() {
    setLoading(true);
    try {
      const resumosData = await getResumo();
      console.log("Dados recebidos:", resumosData);
      setResumos(resumosData);
    } catch (error) {
      console.error("Erro ao buscar resumos:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (isFocused) {
      fetchResumos();
    }
  }, [isFocused]); 

  const handleDeletePress = (resumo) => {
    toggleModal(resumo);
  };

  const confirmDelete = async () => {
    if (resumoToDelete) {
      setLoading(true);
      try {
        console.log("Excluindo resumo:", resumoToDelete);
        await deleteResumo(resumoToDelete.id);
        setResumos(resumos.filter(resumo => resumo.id !== resumoToDelete.id));
        toggleModal(null);
        Alert.alert("Sucesso", "Resumo excluído com sucesso!");
      } catch (error) {
        console.error("Erro ao excluir resumo:", error);
        Alert.alert("Erro", "Não foi possível excluir o resumo.");
      } finally {
        setLoading(false);
      }
    }
  };

  const renderResumoItem = ({ item }) => (
    <TouchableOpacity
      style={styles.listItemContainer}
      onPress={() => navigation.navigate("DetalhesResumo", { item })}
    >
      <Text style={styles.listTextItem}>{item.nome_resumo}</Text>
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
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Ionicons name="chevron-back-outline" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Resumo</Text>
      </View>

      <View style={styles.secondContainer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("CadastroResumoScreen")}
        >
          <Text style={styles.addButtonText}>CRIAR NOVO RESUMO</Text>
          <Ionicons name="add-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <FlatList
          scrollEnabled={false}
          data={resumos}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderResumoItem}
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
            <Text style={styles.modalTitle}>Excluir Resumo</Text>
            <Text style={styles.modalText}>
              Você tem certeza que deseja excluir o resumo "{resumoToDelete?.nome_resumo}"?
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
