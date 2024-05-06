import {
  View,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';
import React from 'react';
import styles from '../Home/styles';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const Nome = "{Nome}";

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <TouchableOpacity>
          <Image
            source={require('../../../assets/Fill.png')}
            style={styles.containerItem}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.secondContainer}>
        <Text style={styles.title}>Bem-vindo {Nome}</Text>
        <Text style={styles.subtitle}>O que você gostaria de fazer hoje?</Text>
      </View>

      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => navigation.navigate("DietasScreen")}>
        <Image
          source={require('../../../assets/Cows.png')}
          style={styles.image}
        />
        <View style={styles.overlay}>
          <Text style={styles.imageTitle}>Dietas</Text>
          <Text style={styles.imageSubtitle}>Lorem ipsum dolor sit amet</Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => navigation.navigate("LivrariaScreen")}>
        <Image
          source={require('../../../assets/Library.png')}
          style={styles.image}
        />
        <View style={styles.overlay}>
          <Text style={styles.imageTitle}>Livraria</Text>
          <Text style={styles.imageSubtitle}>Lorem ipsum dolor sit amet</Text>
        </View>
      </TouchableOpacity>
    </View>

  )
}

