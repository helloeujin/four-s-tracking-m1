import React, { useCallback } from "react";
import {
  View,
  Text,
  useColorScheme,
  Button,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Share from "../screens/Share";
import Stat from "../screens/Stat";

import { Feather, Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";

const AddBttn = styled.TouchableOpacity`
  padding-right: 15px;
`;

const BurgerBttn = styled.TouchableOpacity`
  padding-left: 15px;
`;

const Tab = createBottomTabNavigator();

/////////////
const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="My Routine"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          // headerShown: false,
          headerStyle: {
            // backgroundColor: "#f4511e",
            // height: 78,
          },
          headerShadowVisible: false,
          headerTitleStyle: {
            // fontWeight: "bold",
            // fontSize: 40,
          },
          headerRight: () => (
            <AddBttn onPress={() => alert("pressed")}>
              <Ionicons name="md-add-outline" size={22} color="black" />
            </AddBttn>
          ),
          headerLeft: () => (
            <BurgerBttn onPress={() => alert("pressed")}>
              <Ionicons name="menu-outline" size={22} color="black" />
            </BurgerBttn>
          ),
          tabBarShowLabel: false,
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
          headerStyle: {
            // backgroundColor: "#f4511e",
            // height: 78,
          },
          // headerShown: false,
          tabBarShowLabel: false,
        }}
      />

      <Tab.Screen
        name="Share"
        component={Share}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="md-people-outline" color={color} size={size} />
          ),
          headerStyle: {
            // backgroundColor: "#f4511e",
            // height: 78,
          },
          // headerShown: false,
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
