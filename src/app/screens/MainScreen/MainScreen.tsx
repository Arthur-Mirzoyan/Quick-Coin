import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { variables } from '@styles/base/variables';
// Icons
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// Screens
import MyBalanceScreen from '@screens/MyBalance/MyBalance';
// Stacks
import ProfileStack from '@stacks/Profile.stack';

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
    >
      <Tab.Screen
        name="myBalance"
        component={MyBalanceScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="pie-chart"
              size={30}
              color={focused ? variables.colors.tertiary : variables.colors.tabIconColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="home"
        component={MyBalanceScreen}
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
