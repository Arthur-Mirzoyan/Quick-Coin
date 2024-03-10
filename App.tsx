import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '@screens/SignIn/SignIn';
//Screens
import OnboardingScreen from '@src/app/screens/Onboarding/Onboarding';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="onboarding" component={OnboardingScreen} />
        <Stack.Screen name="signin" component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
