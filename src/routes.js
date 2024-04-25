import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import LoginScreen from "./pages/Login/index";
import HomeScreen from "./pages/Home";

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
