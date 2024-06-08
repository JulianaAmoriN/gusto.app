// src/navigation/AppNavigator.js
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginUser from './src/pages/LoginUser';
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
        name="LoginUser" 
        component={LoginUser} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
