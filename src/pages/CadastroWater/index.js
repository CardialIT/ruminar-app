import React, { useState, useEffect } from "react";
import {
    View,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";
import styles from "./styles.js";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Toast from "react-native-toast-message";
import { useContextProvider } from "../../context/AuthContext.js";
import Loading from "../../components/LoadingElement/index.js";

export default function CadastroWaterScreen() {
    const {    
        loading, 
        setLoading,
        calcularAgua,
        setNomeCalculoAgua,
        setMSEstimadaCalculoAgua,
        setMSExistenteCalculoAgua,
        setCalculoAgua,
     } = useContextProvider();
    const navigation = useNavigation();


    const [nomeCalculo, setNomeCalculo] = useState("");
    const [msExistente, setMsExistente] = useState(0);
    const [msEstimada, setMsEstimada] = useState(0);


    


    const handleProximo = async (msExistente, msEstimada) => {
        setLoading(true);
        try {
            const resultado = calcularAgua(msExistente, msEstimada)
            
            setNomeCalculoAgua(nomeCalculo),
            setMSEstimadaCalculoAgua(msExistente),
            setMSExistenteCalculoAgua(msEstimada),
            setCalculoAgua(resultado)
            navigation.navigate("DetalhesWaterScreen");
        } catch (error) {
            Toast.show({
                type: "error",
                text1: "Erro ao calcular milho",
            });
        } finally {
            setLoading(false);
        }
    };
        

    return (
        <View style={styles.container}>

            <View style={styles.firstContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("Water")}>
                    <Ionicons name="chevron-back-outline" size={24} color="white" />
                </TouchableOpacity>

                <Text style={styles.title}>Novo calculo da água</Text>

                <TouchableOpacity onPress={() => {}}>
                </TouchableOpacity> 
            </View>

            <View style={styles.secondContainer}>
            <Text style={styles.listagemTitle}>Dê um nome ao seu calculo</Text>
                <View style={styles.containerDietaName}>
                <TextInput
                    style={styles.inputFieldName}
                    placeholder="Nome do calculo"
                    value={nomeCalculo}
                    onChangeText={setNomeCalculo}
                />
                </View>

                <View style={styles.containerDietaName}>
                <TextInput
                    style={styles.inputFieldName}
                    placeholder="Matéria seca existente"
                    value={msExistente}
                    onChangeText={setMsExistente}
                />
                </View>

                <View style={styles.containerDietaName}>
                <TextInput
                    style={styles.inputFieldName}
                    placeholder="Materia seca estimada"
                    value={msEstimada}
                    onChangeText={setMsEstimada}
                />
                </View>
                
                <TouchableOpacity
    onPress={() => handleProximo(msExistente, msEstimada)}
    style={styles.createButton}
>
    <Text style={styles.textButton}>CALCULAR</Text>
</TouchableOpacity>

            </View>
            {loading && <Loading />}
        </View >
    );
}
