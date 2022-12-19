import React, { useEffect, useCallback, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Share from "../screens/Share";
import Stat from "../screens/Stat";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { Feather, Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { View } from "react-native";

const AddBttn = styled.TouchableOpacity`
  padding-right: 15px;
`;
const BurgerBttn = styled.TouchableOpacity`
  padding-left: 15px;
`;
const Tab = createBottomTabNavigator();

/////////////
const Tabs = () => {
  const navigation = useNavigation();

  const goToProfile = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  /////////////
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#111",
        tabBarInactiveTintColor: "#bbb",
      }}
    >
      <Tab.Screen
        name="My Routine"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          headerShadowVisible: false,
          headerRight: () => (
            <View>
              <AddBttn title="add task">
                <Ionicons name="md-add-outline" size={24} color="black" />
              </AddBttn>
            </View>
          ),
          headerLeft: () => (
            <BurgerBttn onPress={goToProfile}>
              <Ionicons name="menu-outline" size={24} color="black" />
            </BurgerBttn>
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Stat"
        component={Stat}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="md-stats-chart" color={color} size={size} />
          ),
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
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
