import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WaterScreen from '../pages/Water';
import ListagemLivrariaScreen from "../pages/ListagemLivraria";
import CadastroWaterScreen from "../pages/CadastroWater";
// import CadastroFinanceScreen2 from "../pages/CadastroFinance2";
import DetalhesWater from '../pages/DetalhesWater';

const Stack = createNativeStackNavigator();

function WaterStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Water" component={WaterScreen} />
      <Stack.Screen name="ListagemLivrariaScreen" component={ListagemLivrariaScreen} />
      <Stack.Screen name="CadastroWaterScreen" component={CadastroWaterScreen} />
  
      <Stack.Screen name="DetalhesWaterScreen" component={DetalhesWater} />
    </Stack.Navigator>
  );
}

export default WaterStack;