import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const Container = styled.View`
  margin-top: 30px;
  flex: 1;
  justify-content: flex-start;
  align-items: flex-end;
`;

const TaskTitle = styled.Text`
  font-size: 30px;
`;

const MultiComplete = ({ toggleModal }) => {
  return (
    <Container>
      <TaskTitle>Multi Complete</TaskTitle>
    </Container>
  );
};

export default MultiComplete;
