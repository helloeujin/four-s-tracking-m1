import React, { useCallback } from "react";
import { View, Text, useColorScheme } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Share from "../screens/Share";
import Stat from "../screens/Stat";

import { Feather, Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Stat"
        component={Stat}
        options={{
          // tabBarBadge: 3,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="md-stats-chart" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Share"
        component={Share}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="md-people-outline" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
