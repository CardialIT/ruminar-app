import React, { useState } from "react";
import {
    View,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
} from "react-native";
import styles from "../CadastroDieta2/styles";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { postDieta } from "../../services/api.js";

export default function CadastroDieta2Screen() {
    return (
        <View style={styles.container}>

            <View style={styles.firstContainer}>

                <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
                    <Ionicons name="chevron-back-outline" size={24} color="white" />
                </TouchableOpacity>

                <Text style={styles.title}>Nova Dieta</Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate("DetalhesLivrariaScreen")}
                >
                    <Image
                        source={require("../../../assets/Fill.png")}
                        style={styles.containerItem}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.secondContainer}>
                <Text style={styles.listagemTitle}>Prencha os dados de FDN</Text>

                <View style={styles.infoContainer}>

                </View>

            </View>


        </View>
    )
}