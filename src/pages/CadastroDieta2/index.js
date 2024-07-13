import React, { useState, useEffect } from "react";
import {
    View,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
} from "react-native";
import styles from "./styles.js";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { postDieta } from "../../services/api.js";
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
        calcularPNDRAlimentos,
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
     } = useContextProvider();
    const navigation = useNavigation();

    const [selectedLivrarias, setSelectedLivrarias] = useState([]);

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
        //console.log("Elementos selecionados"+ JSON.stringify(dieta.selectedLivrarias))
        return dieta.selectedLivrarias.map((livraria, index) => (
            <View key={index} style={styles.containerItemTitle}>
                <Text style={styles.listagemItemTitle}>{livraria.nome}</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputField}
                        placeholder="KG / MS"
                        onChangeText={(text) => handleInputChange(text, index)}
                        keyboardType="numeric"
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


    const handleProximo = async () => { 
            setLoading(true);
            try {                         
            calcularMOIndividualAlimentos();           
            const pbAlimentos = calcularPBAlimentos();
            calcularPBTotal(pbAlimentos)
            const pndrAlimentos = calcularPNDRAlimentos();
            calcularPNDRTotal(pndrAlimentos)
            const pdrAlimentos = calcularPDRAlimentos();                 
            calcularPDRTotal(pdrAlimentos)
            const proteinaSoluvelAlimentos = calcularProteinaSoluvelAlimentos();            
            calcularProteinaSoluvelTotal(proteinaSoluvelAlimentos)
            const fdnEfetivoAlimentos = calcularFDNEfetivoAlimentos();               
            calcularFDNEfetivoTotal(fdnEfetivoAlimentos)                  
            calcularPNDRTotal(pndrAlimentos);
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


    return (
        <View style={styles.container}>

            <View style={styles.firstContainer}>

                <TouchableOpacity onPress={() => navigation.navigate("Diets")}>
                    <Ionicons name="chevron-back-outline" size={24} color="white" />
                </TouchableOpacity>

                <Text style={styles.title}>Nova Dieta</Text>

                <TouchableOpacity onPress={() => navigation.navigate("DetalhesLivrariaScreen")}>

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
                                placeholder="KG / MS"
                                onChangeText={handleSelectLivraria}
                            />
                        </View>
                    )}

                    {/* ITENS */}

                    {dieta.selectedLivraria && (
                        <View style={styles.containerItemTitle}>
                            {/* <Text style={styles.containerTitle}>Livraria Selecionada:</Text> */}
                            <Text style={styles.listagemItemTitle}>{dieta.selectedLivraria.nome}</Text>
                            <TextInput
                                style={styles.inputField}
                                placeholder="KG / MS"
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
                            onPress={() =>
                                // navigation.navigate("CadastroResumo3Screen")
                                handleProximo()
                            }
                            style={styles.createButton}
                        >
                            <Text style={styles.textButton}>PRÓXIMO</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            {loading && <Loading />}
        </View >
    )
}