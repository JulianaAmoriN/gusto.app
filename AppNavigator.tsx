// src/navigation/AppNavigator.js
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet } from 'react-native';
import LoginPage from './src/pages/LoginScreen';
import CustomHeader from './src/components/CustomHeader';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <CustomHeader title='Gusto' />,
      }}
    >
      <Stack.Screen 
        name="Login" 
        component={LoginPage} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
