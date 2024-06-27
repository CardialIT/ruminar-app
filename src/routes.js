import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import "react-native-gesture-handler";

import RegisterScreen from "./pages/Register/index";
import LoginScreen from "./pages/Login";
import HomeScreen from "./pages/Home";
import LivrariaScreen from "./pages/Livraria";
import DietasScreen from "./pages/Dietas";
import ResumoScreen from "./pages/Resumo";
import DietasCalculo from "./pages/DietaCalculo";
import Profile from "./pages/Profile";

import CadastroLivrariaScreen from "./pages/CadastroLivraria";
import DetalhesLivrariaScreen from "./pages/DetalhesLivraria";

// import DetalhesDietaScreen from "./pages/DetalhesDieta";
import ListagemLivrariaScreen from "./pages/ListagemLivraria";
import CadastroResumoScreen from "./pages/CadastroResumo";
import CadastroResumo2Screen from "./pages/CadastroResumo2";
import CadastroResumo3Screen from "./pages/CadastroResumo3";
import CadastroDietaScreen from "./pages/CadastroDieta";
import CadastroDieta2Screen from "./pages/CadastroDieta2";
import CadastroDieta3Screen from "./pages/CadastroDieta3";
import CadastroDieta4Screen from "./pages/CadastroDieta4";
import DetalhesResumoScreen from "./pages/DetalhesResumoScreen";
import DetalhesDieta from "./pages/DetalhesDieta"
import DetalhesResumo from "./pages/DetalhesResumo"

import ResultadoDieta from "./pages/ResultadoDieta";

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
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const ResumoStack = createNativeStackNavigator();

function ResumoStackScreen() {
  return (
    <ResumoStack.Navigator screenOptions={{ headerShown: false }}>
      <ResumoStack.Screen name="Resumo" component={ResumoScreen} />
      <ResumoStack.Screen name="ListagemLivrariaScreen" component={ListagemLivrariaScreen} />
      <ResumoStack.Screen name="CadastroResumoScreen" component={CadastroResumoScreen} />
      <ResumoStack.Screen name="CadastroResumo2Screen" component={CadastroResumo2Screen} />
      <ResumoStack.Screen name="CadastroResumo3Screen" component={CadastroResumo3Screen} />
      <ResumoStack.Screen name="DetalhesResumo" component={DetalhesResumo} />
      <ResumoStack.Screen name="DetalhesResumoScreen" component={DetalhesResumoScreen} />
 
    </ResumoStack.Navigator>
  );
}

const DietasStack = createNativeStackNavigator();

function DietasStackScreen() {
  return (
    <DietasStack.Navigator screenOptions={{ headerShown: false }}>
      <DietasStack.Screen name="Diets" component={DietasScreen} />
      <DietasStack.Screen name="ListagemLivrariaScreen" component={ListagemLivrariaScreen} />
      <DietasStack.Screen name="CadastroDietaScreen" component={CadastroDietaScreen} />
      <DietasStack.Screen name="CadastroDieta2Screen" component={CadastroDieta2Screen} />
      <DietasStack.Screen name="CadastroDieta3Screen" component={CadastroDieta3Screen} />
      <DietasStack.Screen name="CadastroDieta4Screen" component={CadastroDieta4Screen} />
      <DietasStack.Screen name="DetalhesDieta" component={DetalhesDieta} />
      <DietasStack.Screen name="ResultadoDieta" component={ResultadoDieta} />
    </DietasStack.Navigator>
  );
}

const LibraryStack = createNativeStackNavigator();

function LibraryStackScreen() {
  return (
    <LibraryStack.Navigator screenOptions={{headerShown: false}}>
      <LibraryStack.Screen name="LivrariaScreen" component={LivrariaScreen} />
      <LibraryStack.Screen name="CadastroLivrariaScreen" component={CadastroLivrariaScreen} />
      <LibraryStack.Screen name="DetalhesLivrariaScreen" component={DetalhesLivrariaScreen} />
    </LibraryStack.Navigator>
  );
}

const ProfileStack = createNativeStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <ProfileStack.Screen name="Perfil" component={Profile} />
    </ProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function BottomTabsScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          switch (route.name) {
            case "HomeScreen":
              iconName = focused ? "home" : "home-outline";
              break;
            case "ResumoScreen":
              iconName = focused ? "scale" : "scale-outline";
              break;
            case "DietasScreen":
              iconName = focused ? "fast-food" : "fast-food-outline";
              break;
            case "LivrariaScreen":
              iconName = focused ? "book" : "book-outline";
              break;
            case "ProfileScreen":
              iconName = focused ? "person-circle" : "person-circle-outline";
              break;
            default:
              break;
          }
          return (
            <Ionicons
              name={iconName}
              size={22}
              color={"#307C31"}
              style={{ flex: 1, marginTop: 12 }}
            />
          );
        },
        tabBarActiveTintColor: "#307C31",
        tabBarInactiveTintColor: "#307C31",
        tabBarLabel: " ",
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeStackScreen} options={{ headerShown: false }} />
      <Tab.Screen name="ResumoScreen" component={ResumoStackScreen} options={{ headerShown: false }} />
      <Tab.Screen name="DietasScreen" component={DietasStackScreen} options={{ headerShown: false }} />
      <Tab.Screen name="LivrariaScreen" component={LibraryStackScreen} options={{ headerShown: false }} />
      <Tab.Screen name="ProfileScreen" component={ProfileStackScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <BottomTabsScreen />
    </NavigationContainer>
  );
}
