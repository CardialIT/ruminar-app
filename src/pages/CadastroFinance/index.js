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

export default function CadastroFinanceScreen() {
    const { 
        dieta,
        updateDieta,
        loading, 
        setLoading,         
     } = useContextProvider();
    const navigation = useNavigation();

    const [selectedLivrarias, setSelectedLivrarias] = useState([]);
    const [nomeDaFinanca, setNomeDaFinanca] = useState("");
    const scrollViewRef = useRef();

    const handleSelectLivraria = (item) => {
        const updatedLivrarias = [...dieta.selectedLivrarias, item];
        updateDieta("selectedLivrarias", updatedLivrarias);
    };

    const handleRemoveLivraria = (index) => {
        const updatedLivrarias = dieta.selectedLivrarias.filter((_, i) => i !== index);
        updateDieta("selectedLivrarias", updatedLivrarias);
    };

    const handleInputFocus = (index, inputType = 'kg') => {
        setTimeout(() => {
            const baseOffset = 100;
            const inputOffset = inputType === 'kg' ? 0 : 50; // Ajuste para diferentes campos
            const offset = baseOffset + (index * 120) + inputOffset;
            scrollViewRef.current?.scrollTo({
                y: offset,
                animated: true
            });
        }, 300);
    };

    const renderSelectedLivrarias = () => {
        return dieta.selectedLivrarias.map((livraria, index) => (
            <View key={index} style={styles.containerItemTitle}>
                <View style={styles.titleRow}>
                    <Text style={styles.listagemItemTitle}>{livraria.nome}</Text>
                    <TouchableOpacity
                        style={styles.removeButton}
                        onPress={() => handleRemoveLivraria(index)}
                    >
                        <Ionicons name="remove-outline" size={24} color="red" />
                    </TouchableOpacity>
                </View>
            
                <View style={styles.inputRowContainer}>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputLabel}>KG</Text>
                        <TextInput
                            style={styles.inputField}
                            placeholder="Quantidade"
                            onChangeText={(text) => handleInputChangeKg(text, index)}
                            keyboardType="numeric"
                            onFocus={() => handleInputFocus(index, 'kg')}
                        />
                    </View>
                    
                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputLabel}>R$</Text>
                        <TextInput
                            style={styles.inputField}
                            placeholder="Valor"
                            onChangeText={(text) => handleInputChangeR$(text, index)}
                            keyboardType="numeric"
                            onFocus={() => handleInputFocus(index, 'valor')}
                        />
                    </View>
                </View>
            </View>
        ));
    };

    const handleInputChangeKg = (text, index) => {
        const updatedLivrarias = [...dieta.selectedLivrarias];
        updatedLivrarias[index].kgMs = text;
        updateDieta("selectedLivrarias", updatedLivrarias);
    };

    const handleInputChangeR$ = (text, index) => {
        const updatedLivrarias = [...dieta.selectedLivrarias];
        updatedLivrarias[index].r$ = text;
        updateDieta("selectedLivrarias", updatedLivrarias);
    };

    const handleProximo = async () => {
        Keyboard.dismiss();
        setLoading(true);
        try {
            updateDieta("nomeDaFinanca", nomeDaFinanca); 
            navigation.navigate("CadastroFinanceScreen2");
        } catch (error) {
            Toast.show({
                type: "error",
                text1: "Erro ao salvar finanças",
            });
        } finally {
            setLoading(false);
        }
    };

    const handleBack = () => {
        Keyboard.dismiss();
        navigation.navigate("Financa");
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

                    <Text style={styles.title}>Nova Finança</Text>

                    <TouchableOpacity onPress={() => {}}>
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
                        <View style={styles.containerFinancaName}>
                            <Text style={styles.listagemTitle}>Nome da Finança</Text>
                            <TextInput
                                style={styles.inputFieldName}
                                placeholder="Digite o nome"
                                value={nomeDaFinanca}
                                onChangeText={setNomeDaFinanca}
                                onFocus={() => handleInputFocus(0, 'nome')}
                            />
                        </View>
                        
                        <Text style={styles.listagemTitle}>Selecione os itens</Text>

                        <View style={styles.containerList}>
                            {dieta.selectedLivraria && (
                                <View style={styles.containerItemTitle}>
                                    <Text style={styles.listagemItemTitle}>{dieta.selectedLivraria.nome}</Text>
                                    <View style={styles.inputRowContainer}>
                                        <View style={styles.inputWrapper}>
                                            <Text style={styles.inputLabel}>KG</Text>
                                            <TextInput
                                                style={styles.inputField}
                                                placeholder="Quantidade"
                                                onChangeText={handleSelectLivraria}
                                                keyboardType="numeric"
                                                onFocus={() => handleInputFocus(0, 'kg')}
                                            />
                                        </View>
                                    </View>
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