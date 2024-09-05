import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import styles from "../Livraria/styles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { getCalculoWaterByUserId, deleteCalculoWater } from "../../services/api.js";
import { Feather } from "@expo/vector-icons";
import Loading from "../../components/LoadingElement/index.js";
import { useContextProvider } from "../../context/AuthContext.js";

export default function WaterScreen() {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [calculosWater, setCalculosWater] = useState([]);
  const [calculoWaterToDelete, setCalculoWaterToDelete] = useState(null);
  const isFocused = useIsFocused();
  const [calculoWaterAdicionado, setCalculoWaterAdicionado] = useState(false);
  const { loading, setLoading, userId, token } = useContextProvider();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  async function fetchCalculosWater() {
    setLoading(true);
    try {
      const calculosWaterData = await getCalculoWaterByUserId(userId, token);
      console.log("Dados recebidos:", calculosWaterData);
      setCalculosWater(calculosWaterData);
    } catch (error) {
      console.error("Erro ao buscar cálculos de água:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCalculosWater();
  }, [calculoWaterAdicionado, isFocused]);

  const handleDeletePress = (calculoWater) => {
    setCalculoWaterToDelete(calculoWater);
    toggleModal();
  };

  const confirmDelete = async () => {
    setLoading(true);
    try {
      console.log("Excluindo cálculo de água:", calculoWaterToDelete);
      await deleteCalculoWater(calculoWaterToDelete.id, token);
      setCalculosWater(calculosWater.filter(c => c.id !== calculoWaterToDelete.id));
      toggleModal();
    } catch (error) {
      console.error("Erro ao excluir cálculo de água:", error);
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

          <Text style={styles.title}>Hidratação da dieta</Text>

          <TouchableOpacity></TouchableOpacity>
        </View>

        <View style={styles.secondContainer}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => {
              setCalculoWaterAdicionado(false);
              navigation.navigate("CadastroWaterScreen", {
                onGoBack: () => setCalculoWaterAdicionado(true),
              });
            }}
          >
            <Text style={styles.addButtonText}>Adicionar cálculo</Text>
            <Ionicons name="add-outline" size={24} color="white" />
          </TouchableOpacity>

          <FlatList
            data={calculosWater}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.listItemContainer}
                onPress={() =>
                  navigation.navigate("DetalhesWaterScreen", { item })
                }
              >
                <Text style={styles.listTextItem}>{item.nome_calculo}</Text>

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
            <Text style={styles.modalTitle}>Excluir cálculo de água</Text>

            <Text style={styles.modalText}>
              Você tem certeza que deseja excluir o cálculo de água "{calculoWaterToDelete?.nome_calculo}"?
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
