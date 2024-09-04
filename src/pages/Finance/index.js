import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import styles from "../Livraria/styles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { getFinancasByUserId, deleteFinanca } from "../../services/api.js"; // Substitua pelas funções corretas
import { Feather } from "@expo/vector-icons";
import Loading from "../../components/LoadingElement/index.js";
import { useContextProvider } from "../../context/AuthContext.js";

export default function FinanceScreen() {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [financas, setFinancas] = useState([]);
  const [financaToDelete, setFinancaToDelete] = useState(null);
  const isFocused = useIsFocused();
  const [financaAdicionada, setFinancaAdicionada] = useState(false);
  const {loading, setLoading, userId, token} = useContextProvider();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  async function fetchFinancas() {
    setLoading(true);
    try {
      const financasData = await getFinancasByUserId(userId, token);
      console.log("Dados recebidos:", financasData);
      setFinancas(financasData);
    } catch (error) {
      console.error("Erro ao buscar finanças:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchFinancas();
  }, [financaAdicionada, isFocused]);

  const handleDeletePress = (financa) => {
    setFinancaToDelete(financa);
    toggleModal();
  };

  const confirmDelete = async () => {
    setLoading(true);
    try {
      console.log("Excluindo finança:", financaToDelete);
      await deleteFinanca(financaToDelete.id, token); // Atualize a função de exclusão
      setFinancas(financas.filter(f => f.id !== financaToDelete.id));
      toggleModal();
    } catch (error) {
      console.error("Erro ao excluir finança:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.firstContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Ionicons name="chevron-back-outline" size={24} color="white" />
          </TouchableOpacity>

          <Text style={styles.title}>Finanças</Text>

          <TouchableOpacity>
            {/* Botão adicional, se necessário */}
          </TouchableOpacity>
        </View>

        <View style={styles.secondContainer}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => {
              setFinancaAdicionada(false);
              navigation.navigate("CadastroFinanceScreen", {
                onGoBack: () => setFinancaAdicionada(true),
              });
            }}
          >
            <Text style={styles.addButtonText}>Adicionar Finança</Text>
            <Ionicons name="add-outline" size={24} color="white" />
          </TouchableOpacity>

          <FlatList
            data={financas}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.listItemContainer}
                onPress={() =>
                  navigation.navigate("DetalhesFinanceScreen", { item })
                }
              >
                <Text style={styles.listTextItem}>{item.nome_da_financa}</Text>

                <View style={styles.containerImages}>
                  <TouchableOpacity onPress={() => handleDeletePress(item)}>
                    <Feather name="trash-2" size={20} color="#FF0000" />
                  </TouchableOpacity>
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
            <Text style={styles.modalTitle}>Excluir finança</Text>

            <Text style={styles.modalText}>
              Você tem certeza que deseja excluir a finança "{financaToDelete?.nome}"?
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
                onPress={confirmDelete}
              >
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
