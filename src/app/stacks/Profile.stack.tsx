import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Screens
import EditProfileScreen from '@screens/EditProfile/EditProfile';
import ChangePasswordScreen from '@screens/ChangePassword/ChangePassword';
import ProfileScreen from '@screens/Profile/Profile';

const Stack = createNativeStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator initialRouteName="main" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="main" component={ProfileScreen} />
      <Stack.Screen name="edit" component={EditProfileScreen} />
      <Stack.Screen name="changePassword" component={ChangePasswordScreen} />
    </Stack.Navigator>
  );
}

export default ProfileStack;
