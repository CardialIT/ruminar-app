import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LivrariaScreen from "../pages/Livraria";
import CadastroLivrariaScreen from "../pages/CadastroLivraria";
import DetalhesLivrariaScreen from "../pages/DetalhesLivraria";

const Stack = createNativeStackNavigator();

function LivrariaStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
     <Stack.Screen name="LivrariaScreen" component={LivrariaScreen} />
      <Stack.Screen name="CadastroLivrariaScreen" component={CadastroLivrariaScreen} />
      <Stack.Screen name="DetalhesLivrariaScreen" component={DetalhesLivrariaScreen} />
    </Stack.Navigator>
  );
}

export default LivrariaStack;