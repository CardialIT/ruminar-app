import React, { useState } from "react";
import {
    View,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
} from "react-native";
import styles from "../CadastroDieta3/styles";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { postDieta } from "../../services/api.js";
import { useContextProvider } from "../../context/AuthContext.js";


export default function CadastroDieta3Screen() {
    const navigation = useNavigation();
    const { dieta } = useContextProvider();
    const [selectedLivrarias, setSelectedLivrarias] = useState([]);


    const handleSelectLivraria = (item) => {
        if (selectedLivrarias.length < 3) {
            setSelectedLivrarias([...selectedLivrarias, item]);
        } else {
            Toast.show({
                type: "error",
                text1: "Limite de 3 livrarias atingido",
            });
        }
    };


    return (
        <View style={styles.container}>

            <View style={styles.firstContainer}>

                <TouchableOpacity onPress={() => navigation.navigate("CadastroDieta2Screen")}>
                    <Ionicons name="chevron-back-outline" size={24} color="white" />
                </TouchableOpacity>

                <Text style={styles.title}>Nova Dieta</Text>

                <TouchableOpacity onPress={() => navigation.navigate("DetalhesLivrariaScreen")}>
                    <Image source={require("../../../assets/Fill.png")} style={styles.containerItem} />
                </TouchableOpacity>

            </View>

            <View style={styles.secondContainer}>
                <Text style={styles.listagemTitle}>Prencha as informações relacionadas ao amido</Text>

                <ScrollView style={styles.containerList}>

                    {dieta.selectedLivraria && (
                        <View style={styles.containerItemTitle}>
                            {/* <Text style={styles.containerTitle}>Livraria Selecionada:</Text> */}
                            <Text style={styles.listagemItemTitle}>Amido estimado</Text>
                            <TextInput
                                style={styles.inputField}
                                placeholder="KG / MS"
                                onChangeText={handleSelectLivraria}
                            />
                        </View>
                    )}

                    <View style={styles.containerButton}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("CadastroDieta3Screen")
                            }
                            style={styles.createButton}
                        >
                            <Text style={styles.textButton}>VER RESUMO</Text>
                        </TouchableOpacity>

                    </View>

                </ScrollView>
            </View>
        </View>
    )
}