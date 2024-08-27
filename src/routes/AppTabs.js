import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // ou qualquer outro pacote de ícones que você esteja usando
import HomeStack from './HomeStack';
import ResumoStack from './ResumoStack';
import DietasStack from './DietasStack';
import LivrariaStack from './LivrariaStack';
import ProfileStack from './ProfileStack';
import FinanceStack from './FinanceStack';
import WaterStack from './WaterStack';

const Tab = createBottomTabNavigator();

function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#307C31', // Cor ativa
        tabBarInactiveTintColor: '#8391A1', // Cor inativa
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Resumo':
              iconName = focused ? 'book' : 'book-outline';
              break;
            case 'Dietas':
              iconName = focused ? 'nutrition' : 'nutrition-outline';
              break;
            case 'Livraria':
              iconName = focused ? 'library' : 'library-outline';
              break;
              case 'Finance':
                iconName = focused ? 'cash' : 'cash-outline';
                break;
                // case 'Water':
                // iconName = focused ? 'water' : 'water-outline';
                // break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
             
            default:
              iconName = 'circle';
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Resumo" component={ResumoStack} />
      <Tab.Screen name="Dietas" component={DietasStack} />
      <Tab.Screen name="Livraria" component={LivrariaStack} />
      <Tab.Screen name="Finance" component={FinanceStack} />
      <Tab.Screen name="Water" component={WaterStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
   
   
    </Tab.Navigator>
  );
}

export default AppTabs;
