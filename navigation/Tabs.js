import React, { useCallback, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Share from "../screens/Share";
import Stat from "../screens/Stat";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { Feather, Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import Modal from "react-native-modal";
import { View } from "react-native";
import Addtask from "../screens/Addtask";

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

  const [isModalVisible, setModalVisible] = useState(false);

  const goToProfile = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  // const goToAdd = (e) => {
  //   navigation.navigate("Stack", {
  //     screen: "Profile",
  //   });
  // };

  const toggleModal = () => {
    // show transparent modal
    setModalVisible(!isModalVisible);
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
          // headerShown: false,
          headerShadowVisible: false,
          headerRight: () => (
            <View>
              {/* Toggle Modal */}
              <AddBttn onPress={(e) => toggleModal(e)}>
                <Ionicons name="md-add-outline" size={24} color="black" />
              </AddBttn>

              {/* Modal Contents */}
              <Modal
                isVisible={isModalVisible}
                backdropColor={"white"}
                backdropOpacity={0.94}
                onBackdropPress={() => setModalVisible(false)}
                animationIn={"slideInDown"}
                animationOut={"fadeOut"}
                animationInTiming={300}
                animationOutTiming={10}
              >
                <Addtask toggleModal={toggleModal} />
              </Modal>
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
