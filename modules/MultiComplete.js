import React from "react";
import styled from "styled-components/native";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { colorList } from "../functions/datafn";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Container = styled.View`
  flex: 1;
  background-color: white;
  justify-content: flex-start;
`;
const LeftCol = styled.View`
  flex: 1.7;
  align-items: flex-end;
  justify-content: flex-end;
  margin-left: auto;
`;
const RightCol = styled.View`
  flex: 8;
  padding-left: 6%;
`;

// Top Btn
const BtnBox = styled.View`
  height: 50px;
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
  font-size: 14px;
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
  font-size: 14px;
`;

// Title
const EditTitle = styled.View`
  height: 90px;
  flex-direction: row;
  border-bottom-color: #f1f1f1;
  border-bottom-width: 1px;
  justify-content: flex-end;
  align-items: flex-end;
`;
const Title = styled.TextInput`
  padding-bottom: 4px;
  font-size: 32px;
`;

// Settings
const CompleteIcon = styled.View`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  background-color: ${colorList.green};
`;

// Desc
const EditDesc = styled.View`
  height: 60px;
  border-bottom-color: #f1f1f1;
  border-bottom-width: 1px;
  flex-direction: row;
  align-items: center;
`;
const Desc = styled.TextInput`
  font-size: 16px;
`;

const Txt = styled.Text``;

// MultiComplete
const MultiComplete = ({ route, navigation }) => {
  // const navigation = useNavigation();
  console.log(route.params.projectData);

  const [editingTitle, setEditingTitle] = useState();
  const [editingDesc, setEditingDesc] = useState();

  const onChangeEditingTitle = (payload) => setEditingTitle(payload);
  const onChangeEditingDesc = (payload) => setEditingDesc(payload);

  const goBack = () => {
    navigation.goBack();
  };

  const createTask = () => {
    console.log("new task");
  };

  // Return
  return (
    <Container>
      <BtnBox>
        <CancelBtn onPress={goBack}>
          <CancelTxt>Cancel</CancelTxt>
        </CancelBtn>
        <CreateBtn onPress={createTask}>
          <CreateTxt>Create</CreateTxt>
        </CreateBtn>
      </BtnBox>

      <EditTitle>
        <LeftCol />
        <RightCol>
          <Title
            returnKeyType="done"
            onSubmitEditing={() => console.log("submitted")}
            onChangeText={onChangeEditingTitle}
            value={editingTitle}
            placeholder={"Untitled"}
            autoComplete="off"
            autoCorrect={false}
          />
        </RightCol>
      </EditTitle>

      <EditDesc>
        <LeftCol>
          <MaterialCommunityIcons name="text" size={20} color="black" />
        </LeftCol>
        <RightCol>
          <Desc
            returnKeyType="done"
            onSubmitEditing={() => console.log("submitted")}
            onChangeText={onChangeEditingDesc}
            value={editingDesc}
            placeholder={"Add details"}
            autoComplete="off"
            autoCorrect={false}
          />
        </RightCol>
      </EditDesc>

      <EditDesc style={{ borderBottomColor: "white" }}>
        <LeftCol>
          <Feather name="check-circle" size={20} color="black" />
        </LeftCol>
        <RightCol>
          <CompleteIcon />
        </RightCol>
      </EditDesc>

      <EditDesc style={{ borderBottomColor: "white" }}>
        <LeftCol>
          <Ionicons name="repeat" size={23} color="black" />
        </LeftCol>
        <RightCol>
          <Txt>Once a day</Txt>
        </RightCol>
      </EditDesc>
    </Container>
  );
};

export default MultiComplete;
