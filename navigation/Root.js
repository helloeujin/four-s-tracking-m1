import React from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import Stack from "./Stack";
import Drawer from "./Drawer";

const Nav = createStackNavigator();

const Root = () => (
  <Nav.Navigator
    initialRouteName="Drawer"
    useLegacyImplementation={true}
    screenOptions={{
      headerShown: false,
    }}
  >
    {/* STACK */}
    <Nav.Group
      screenOptions={{
        presentation: "modal",
      }}
    >
      <Nav.Screen name="Stack" component={Stack} />
    </Nav.Group>

    {/* DRAWER (TAB inside) */}
    <Nav.Screen name="Drawer" component={Drawer} />
  </Nav.Navigator>
);

export default Root;
