import React from "react";
import { View, Text, Button } from "react-native";
import styled from "styled-components/native";
import { Feather, Ionicons } from "@expo/vector-icons";

const Container = styled.View`
  margin-top: 30px;
  flex: 1;
  justify-content: flex-start;
  align-items: flex-end;
`;

const Btnbox = styled.View`
  text-align: right;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 22px;
`;
const Addbtn = styled.TouchableOpacity`
  width: 43px;
  height: 43px;
  border-radius: 43px;
  background-color: #288e3f;
  box-shadow: 1px 1px 5px #154a21;
`;
const Addtxt = styled.Text`
  font-size: 15.3px;
  margin-right: 16px;
  line-height: 42px;
  font-weight: 500;
`;

const Gobackbtn = styled.TouchableOpacity`
  width: 43px;
  height: 43px;
  border-radius: 43px;
  background-color: #ffffff;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.6);
  margin-bottom: 22px;
  justify-content: center;
  align-items: center;
  padding: 0px;
  padding-left: 3px;
  padding-top: 2px;
`;

const Addtask = ({ toggleModal }) => {
  return (
    <Container>
      <Gobackbtn onPress={toggleModal}>
        <Ionicons name="close-sharp" color={"black"} size={22} />
      </Gobackbtn>

      <Btnbox>
        <Addtxt>Multi-time complete</Addtxt>
        <Addbtn />
      </Btnbox>

      <Btnbox>
        <Addtxt>Number tracking</Addtxt>
        <Addbtn />
      </Btnbox>

      <Btnbox>
        <Addtxt>Time tracking</Addtxt>
        <Addbtn />
      </Btnbox>

      <Btnbox>
        <Addtxt>Text tracking</Addtxt>
        <Addbtn></Addbtn>
      </Btnbox>
    </Container>
  );
};

export default Addtask;
