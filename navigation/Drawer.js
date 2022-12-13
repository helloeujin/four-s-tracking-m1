import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import Profile from "../screens/Profile";
import Tabs from "./Tabs";
import { Text } from "react-native";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";

const DrawerNav = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label=""
        onPress={() => alert("Link to help")}
        icon={({}) => <MaterialIcons name="face" size={83} color="#999" />}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const Drawer = () => {
  return (
    <DrawerNav.Navigator
      initialRouteName="Profile"
      useLegacyImplementation={true}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
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
