import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { variables } from '@styles/base/variables';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import ProfileStack from '@stacks/profile.stack';
import ProgressScreen from '@screens/Progress/Progress';
import HomeStack from '@stacks/home.stack';

const Tab = createBottomTabNavigator();

function MainScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: variables.colors.primary,
        },
      }}
      initialRouteName="home"
    >
      <Tab.Screen
        name="progress"
        component={ProgressScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="progress-star"
              size={30}
              color={focused ? variables.colors.tertiary : variables.colors.tabIconColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home-outline"
              size={30}
              color={focused ? variables.colors.tertiary : variables.colors.tabIconColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="account-outline"
              size={30}
              color={focused ? variables.colors.tertiary : variables.colors.tabIconColor}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainScreen;
