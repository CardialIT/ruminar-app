import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from '../CadastroLivraria/styles';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function CadastroLivrariaScreen() {
  const navigation = useNavigation();
  const [itemName, setItemName] = React.useState('');

  return (
    <View style={styles.container}>

      <View style={styles.firstContainer}>

        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Ionicons name="chevron-back-outline" size={24} color="white" />
        </TouchableOpacity>

        <Text style={styles.title}>
          Cadastro Livraria
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate("DetalhesLivrariaScreen")}>
          <Image
            source={require('../../../assets/Fill.png')}
            style={styles.containerItem}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.containerItem}>

        <Text style={styles.containerTitle}>Nome:</Text>

        <TextInput
          value={itemName}
          onChangeText={text => setItemName(text)}
          placeholder="Título da livraria"
          style={styles.containerInput}
        />
      </View>

      <View style={styles.containerItem}>

        <Text style={styles.containerTitle}>MS:</Text>

        <TextInput
          value={itemName}
          onChangeText={text => setItemName(text)}
          placeholder="Digite o nome do item"
          style={styles.containerInput}
        />
      </View>

      <View style={styles.containerItem}>

        <Text style={styles.containerTitle}>MS:</Text>

        <TextInput
          value={itemName}
          onChangeText={text => setItemName(text)}
          placeholder="Digite o nome do item"
          style={styles.containerInput}
        />
      </View>

      <View style={styles.containerItem}>

        <Text style={styles.containerTitle}>PB:</Text>

        <TextInput
          value={itemName}
          onChangeText={text => setItemName(text)}
          placeholder="Digite o nome do item"
          style={styles.containerInput}
        />
      </View>

      <View style={styles.containerItem}>

        <Text style={styles.containerTitle}>PDR:</Text>

        <TextInput
          value={itemName}
          onChangeText={text => setItemName(text)}
          placeholder="Digite o nome do item"
          style={styles.containerInput}
        />
      </View>


      <View style={styles.containerButton}>
        <TouchableOpacity
          onPress={() => navigation.navigate("DetalhesLivrariaScreen")}
          style={styles.createButton}>
          <Text style={styles.textButton}>CRIAR ITEM</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  );
}
