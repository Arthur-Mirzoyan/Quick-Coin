import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BackButton from '@components/BackButton/BackButton';
import HomeScreen from '@screens/Home/Home';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="main"
      screenOptions={{ headerTitleAlign: 'center', headerLeft: () => <BackButton /> }}
    >
      <Stack.Screen options={{ headerShown: false }} name="main" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack;
