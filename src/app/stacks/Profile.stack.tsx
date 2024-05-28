import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdminStack from '@stacks/admin.stack';
import EditProfileScreen from '@screens/EditProfile/EditProfile';
import ChangePasswordScreen from '@screens/ChangePassword/ChangePassword';
import ProfileScreen from '@screens/Profile/Profile';
import BackButton from '@components/BackButton/BackButton';

const Stack = createNativeStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="main"
      screenOptions={{ headerTitleAlign: 'center', headerLeft: () => <BackButton /> }}
    >
      <Stack.Screen options={{ headerShown: false }} name="main" component={ProfileScreen} />
      <Stack.Screen options={{ title: 'General' }} name="edit" component={EditProfileScreen} />
      <Stack.Screen options={{ title: 'Password' }} name="changePassword" component={ChangePasswordScreen} />
      <Stack.Screen options={{ headerShown: false }} name="admin" component={AdminStack} />
    </Stack.Navigator>
  );
}

export default ProfileStack;
