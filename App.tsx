import React from 'react';
import { StyleSheet, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { variables } from '@styles/base/variables';
//Screens
import OnboardingScreen from '@src/app/screens/Onboarding/Onboarding';
import SignInScreen from '@screens/SignIn/SignIn';
import SignUpScreen from '@screens/SignUp/SignUp';
import MainScreen from '@screens/MainScreen/MainScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.main} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <NavigationContainer>
        <StatusBar />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="onboarding" component={OnboardingScreen} />
          <Stack.Screen name="signin" component={SignInScreen} />
          <Stack.Screen name="signup" component={SignUpScreen} />
          <Stack.Screen name="main" component={MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    backgroundColor: variables.colors.bg,
  },
});
