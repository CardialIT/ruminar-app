import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginStack from './LoginStack';
import AppTabs from './AppTabs';
import { useContextProvider } from "../context/AuthContext";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  const { isAuth } = useContextProvider(); // Mover a chamada do hook para dentro do componente

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuth ? (
          <Stack.Screen name="App" component={AppTabs} />
        ) : (
          <Stack.Screen name="Auth" component={LoginStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
