import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdminScreen from '@screens/Profile/Admin/Admin';
import QuizScreen from '@screens/Profile/Admin/Quiz/Quiz';
import GiftScreen from '@screens/Profile/Admin/Gift/Gift';

const Stack = createNativeStackNavigator();

function AdminStack() {
  return (
    <Stack.Navigator initialRouteName="main" screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen options={{ title: 'Ադմին' }} name="main" component={AdminScreen} />
      <Stack.Screen options={{ title: 'Թեստ' }} name="quiz" component={QuizScreen} />
      <Stack.Screen options={{ title: 'Մրցանակ' }} name="gift" component={GiftScreen} />
    </Stack.Navigator>
  );
}

export default AdminStack;
