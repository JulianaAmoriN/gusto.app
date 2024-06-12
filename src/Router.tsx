// Router.js
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginUser from './pages/LoginUser';
import CustomHeader from './components/CustomHeader';
import ReviewsPage from './pages/ReviewsPage';
import ReviewDetail from './pages/ReviewDetail';
import CreateReview from './pages/CreateReview';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <CustomHeader title='Gusto' />,
      }}
    >
      <Stack.Screen
        name='LoginUser'
        component={LoginUser}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='ReviewsPage' component={ReviewsPage} />
      <Stack.Screen name='ReviewDetail' component={ReviewDetail} />
      <Stack.Screen name='CreateReview' component={CreateReview} />

    </Stack.Navigator>
  );
}

export default Router;
