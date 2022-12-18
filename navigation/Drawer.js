import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import Profile from "../screens/Profile";
import Tabs from "./Tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { Text } from "react-native";
import styled from "styled-components";

const ProfileContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const ProfileName = styled.Text`
  font-size: 19px;
  margin-left: 14px;
  font-weight: normal;
  width: 100%;
`;
const ProfileNameBold = styled.Text`
  font-weight: bold;
`;
const ProfileImg = styled.Image`
  width: 80px;
  height: 80px;
`;

const DrawerNav = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label=""
        onPress={() => alert("Link to help")}
        icon={({}) => (
          <ProfileContainer>
            <ProfileImg source={require("../img/profile-img.png")} />
            <ProfileName>
              Hello, <ProfileNameBold>Mike!</ProfileNameBold>
            </ProfileName>
            {/* <MaterialIcons
              name="face"
              size={60}
              color="#999"
              style={{ borderColor: "blue" }}
            /> */}
          </ProfileContainer>
        )}
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
        drawerStyle: {
          backgroundColor: "white",
          // width: "100%",
        },
        // contentOptions: {
        //   activeTintColor: "#333",
        // },
        // activeTintColor: "#333",
        // drawerActiveTintColor: "#333",
        // activeBackgroundColor: "#333",
        // drawerInactiveTintColor: "#333",
        // inactiveBackgroundColor: "#fff",
      }}
    >
      <DrawerNav.Screen
        name="Home"
        component={Tabs}
        options={{
          drawerLabel: "My Routine",
          drawerActiveTintColor: "white",
          drawerActiveBackgroundColor: "#333",
        }}
      />
    </DrawerNav.Navigator>
  );
};

export default Drawer;
