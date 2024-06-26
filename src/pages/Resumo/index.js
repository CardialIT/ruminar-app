import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, Modal } from "react-native";
import styles from "../Dietas/styles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { getResumo } from "../../services/api.js";
import Loading from "../../components/LoadingElement/index.js";
import { useContextProvider } from "../../context/AuthContext.js";

export default function ResumoScreen() {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [resumos, setResumos] = useState([]);
  const { loading, setLoading } = useContextProvider();

  const toggleModal = () => {
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
    fetchResumos();
  }, []);

  const renderResumoItem = ({ item }) => (
    <TouchableOpacity
      style={styles.listItemContainer}
      onPress={() => navigation.navigate("DetalhesResumoScreen", { item })}
    >
      <Text style={styles.listTextItem}>{item.nome_resumo}</Text>
      <View style={styles.containerImages}>
        <TouchableOpacity onPress={toggleModal}>
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

      <FlatList
        data={resumos}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderResumoItem}
        contentContainerStyle={styles.containerList}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Excluir Resumo</Text>
            <Text style={styles.modalText}>Você tem certeza que deseja excluir este resumo?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.cancelButton} onPress={toggleModal}>
                <Text style={styles.modalButton}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.excluirButton} onPress={() => { /* Adicionar lógica de exclusão aqui */ }}>
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
