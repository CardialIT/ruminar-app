import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import 'react-native-gesture-handler';

import RegisterScreen from "./pages/Register/index";
import LoginScreen from "./pages/Login";
import HomeScreen from "./pages/Home";
import LivrariaScreen from "./pages/Livraria";
import Profile from "./pages/Profile";


// const Stack = createNativeStackNavigator();

// function LoginStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Login" component={LoginScreen} />
//       <Stack.Screen name="Register" component={RegisterScreen} />
//     </Stack.Navigator>
//   )
// }

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

    </HomeStack.Navigator>
  )
}

const LibraryStack = createNativeStackNavigator();

function LibraryStackScreen() {
  return (
    <LibraryStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <LibraryStack.Screen
        name="LivrariaDietas"
        component={LivrariaScreen}
      />
    </LibraryStack.Navigator>
  )
}

const ProfileStack = createNativeStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <ProfileStack.Screen
        name="Perfil"
        component={Profile}
      />
    </ProfileStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

function BottomTabsScreen() {
  return (
    <Tab.Navigator
      screenOptions={ ({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          switch (route.name) {
            case "Início":
              iconName = focused ? "home" : "home-outline";
              break;
            case "Livraria":
              iconName = focused ? "book" : "book-outline";
              break;
            case "Profile":
              iconName = focused ? "person-circle" : "person-circle-outline";
              break;
            default:
              break;
          }
          return <Ionicons name={iconName} size={24} color={"#307C31"} />;
        },
        tabBarActiveTintColor: '#307C31',
        tabBarInactiveTintColor: '#307C31',
      })}
    >
      <Tab.Screen
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: 'transparent',
            elevation: 0,
            shadowOpacity: 0,
          }
        }}
        name="Início"
        component={HomeStackScreen}
      />
      <Tab.Screen
        name="Livraria"
        component={LibraryStackScreen}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
      />
    </Tab.Navigator>
  )
}

export default function Routes() {
  return (
    <NavigationContainer>
      <BottomTabsScreen />
    </NavigationContainer>
  )
}

