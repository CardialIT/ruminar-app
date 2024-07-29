import { View, Text } from 'react-native'
import React from 'react'
import styles from "./styles";
import { useContextProvider } from "../../context/AuthContext";

export default function ProfileScreen() {
  const {
    userName,
    userEmail,
    userCreatedAt,
  } = useContextProvider();

  return (
    
    <View style={styles.container}>
    
    <View style={styles.inside}>
    <Text style={styles.column}>
      Nome
    </Text>
    <Text style={styles.value}>
     {userName}
    </Text>
    </View>

    <View style={styles.inside}>
    <Text style={styles.column}>
      Email
    </Text>
    <Text style={styles.value}>
    {userEmail}
    </Text>
    </View>

    <View style={styles.inside}>
    <Text style={styles.column}>
      Criado em
    </Text>
    <Text style={styles.value}>
     {userCreatedAt}
    </Text>
    </View>

   
  
  </View>
  )
}

