import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Image, 
  ScrollView, 
  Modal 
} from 'react-native';
import styles from '../Livraria/styles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// const ListItem = ({ item, onEditPress, onDeletePress }) => (
//   <View style={styles.listItemContainer}>
//     <Text style={styles.listItemText}>{item.name}</Text>
//     <TouchableOpacity onPress={() => onEditPress(item)}>
//       <Image
//         source={require('../../assets/Edit.png')}
//         style={styles.buttonImage}
//       />
//     </TouchableOpacity>
//     <TouchableOpacity onPress={() => onDeletePress(item.id)}>
//       <Image
//         source={require('../../assets/Trash.png')}
//         style={styles.buttonImage}
//       />
//     </TouchableOpacity>
//   </View>
// );

export default function LivrariaScreen() {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  // const [items, setItems] = useState([]);

  // const handleEditItem = (item) => {
  //   navigation.navigate("CadastroLivrariaScreen");
  // };

  // const handleDeleteItem = (itemId) => {
  //   setItems(prevItems => prevItems.filter(item => item.id !== itemId));
  // };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>

        <View style={styles.firstContainer}>
         
          <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
            <Ionicons name="chevron-back-outline" size={24} color="white" />
          </TouchableOpacity>

          <Text style={styles.title}>
            Livraria
          </Text>
          
          <TouchableOpacity>
            <Image
              source={require('../../../assets/Fill.png')}
              style={styles.containerItem}
            />
          </TouchableOpacity>

        </View>

        <View style={styles.secondContainer}>

          <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.navigate("CadastroLivrariaScreen")}>
            <Text
              style={styles.addButtonText}
            >Adicionar Livraria
            </Text>
            <Ionicons name="add-outline" size={24} color="white" />
          </TouchableOpacity>

          <ScrollView>
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
                onPress={() => navigation.navigate("DetalhesLivrariaScreen")}>
                <Text style={styles.listTextItem}>Pastagem</Text>
                <View style={styles.containerImages}>

                  <Image
                    source={require('../../assets/Edit.png')}
                    style={styles.containerItem}
                  />
                  <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={toggleModal}>
                    <Image
                      source={require('../../assets/Trash.png')}
                      style={styles.containerItem}
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.listItemContainer}>

              <Text style={styles.listTextItem}>Sal</Text>

              <View style={styles.containerImages}>
                <Image
                  source={require('../../assets/Edit.png')}
                  style={styles.containerItem}
                />
                <Image
                  source={require('../../assets/Trash.png')}
                  style={styles.containerItem}
                />
              </View>

            </View>

            <View style={styles.listItemContainer}>

              <Text style={styles.listTextItem}>Silagem</Text>

              <View style={styles.containerImages}>
                <Image
                  source={require('../../assets/Edit.png')}
                  style={styles.containerItem}
                />
                <Image
                  source={require('../../assets/Trash.png')}
                  style={styles.containerItem}
                />

              </View>

            </View>

            <View style={styles.listItemContainer}>

              <Text style={styles.listTextItem}>Casca de Laranja</Text>
              
              <View style={styles.containerImages}>
                <Image
                  source={require('../../assets/Edit.png')}
                  style={styles.containerItem}
                />
                <Image
                  source={require('../../assets/Trash.png')}
                  style={styles.containerItem}
                />
              </View>
            </View>

            <View style={styles.listItemContainer}>

              <Text style={styles.listTextItem}>Fração Proteica</Text>

              <View style={styles.containerImages}>
                <Image
                  source={require('../../assets/Edit.png')}
                  style={styles.containerItem}
                />
                <Image
                  source={require('../../assets/Trash.png')}
                  style={styles.containerItem}
                />
              </View>
            </View>

            <View style={styles.listItemContainer}>

              <Text style={styles.listTextItem}>Mineral</Text>

              <View style={styles.containerImages}>
                <Image
                  source={require('../../assets/Edit.png')}
                  style={styles.containerItem}
                />
                <Image
                  source={require('../../assets/Trash.png')}
                  style={styles.containerItem}
                />
              </View>
            </View>

            <View style={styles.listItemContainer}>

              <Text style={styles.listTextItem}>Milho</Text>

              <View style={styles.containerImages}>
                <Image
                  source={require('../../assets/Edit.png')}
                  style={styles.containerItem}
                />
                <Image
                  source={require('../../assets/Trash.png')}
                  style={styles.containerItem}
                />
              </View>
            </View>

          </ScrollView>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}>

        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>

            <Text style={styles.modalTitle}>Excluir livraria</Text>

            <Text style={styles.modalText}>Você tem certeza que deseja excluir a livria "Pastagem"?</Text>

            <View style={styles.modalButtons}>

              <TouchableOpacity 
              style={styles.cancelButton}
              onPress={toggleModal}>
                <Text style={styles.modalButton}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity 
              style={styles.excluirButton}
              onPress={toggleModal}>
                <Text style={styles.modalButtonDelete}>Excluir</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </Modal>
    </GestureHandlerRootView>
  )
}
