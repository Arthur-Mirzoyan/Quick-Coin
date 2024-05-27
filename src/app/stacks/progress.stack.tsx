import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BackButton from '@components/BackButton/BackButton';
import ProgressScreen from '@screens/Progress/Progress';
import ResultScreen from '@screens/Progress/Quiz/Result/Result';
import QuizScreen from '@screens/Progress/Quiz/Quiz';

const Stack = createNativeStackNavigator();

function ProgressStack() {
  return (
    <Stack.Navigator
      initialRouteName="main"
      screenOptions={{ headerTitleAlign: 'center', headerLeft: () => <BackButton /> }}
    >
      <Stack.Screen options={{ headerShown: false }} name="main" component={ProgressScreen} />
      <Stack.Screen name="quiz" component={QuizScreen} />
      <Stack.Screen name="result" component={ResultScreen} />
    </Stack.Navigator>
  );
}

export default ProgressStack;
