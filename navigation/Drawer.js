import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Profile from "../screens/Profile";
import Tabs from "./Tabs";

const DrawerNav = createDrawerNavigator();

const Drawer = () => {
  return (
    <DrawerNav.Navigator
      initialRouteName="Profile"
      useLegacyImplementation={true}
      screenOptions={{
        headerShown: false,
      }}
    >
      <DrawerNav.Screen
        name="Home"
        component={Tabs}
        options={{ drawerLabel: "My Routine" }}
      />
    </DrawerNav.Navigator>
  );
};

export default Drawer;
