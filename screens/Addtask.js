import React from "react";
import { View, Text, Button } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Addtask = ({ toggleModal }) => {
  return (
    <Container>
      <Text>Addtask</Text>
      <Button title="Hide modal" onPress={toggleModal} />
    </Container>
  );
};

export default Addtask;
