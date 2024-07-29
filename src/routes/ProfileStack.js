import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from "../pages/Profile";

const Stack = createNativeStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Perfil" component={Profile} />
    </Stack.Navigator>
  );
}

export default ProfileStack;
