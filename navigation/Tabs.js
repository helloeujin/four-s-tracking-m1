import React, { useCallback } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Share from "../screens/Share";
import Stat from "../screens/Stat";
import { useNavigation, DrawerActions } from "@react-navigation/native";
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
  const navigation = useNavigation();

  const goToProfile = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const goToAdd = () => {
    alert("pressed");
    // navigation.navigate("Stack", {
    //   screen: "Profile",
    //   // params: {
    //   //   ...fullData,
    //   // },
    // });
  };

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
          headerShadowVisible: false,
          headerRight: () => (
            <AddBttn onPress={goToAdd}>
              <Ionicons name="md-add-outline" size={22} color="black" />
            </AddBttn>
          ),
          headerLeft: () => (
            <BurgerBttn onPress={goToProfile}>
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
