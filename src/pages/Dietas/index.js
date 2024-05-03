import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../Dietas/styles';
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function DietasScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Ionicons name="chevron-back-outline" size={24} color="white" style={{ alignItems: 'center', justifyContent: 'center' }} />
        </TouchableOpacity>
        <Text style={styles.title}>
          Dietas
        </Text>
        <TouchableOpacity>
          <Image
            source={require('../../../assets/Fill.png')}
            style={styles.containerItem}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
