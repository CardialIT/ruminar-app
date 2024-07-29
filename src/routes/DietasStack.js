import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DietasScreen from "../pages/Dietas";
import CadastroDietaScreen from "../pages/CadastroDieta";
import CadastroDieta2Screen from "../pages/CadastroDieta2";
import CadastroDieta3Screen from "../pages/CadastroDieta3";
import CadastroDieta4Screen from "../pages/CadastroDieta4";
import DetalhesDieta from "../pages/DetalhesDieta";
import DetalhesDietasScreen from "../pages/DetalhesDietasScreen";
import ResultadoDieta from "../pages/ResultadoDieta";
import ListagemLivrariaScreen from "../pages/ListagemLivraria";

const Stack = createNativeStackNavigator();

function DietasStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Diets" component={DietasScreen} />
      <Stack.Screen name="ListagemLivrariaScreen" component={ListagemLivrariaScreen} />
      <Stack.Screen name="CadastroDietaScreen" component={CadastroDietaScreen} />
      <Stack.Screen name="CadastroDieta2Screen" component={CadastroDieta2Screen} />
      <Stack.Screen name="CadastroDieta3Screen" component={CadastroDieta3Screen} />
      <Stack.Screen name="CadastroDieta4Screen" component={CadastroDieta4Screen} />
      <Stack.Screen name="DetalhesDieta" component={DetalhesDieta} />
      <Stack.Screen name="DetalhesDietasScreen" component={DetalhesDietasScreen} />
      <Stack.Screen name="ResultadoDieta" component={ResultadoDieta} />
    </Stack.Navigator>
  );
}

export default DietasStack;