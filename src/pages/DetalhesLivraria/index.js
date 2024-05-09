import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { getLivraria } from "../../services/api";
import styles from '../DetalhesLivraria/styles';

export default function DetalhesLivrariaScreen() {
    const navigation = useNavigation();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getLivraria();
                console.log("oi", response);
    
                if (response.data) {
                    setDetails(response.data);
                    console.log('Livraria', response.data);
                }
            } catch (error) {
                console.error('Erro ao buscar os detalhes:', error);
            }
        }
    
        fetchData();
    }, [details]);
    

    // const renderItem = ({ item }) => (
    //     <View style={styles.thirdContainer}>
    //         <Text style={styles.itemTitle}>{item.nome}</Text>
    //         <Text style={styles.date}>MS: {item.ms}</Text>
    //         <Text style={styles.status}>PB: {item.pb}</Text>
    //     </View>

    // );

    return (
        <View style={styles.container}>
            <View style={styles.firstContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("CadastroLivrariaScreen")}>
                    <Ionicons name="chevron-back-outline" size={24} color="white" />
                </TouchableOpacity>

                <Text style={styles.title}>
                    Detalhes Livraria
                </Text>

                <TouchableOpacity>
                    <Image
                        source={require('../../../assets/Fill.png')}
                        style={styles.containerImage}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.secondContainer}>
                <FlatList
                    data={details}
                    keyExtractor={(item, index) => String(item.id)}
                    renderItem={({ item, index }) => (
                        <View style={styles.containerProps}>
                            <Text style={styles.itemTitle}>{item.nome}</Text>
                            <Text style={styles.itens}>{item.ms}</Text>
                            <Text style={styles.itens}>{item.pb}</Text>
                            <Text style={styles.itens}>{item.pndr}</Text>
                            <Text style={styles.itens}>{item.pdr}</Text>
                            <Text style={styles.itens}>{item.proteina_soluvel}</Text>
                            <Text style={styles.itens}>{item.fdn_efetivo}</Text>
                            <Text style={styles.itens}>{item.ndt}</Text>
                            <Text style={styles.itens}>{item.fdn}</Text>
                            <Text style={styles.itens}>{item.cnf}</Text>
                            <Text style={styles.itens}>{item.amido}</Text>
                            <Text style={styles.itens}>{item.ee}</Text>
                        </View>
                    )}
                />
            </View>

            <View style={styles.containerInfo}>
                <Image
                    source={require('../../assets/Notification.png')}
                    style={styles.image}
                />
                <Text style={styles.infoText}>Alguma mensagem de informação ou um texto?</Text>
            </View>
        </View>
    )
}

