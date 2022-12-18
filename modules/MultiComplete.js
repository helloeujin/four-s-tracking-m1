import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { styleProps } from "react-native-web/dist/cjs/modules/forwardedProps";

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const BtnBox = styled.View`
  flex: 0.7;
  flex-direction: row;
  justify-content: space-between;
`;
const CancelBtn = styled.TouchableOpacity`
  width: 80px;
  height: 100%;
  justify-content: flex-end;
  align-items: flex-end;
`;
const CancelTxt = styled.Text`
  color: #aaa;
  font-size: 15px;
`;
const CreateBtn = styled.TouchableOpacity`
  width: 80px;
  height: 100%;
  justify-content: flex-end;
  align-items: flex-start;
`;
const CreateTxt = styled.Text`
  align-items: center;
  font-weight: bold;
  font-size: 15px;
`;

const EditTitle = styled.View`
  flex: 1.5;
  border-bottom-color: #efefef;
  border-bottom-width: 1px;
  justify-content: flex-end;
`;
const Title = styled.Text``;

const EditDesc = styled.View`
  flex: 1;
  border-bottom-color: #efefef;
  border-bottom-width: 1px;
`;

const SettingBox = styled.Text`
  flex: 6;
  font-size: 30px;
`;

const MultiComplete = ({ toggleModal }) => {
  return (
    <Container>
      <BtnBox>
        <CancelBtn>
          <CancelTxt>Cancel</CancelTxt>
        </CancelBtn>

        <CreateBtn>
          <CreateTxt>Create</CreateTxt>
        </CreateBtn>
      </BtnBox>

      <EditTitle>
        <Title>Untitled</Title>
      </EditTitle>

      <EditDesc></EditDesc>

      <SettingBox></SettingBox>
    </Container>
  );
};

export default MultiComplete;
