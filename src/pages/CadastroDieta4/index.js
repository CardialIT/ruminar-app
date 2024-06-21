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

export default function CadastroDieta4Screen() {
    const { dieta, updateDieta, ims, fdn, calcularFDNAlimentos, calcularFDNTotal, loading, setLoading  } = useContextProvider();
    const navigation = useNavigation();
    const [selectedLivrarias, setSelectedLivrarias] = useState([]);

    const handleSelectLivraria = (item) => {
        const updatedLivrarias = [...dieta.selectedLivrarias, item];

        updateDieta("selectedLivrarias", updatedLivrarias);
        navigation.navigate("CadastroDieta2Screen");
    };

    const renderSelectedLivrarias = () => {
        //console.log("Elementos selecionados"+ JSON.stringify(dieta.selectedLivrarias))
        return dieta.selectedLivrarias.map((livraria, index) => (
            <View key={index} style={styles.containerItemTitle}>
                <Text style={styles.listagemItemTitle}>{livraria.nome}</Text>
                <Text>em MO</Text>
            </View>
        ));
    };
  
    const handleProximo = () => {
        setLoading(true);
        try {
            calcularFDNAlimentos();
            calcularFDNTotal();
            navigation.navigate("DetalhesDieta");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        calcularFDNTotal();
    }, [dieta.selectedLivrarias]);
    
    
    return (
        <View style={styles.container}>

            <View style={styles.firstContainer}>

                <TouchableOpacity onPress={() => navigation.navigate("CadastroDieta3Screen")}>
                    <Ionicons name="chevron-back-outline" size={24} color="white" />
                </TouchableOpacity>

                <Text style={styles.title}>Valores em Matéria Orgânica</Text> 

                <TouchableOpacity onPress={() => navigation.navigate("DetalhesLivrariaScreen")}>
                 
                </TouchableOpacity>
            </View>

            <View style={styles.secondContainer}>
                <Text style={styles.listagemTitle}>Preencha os dados de FDN</Text>

                <ScrollView style={styles.containerList}>

                 


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


                

                    <View style={styles.containerButton}>
                        <TouchableOpacity
                            onPress={() =>
                                // navigation.navigate("CadastroResumo3Screen")
                                handleProximo()
                            }
                            style={styles.createButton}
                        >
                            <Text style={styles.textButton}>VER PARÂMETROS</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            {loading && <Loading />}
        </View >
    )
}
