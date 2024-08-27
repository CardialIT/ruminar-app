import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FinanceScreen from '../pages/Finance';
import ListagemLivrariaScreen from "../pages/ListagemLivraria";
import CadastroFinanceScreen from "../pages/CadastroFinance";
import CadastroFinanceScreen2 from "../pages/CadastroFinance2";
import DetalhesFinance from '../pages/DetalhesFinance';

const Stack = createNativeStackNavigator();

function FinanceStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Finance" component={FinanceScreen} />
      <Stack.Screen name="ListagemLivrariaScreen" component={ListagemLivrariaScreen} />
      <Stack.Screen name="CadastroFinanceScreen" component={CadastroFinanceScreen} />
      <Stack.Screen name="CadastroFinanceScreen2" component={CadastroFinanceScreen2} />
      <Stack.Screen name="DetalhesFinanceScreen" component={DetalhesFinance} />
    </Stack.Navigator>
  );
}

export default FinanceStack;