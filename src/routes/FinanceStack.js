import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FinanceScreen from '../pages/Finance';
import ListagemLivrariaScreen from "../pages/ListagemLivraria";
import CadastroFinanceScreen from "../pages/CadastroFinance";
import DetalhesFinance from '../pages/DetalhesFinance';

const Stack = createNativeStackNavigator();

function FinanceStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Finance" component={FinanceScreen} />
      <Stack.Screen name="ListagemLivrariaScreen" component={ListagemLivrariaScreen} />
      <Stack.Screen name="CadastroFinanceScreen" component={CadastroFinanceScreen} />
      <Stack.Screen name="DetalhesFinanceScreen" component={DetalhesFinance} />
    </Stack.Navigator>
  );
}

export default FinanceStack;