import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '@src/app/screens/Onboarding/Onboarding';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="onboarding" component={OnboardingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
