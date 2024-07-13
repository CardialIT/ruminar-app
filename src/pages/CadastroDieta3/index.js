import React, { useState } from "react";
import {
    View,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    Modal
} from "react-native"; 
import Toast from "react-native-toast-message";
import styles from "../CadastroDieta3/styles";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useContextProvider } from "../../context/AuthContext.js";
import Loading from "../../components/LoadingElement/index.js";

export default function CadastroDieta3Screen() {
    const navigation = useNavigation();
    const {
        calcularMilhoEstimado, 
        calcularMineral, 
        calcularMateriaSecaExistente, 
        calcularFracaoProteica, 
        calcularMateriaSecaFaltando, 
        loading, 
        setLoading, 
        calcularAmidoTotalNecessario, 
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
        calcularMateriaSecaExistente2, 
        calcularMOIndividualAlimentos,      
    } = useContextProvider();

    const [amidoEstimado, setAmidoEstimado] = useState("");
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleCalcularTudo = async () => {
        const amido = parseFloat(amidoEstimado);
        if (!isNaN(amido)) {
            setLoading(true);
            try {
                const amidoNecessario = calcularAmidoTotalNecessario(amido);
                const milhoEstimado = calcularMilhoEstimado(amidoNecessario);
                const materiaSecaExistente = calcularMateriaSecaExistente(milhoEstimado);
                const fracaoProteica = calcularFracaoProteica(materiaSecaExistente);
                const mineral = calcularMineral();
                const materiaSecaExistente2 = calcularMateriaSecaExistente2(milhoEstimado, fracaoProteica, mineral);
            calcularMateriaSecaFaltando(materiaSecaExistente2);
            
            calcularMOIndividualAlimentos();
            
            const pbAlimentos = calcularPBAlimentos();
            calcularPBTotal(pbAlimentos)

            const pndrAlimentos = calcularPNDRAlimentos();
        
    
            calcularPNDRTotal(pndrAlimentos, materiaSecaExistente)

            const pdrAlimentos = calcularPDRAlimentos();
         
          
            calcularPDRTotal(pdrAlimentos, materiaSecaExistente)

            const proteinaSoluvelAlimentos = calcularProteinaSoluvelAlimentos();
     
           
            calcularProteinaSoluvelTotal(proteinaSoluvelAlimentos, materiaSecaExistente)

            const fdnEfetivoAlimentos = calcularFDNEfetivoAlimentos();
        
        
            calcularFDNEfetivoTotal(fdnEfetivoAlimentos)
            

            

       
            calcularPNDRTotal(pndrAlimentos, materiaSecaExistente);

            const ndtAlimentos = calcularNDTAlimentos();

            calcularNDTTotal(ndtAlimentos, materiaSecaExistente);

            const itemFDNAlimentos = calcularItemFDNAlimentos();
   
       
            calcularItemFDNTotal(itemFDNAlimentos, materiaSecaExistente);

            const cnfAlimentos = calcularCNFAlimentos();
       
          
            calcularCNFTotal(cnfAlimentos, materiaSecaExistente);

            const amidoAlimentos = calcularAMIDOAlimentos();
       
   
            calcularAMIDOTotal(amidoAlimentos, materiaSecaExistente);

            const eeAlimentos = calcularEEAlimentos();
        

            calcularEETotal(eeAlimentos, materiaSecaExistente);
            
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
        } else {
            Toast.show({
                type: "error",
                text1: "Valor de amido inválido",
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
                 
                </TouchableOpacity>

            </View> 

            <View style={styles.secondContainer}>
                <Text style={styles.listagemTitle}>Preencha as informações relacionadas ao amido</Text>

                <ScrollView style={styles.containerList}>


                    <View style={styles.containerItemTitle}>
                        <Text style={styles.listagemItemTitle}>Amido estimado</Text>
                        <TextInput
                            style={styles.inputField}
                            placeholder="em %"
                            value={amidoEstimado}
                            onChangeText={setAmidoEstimado}
                            keyboardType="numeric"
                        // onChangeText={handleSelectLivraria}
                        />
                    </View>


                    {/* NOTIFICATION */}
                    <TouchableOpacity
                        style={styles.containerItemNotification}
                        onPress={toggleModal}>

                        <View style={styles.containerImageNotification}>
                            <Image source={require("../../assets/Notification.png")} style={styles.notificationIcon} />
                        </View>

                        <View style={styles.containerTextNotification}>
                            <Text style={styles.notificationText}>Caso você tenha dúvidas sobre o preenchimento do Amido estimado <Text style={styles.underlinedText}>clique aqui</Text>
                            </Text>
                        </View>

                    </TouchableOpacity>

                    <View style={styles.containerButton}>
                        <TouchableOpacity
                            onPress={handleCalcularTudo}
                            style={styles.createButton}
                        >
                            <Text style={styles.textButton}>PRÓXIMO</Text>
                        </TouchableOpacity>

                    </View>


                </ScrollView>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isModalVisible}
                    onRequestClose={toggleModal}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>

                            <Text style={styles.modalTitle}>Regras parar checar o Fill</Text>

                            <View style={styles.modalItemContainer}>
                                <Text style={styles.modalText}>Atenção: O amido estimado vai variar de acordo com a qualidade da fibra disponível, indo de 20 a 30% na dieta total. Valores acima de 30% são indicados para animais de alta produção, porém pode oferecer risco de acidose.</Text>
                            </View>

                            <View style={styles.modalButtons}>
                                <TouchableOpacity
                                    style={styles.cancelButton}
                                    onPress={toggleModal}
                                >
                                    <Text style={styles.modalButton}>Fechar</Text>
                                </TouchableOpacity>


                            </View>
                        </View>
                    </View>
                </Modal>

            </View>
            {loading && <Loading />}
        </View>
    )
}

