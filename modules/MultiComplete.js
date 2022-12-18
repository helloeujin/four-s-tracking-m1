import React from "react";
import styled from "styled-components/native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

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
  border-bottom-color: #f1f1f1;
  border-bottom-width: 1px;
  justify-content: flex-end;
  align-items: flex-end;
`;
const Title = styled.TextInput`
  width: 100%;
  padding-left: 20%;
  padding-bottom: 4px;
  font-size: 32px;
`;

const EditDesc = styled.View`
  flex: 1;
  border-bottom-color: #f1f1f1;
  border-bottom-width: 1px;
  flex-direction: row;
  align-items: flex-end;
`;
const Desc = styled.TextInput`
  width: 100%;
  padding-left: 20%;
  padding-bottom: 4px;
  font-size: 16px;
`;

const SettingBox = styled.Text`
  flex: 6;
  font-size: 30px;
`;

const MultiComplete = ({}) => {
  const navigation = useNavigation();

  const [editingTitle, setEditingTitle] = useState();
  const [editingDesc, setEditingDesc] = useState();
  const onChangeEditingText = (payload) => setEditingTitle(payload);

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <BtnBox>
        <CancelBtn onPress={goBack}>
          <CancelTxt>Cancel</CancelTxt>
        </CancelBtn>

        <CreateBtn>
          <CreateTxt>Create</CreateTxt>
        </CreateBtn>
      </BtnBox>

      <EditTitle>
        <Title
          returnKeyType="done"
          onSubmitEditing={() => console.log("submitted")}
          onChangeText={onChangeEditingText}
          value={editingTitle}
          placeholder={"Untitled"}
        ></Title>
      </EditTitle>

      <EditDesc>
        <MaterialCommunityIcons
          name="text"
          size={20}
          color="black"
          style={{ flex: 1 }}
        />
        <Desc
          returnKeyType="done"
          onSubmitEditing={() => console.log("submitted")}
          onChangeText={onChangeEditingText}
          value={editingDesc}
          placeholder={"Add details"}
        />
      </EditDesc>

      <SettingBox></SettingBox>
    </Container>
  );
};

export default MultiComplete;
