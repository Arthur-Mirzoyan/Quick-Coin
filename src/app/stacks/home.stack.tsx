import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@screens/Home/Home';
import PrizeListScreen from '@screens/Home/PrizeList/PrizeList';
import BackButton from '@components/BackButton/BackButton';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="main"
      screenOptions={{ headerTitleAlign: 'center', headerLeft: () => <BackButton /> }}
    >
      <Stack.Screen options={{ headerShown: false }} name="main" component={HomeScreen} />
      <Stack.Screen name="list" component={PrizeListScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack;
