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

    const handleSelectLivraria = (item) => {
        const updatedLivrarias = [...dieta.selectedLivrarias, item];
        updateDieta("selectedLivrarias", updatedLivrarias);
        // navigation.navigate("CadastroDieta2Screen");
    };

    const handleRemoveLivraria = (index) => {
        const updatedLivrarias = dieta.selectedLivrarias.filter((_, i) => i !== index);
        updateDieta("selectedLivrarias", updatedLivrarias);
    };

    
    const renderSelectedLivrarias = () => {
        return dieta.selectedLivrarias.map((livraria, index) => (
            <View key={index} style={styles.containerItemTitle}>
                   <TouchableOpacity
                        style={styles.removeButton}
                        onPress={() => handleRemoveLivraria(index)}>
                        <Ionicons name="remove-outline" size={24} color="red" />
                    </TouchableOpacity>
                <Text style={styles.listagemItemTitle}>{livraria.nome}</Text>
            
                <View style={styles.inputContainer}> 
                    
                    <TextInput
                        style={styles.inputField}
                        placeholder="KG"
                        onChangeText={(text) => handleInputChangeKg(text, index)}
                        keyboardType="numeric"
                    />
                      <TextInput
                        style={styles.inputField}
                        placeholder="R$"
                        onChangeText={(text) => handleInputChangeR$(text, index)}
                       
                    />
                   
                </View>
            </View>
        ));
    };

    const handleInputChangeKg = (text, index) => {
        const updatedLivrarias = [...dieta.selectedLivrarias];
        updatedLivrarias[index].kgMs = text;
        console.log(updatedLivrarias)
        updateDieta("selectedLivrarias", updatedLivrarias);
    };

    const handleInputChangeR$ = (text, index) => {
        const updatedLivrarias = [...dieta.selectedLivrarias];
        updatedLivrarias[index].r$ = text;
        console.log(updatedLivrarias)
        updateDieta("selectedLivrarias", updatedLivrarias);
    };

    const handleProximo = async () => {
        setLoading(true);
        try {
            // calcularPNDRTotal(pbTotal, pdrTotal)
             updateDieta("nomeDaFinanca", nomeDaFinanca); 
            navigation.navigate("CadastroFinanceScreen2");
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
                <TouchableOpacity onPress={() => navigation.navigate("Financa")}>
                    <Ionicons name="chevron-back-outline" size={24} color="white" />
                </TouchableOpacity>

                <Text style={styles.title}>Nova Finança</Text>

                <TouchableOpacity onPress={() => {}}>
                </TouchableOpacity> 
            </View>

            <View style={styles.secondContainer}>
                
          
                <Text style={styles.listagemTitle}>Selecione os itens</Text>

                <ScrollView style={styles.containerList}>
                    {dieta.selectedLivraria && (
                        <View style={styles.containerItemTitle}>
                            <Text style={styles.listagemItemTitle}>{dieta.selectedLivraria.nome}</Text>
                            <TextInput
                                style={styles.inputField}
                                placeholder="KG"
                                onChangeText={handleSelectLivraria}
                            />
                        </View>
                    )}

                    {renderSelectedLivrarias()}

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
                            onPress={handleProximo}
                            style={styles.createButton}
                        >
                            <Text style={styles.textButton}>PRÓXIMO</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            {loading && <Loading />}
        </View >
    );
}
