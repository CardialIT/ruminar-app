import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
} from "react-native";
import styles from "../Dietas/styles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function DietasScreen() {
  const navigation = useNavigation();

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.firstContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Ionicons
            name="chevron-back-outline"
            size={24}
            color="white"
            style={{ alignItems: "center", justifyContent: "center" }}
          />
        </TouchableOpacity>

        <Text style={styles.title}>Dietas</Text>

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
          onPress={() => navigation.navigate("CadastroDietaScreen")}
        >
          <Text style={styles.addButtonText}>CRIAR NOVA DIETA</Text>
          <Ionicons name="add-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.containerList}>
        <View style={styles.listContainer}>
          {/* {items.map(item => (
                <ListItem
                  key={item.id}
                  item={item}
                  onEditPress={handleEditItem}
                  onDeletePress={handleDeleteItem}
                />
              ))} */}

          <TouchableOpacity
            style={styles.listItemContainer}
            onPress={() => navigation.navigate("")}
          >
            <Text style={styles.listTextItem}>Dieta Verão</Text>

            <View style={styles.containerImages}>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={toggleModal}
              >
                <Image
                  source={require("../../assets/Trash.png")}
                  style={styles.containerItem}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.listContainer}>
          {/* {items.map(item => (
                <ListItem
                  key={item.id}
                  item={item}
                  onEditPress={handleEditItem}
                  onDeletePress={handleDeleteItem}
                />
              ))} */}

          <TouchableOpacity
            style={styles.listItemContainer}
            onPress={() => navigation.navigate("DetalhesLivrariaScreen")}
          >
            <Text style={styles.listTextItem}>Dieta Inverno</Text>

            <View style={styles.containerImages}>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={toggleModal}
              >
                <Image
                  source={require("../../assets/Trash.png")}
                  style={styles.containerItem}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.listContainer}>
          {/* {items.map(item => (
                <ListItem
                  key={item.id}
                  item={item}
                  onEditPress={handleEditItem}
                  onDeletePress={handleDeleteItem}
                />
              ))} */}

          <TouchableOpacity
            style={styles.listItemContainer}
            onPress={() => navigation.navigate("DetalhesLivrariaScreen")}
          >
            <Text style={styles.listTextItem}>Dieta Outono</Text>

            <View style={styles.containerImages}>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={toggleModal}
              >
                <Image
                  source={require("../../assets/Trash.png")}
                  style={styles.containerItem}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.listContainer}>
          {/* {items.map(item => (
                <ListItem
                  key={item.id}
                  item={item}
                  onEditPress={handleEditItem}
                  onDeletePress={handleDeleteItem}
                />
              ))} */}
          <TouchableOpacity
            style={styles.listItemContainer}
            onPress={() => navigation.navigate("DetalhesLivrariaScreen")}
          >
            <Text style={styles.listTextItem}>Dieta Primavera</Text>

            <View style={styles.containerImages}>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={toggleModal}
              >
                <Image
                  source={require("../../assets/Trash.png")}
                  style={styles.containerItem}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <View style={styles.secondContainer}>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => navigation.navigate("DietasCalculo")}
            >
              <Text style={styles.addButtonText}>CALCULAR DIETA</Text>
              <Ionicons name="add-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}
