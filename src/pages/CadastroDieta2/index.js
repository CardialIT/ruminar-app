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
    const navigation = useNavigation();

    const [ims, setIMS] = useState(null);
    const [fdn, setFDN] = useState(null);

    const [input, setInput] = useState({
        Silagem: "",
        Pastagem: "",
        Feno: "",
    });
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
                <ScrollView style={styles.containerList}>

                    <View style={styles.containerResult}>
                        <View style={styles.containerItem}>
                            <Text style={styles.containerTitle}>IMS: {ims} kg</Text>
                            <View style={styles.separator}></View>
                            <Text style={styles.containerTitle}>FDN: {fdn} kg</Text>
                        </View>
                    </View>


                    {/* INICIA EM BRANCO */}
                    <Text style={styles.inputFieldText}>FENO BOM</Text>
                  
                    <View style={styles.inputField}>
                        <TextInput
                            style={styles.input}
                            placeholder="KG / MS"
                            value={input.email}
                            onChangeText={(text) => setInput({ ...input, Silagem: text })}
                        />
                    </View>
                    {/* INICIA EM BRANCO */}
                    
                    <View style={styles.containerAddItem}>
                        <TouchableOpacity
                            style={styles.addButton}
                            onPress={() => navigation.navigate("ListagemLivrariaScreen")}
                        >
                            <Text style={styles.createButtonText}>ADICIONAR LIVRARIA</Text>
                            <Ionicons name="add-outline" size={24} color="#307C31" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.containerButton}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("CadastroDieta2Screen")
                            }
                            style={styles.createButton}
                        >
                            <Text style={styles.textButton}>PRÓXIMO</Text>
                        </TouchableOpacity>

                    </View>

                </ScrollView>

            </View>
        </View >
    )
}