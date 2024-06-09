// Router.js
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginUser from './pages/LoginUser';
import CustomHeader from './components/CustomHeader';

const Stack = createNativeStackNavigator();

const Router = () => {
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

export default Router;
