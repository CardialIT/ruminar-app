import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';
import styles from '../CadastroDieta/styles';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function CadastroDietaScreen() {
    const navigation = useNavigation();
    const [itemName, setItemName] = React.useState('');

    return (
        <View style={styles.container}>

            <View style={styles.firstContainer}>

                <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
                    <Ionicons name="chevron-back-outline" size={24} color="white" />
                </TouchableOpacity>

                <Text style={styles.title}>
                    Nova Dieta
                </Text>

                <TouchableOpacity onPress={() => navigation.navigate("DetalhesLivrariaScreen")}>
                    <Image
                        source={require('../../../assets/Fill.png')}
                        style={styles.containerItem}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.containerItem}>

                <Text style={styles.containerTitle}>Nome da dieta</Text>

                <TextInput
                    value={itemName}
                    onChangeText={text => setItemName(text)}
                    placeholder="Título da livraria"
                    style={styles.containerInput}
                />
            </View>

            <View style={styles.containerItem}>

                <Text style={styles.containerTitle}>Peso médio (KG)</Text>

                <TextInput
                    value={itemName}
                    onChangeText={text => setItemName(text)}
                    placeholder="Digite o nome do item"
                    style={styles.containerInput}
                />
            </View>

            <View style={styles.containerItem}>

                <Text style={styles.containerTitle}>Produção estimada</Text>

                <TextInput
                    value={itemName}
                    onChangeText={text => setItemName(text)}
                    placeholder="Título da livraria"
                    style={styles.containerInput}
                />
            </View>

            <View style={styles.containerItem}>

                <Text style={styles.containerTitle}>Fill - Preenchimento Ruminal</Text>

                <TextInput
                    value={itemName}
                    onChangeText={text => setItemName(text)}
                    placeholder="Digite o nome do item"
                    style={styles.containerInput}
                />
            </View>

            <View style={styles.containerItem}>

                <Text style={styles.containerTitle}>Preço do leite:</Text>

                <TextInput
                    value={itemName}
                    onChangeText={text => setItemName(text)}
                    placeholder="Digite o nome do item"
                    style={styles.containerInput}
                />
            </View>

            <View style={styles.containerButton}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("")}
                    style={styles.createButton}>
                    <Text style={styles.textButton}>PRÓXIMO</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}