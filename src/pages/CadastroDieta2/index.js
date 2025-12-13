import React, { useState, useEffect, useRef } from "react";
import {
    View,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Keyboard
} from "react-native";
import styles from "./styles.js";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Toast from "react-native-toast-message";
import { useContextProvider } from "../../context/AuthContext.js";
import Loading from "../../components/LoadingElement/index.js";

export default function CadastroDieta2Screen() {
    const { 
        dieta,
        updateDieta,
        loading, 
        setLoading,    
        calcularPBAlimentos,  
        calcularPBTotal, 
        calcularPDRAlimentos,
        calcularPDRTotal,
        calcularProteinaSoluvelAlimentos,
        calcularProteinaSoluvelTotal,
        calcularFDNEfetivoAlimentos,
        calcularFDNEfetivoTotal,
        calcularPNDRTotal,
        calcularNDTAlimentos,  
        calcularNDTTotal,
        calcularItemFDNAlimentos,   
        calcularItemFDNTotal,
        calcularCNFAlimentos, 
        calcularCNFTotal,
        calcularAMIDOAlimentos,    
        calcularAMIDOTotal,
        calcularEEAlimentos, 
        calcularEETotal,
        calcularMOIndividualAlimentos,  
        calcularKgMsTotal     
     } = useContextProvider();
    const navigation = useNavigation();

    const [selectedLivrarias, setSelectedLivrarias] = useState([]);
    const [nomeDaDieta, setNomeDaDieta] = useState("");
    const scrollViewRef = useRef();

    const handleSelectLivraria = (item) => {
        const updatedLivrarias = [...dieta.selectedLivrarias, item];

        updateDieta("selectedLivrarias", updatedLivrarias);
        navigation.navigate("CadastroDieta2Screen");
    };

    const handleRemoveLivraria = (index) => {
        const updatedLivrarias = dieta.selectedLivrarias.filter((_, i) => i !== index);
        updateDieta("selectedLivrarias", updatedLivrarias);
    };

    const renderSelectedLivrarias = () => {
        return dieta.selectedLivrarias.map((livraria, index) => (
            <View key={index} style={styles.containerItemTitle}>
                <Text style={styles.listagemItemTitle}>{livraria.nome}</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputField}
                        placeholder="KG / MS"
                        placeholderTextColor="#000"
                        onChangeText={(text) => handleInputChange(text, index)}
                        keyboardType="numeric"
                        onFocus={() => handleInputFocus(index)}
                    />
                    <TouchableOpacity
                        style={styles.removeButton}
                        onPress={() => handleRemoveLivraria(index)}>
                        <Ionicons name="remove-outline" size={24} color="red" />
                    </TouchableOpacity>
                </View>
            </View>
        ));
    };

    const handleInputChange = (text, index) => {
        const updatedLivrarias = [...dieta.selectedLivrarias];
        updatedLivrarias[index].kgMs = text;
        updateDieta("selectedLivrarias", updatedLivrarias);
    };

    const handleInputFocus = (index) => {
        // Rola para a posição do input quando focado
        setTimeout(() => {
            const offset = 100 + (index * 100); // Ajuste dinâmico baseado no índice
            scrollViewRef.current?.scrollTo({
                y: offset,
                animated: true
            });
        }, 300);
    };

    const handleProximo = async () => {
        Keyboard.dismiss(); // Fecha o teclado antes de navegar
        setLoading(true);
        try {
            calcularMOIndividualAlimentos();
            const pbAlimentos = calcularPBAlimentos();
           const pbTotal = calcularPBTotal(pbAlimentos)    
           calcularPBTotal(pbAlimentos)           
            const pdrAlimentos = calcularPDRAlimentos();
            const pdrTotal = calcularPDRTotal(pdrAlimentos)
            calcularPDRTotal(pdrAlimentos)
            const proteinaSoluvelAlimentos = calcularProteinaSoluvelAlimentos();
            calcularProteinaSoluvelTotal(proteinaSoluvelAlimentos)
            const fdnEfetivoAlimentos = calcularFDNEfetivoAlimentos();
            calcularFDNEfetivoTotal(fdnEfetivoAlimentos)
            const ndtAlimentos = calcularNDTAlimentos();
            calcularNDTTotal(ndtAlimentos);
            const itemFDNAlimentos = calcularItemFDNAlimentos();
            calcularItemFDNTotal(itemFDNAlimentos);
            const cnfAlimentos = calcularCNFAlimentos();
            calcularCNFTotal(cnfAlimentos);
            const amidoAlimentos = calcularAMIDOAlimentos();
            calcularAMIDOTotal(amidoAlimentos);
            const eeAlimentos = calcularEEAlimentos();
            calcularEETotal(eeAlimentos);
            calcularMOIndividualAlimentos();          
            calcularPNDRTotal(pbTotal, pdrTotal)
            updateDieta("nome_da_dieta", nomeDaDieta);
            calcularKgMsTotal()
            navigation.navigate("CadastroDieta4Screen");
        } catch (error) {
            Toast.show({
                type: "error",
                text1: "Erro ao calcular milho",
            });
        } finally {
            setLoading(false);
        }
    };

    const handleBack = () => {
        Keyboard.dismiss(); // Fecha o teclado ao voltar
        navigation.navigate("Diets");
    };

    return (
        <KeyboardAvoidingView 
            style={styles.keyboardAvoidingContainer}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
        >
            <View style={styles.container}>
                <View style={styles.firstContainer}>
                    <TouchableOpacity onPress={handleBack}>
                        <Ionicons name="chevron-back-outline" size={24} color="white" />
                    </TouchableOpacity>

                    <Text style={styles.title}>Nova Dieta</Text>

                    <TouchableOpacity onPress={() => navigation.navigate("DetalhesLivrariaScreen")}>
                    </TouchableOpacity> 
                </View>

                <ScrollView 
                    ref={scrollViewRef}
                    style={styles.scrollContainer}
                    contentContainerStyle={styles.scrollContent}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={true}
                    bounces={true}
                >
                    
                    <View style={styles.secondContainer}>
                        <View style={styles.containerDietaName}>
                            <Text style={styles.listagemTitle}>Preencha as informações abaixo</Text>
                            <TextInput
                                style={styles.inputFieldName}
                                placeholder="Nome da dieta"
                                value={nomeDaDieta}
                                onChangeText={setNomeDaDieta}
                                onFocus={() => handleInputFocus(0)}
                            />
                        </View>
                        
                        <Text style={styles.listagemTitle}>Selecione os itens</Text>

                        <View style={styles.containerList}>
                            {dieta.selectedLivraria && (
                                <View style={styles.containerItemTitle}>
                                    <Text style={styles.listagemItemTitle}>{dieta.selectedLivraria.nome}</Text>
                                    <TextInput
                                        style={styles.inputField}
                                        placeholder="KG / MS"
                                        onChangeText={handleSelectLivraria}
                                        keyboardType="numeric"
                                        onFocus={() => handleInputFocus(1)}
                                    />
                                </View>
                            )}

                            {renderSelectedLivrarias()}

                            <View style={styles.containerAddItem}>
                                <TouchableOpacity
                                    style={styles.addButton}
                                    onPress={() => {
                                        Keyboard.dismiss();
                                        navigation.navigate("ListagemLivrariaScreen");
                                    }}
                                >
                                    <Text style={styles.createButtonText}>ADICIONAR LIVRARIA</Text>
                                    <Ionicons name="add-outline" size={24} color="#307C31" />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.containerButton}>
                                <TouchableOpacity
                                    onPress={handleProximo}
                                    style={styles.createButton}
                                    activeOpacity={0.8}
                                >
                                    <Text style={styles.textButton}>PRÓXIMO</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            {loading && <Loading />}
        </KeyboardAvoidingView>
    );
}