import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Tabs from "./Tabs";
import Stack from "./Stack";
import Home from "../screens/Home";
import Drawer from "./Drawer";

const Nav = createNativeStackNavigator();

const Root = () => (
  <Nav.Navigator
    initialRouteName="Drawer"
    useLegacyImplementation={true}
    screenOptions={{
      headerShown: false,
      presentation: "modal",
    }}
  >
    <Nav.Screen
      name="Stack"
      component={Stack}
      options={{
        drawerItemStyle: { display: "none" },
      }}
    />
    <Nav.Screen name="Drawer" component={Drawer} />
  </Nav.Navigator>
);

export default Root;
