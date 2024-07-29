import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ResumoScreen from '../pages/Resumo';
import CadastroResumoScreen from "../pages/CadastroResumo";
import CadastroResumo2Screen from "../pages/CadastroResumo2";
import CadastroResumo3Screen from "../pages/CadastroResumo3"
import DetalhesResumoScreen from "../pages/DetalhesResumoScreen";
import DetalhesResumo from "../pages/DetalhesResumo";
import ListagemLivrariaScreen from "../pages/ListagemLivraria";

const Stack = createNativeStackNavigator();

function ResumoStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Resumo" component={ResumoScreen} />
      <Stack.Screen name="ListagemLivrariaScreen" component={ListagemLivrariaScreen} />
      <Stack.Screen name="CadastroResumoScreen" component={CadastroResumoScreen} />
      <Stack.Screen name="CadastroResumo2Screen" component={CadastroResumo2Screen} />
      <Stack.Screen name="CadastroResumo3Screen" component={CadastroResumo3Screen} />
      <Stack.Screen name="DetalhesResumo" component={DetalhesResumo} />
      <Stack.Screen name="DetalhesResumoScreen" component={DetalhesResumoScreen} />
    </Stack.Navigator>
  );
}

export default ResumoStack;