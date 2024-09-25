
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './src/screens/homepage';
import Catalog from './src/screens/catalog';
import Payment_summary from './src/screens/payment_summary';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Homepage} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Catalog" 
          component={Catalog} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Payment_Summary" 
          component={Payment_summary} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

