import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditProfileScreen from '@screens/EditProfile/EditProfile';
import ChangePasswordScreen from '@screens/ChangePassword/ChangePassword';
import ProfileScreen from '@screens/Profile/Profile';

const Stack = createNativeStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator initialRouteName="main" screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen options={{ headerShown: false }} name="main" component={ProfileScreen} />
      <Stack.Screen options={{ title: 'General' }} name="edit" component={EditProfileScreen} />
      <Stack.Screen options={{ title: 'Password' }} name="changePassword" component={ChangePasswordScreen} />
    </Stack.Navigator>
  );
}

export default ProfileStack;
