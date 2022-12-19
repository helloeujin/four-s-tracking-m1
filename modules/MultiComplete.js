import React from "react";
import styled from "styled-components/native";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { colorList, saveData } from "../functions/datafn";
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
  color: #999;
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

// Delete
const DeleteBtn = styled.TouchableOpacity`
  background-color: #bbb;
  position: absolute;
  bottom: 5%
  width: 84%;
  margin-left: 8%;
  height: 38px;
  border-radius: 8px;
`;
const DeleteTxt = styled.Text`
  color: #fff;
  margin: auto;
  font-size: 15px;
`;

// MultiComplete
const MultiComplete = ({ route, navigation }) => {
  const projectData = route.params.projectData;

  const [oldTaskName, setOldTaskName] = useState(null);
  const [oldDesc, setOldDesc] = useState(null);
  const [taskName, setTaskName] = useState("");
  const [desc, setDesc] = useState("");

  const onChangeEditingTaskName = (payload) => setTaskName(payload);
  const onChangeDesc = (payload) => setDesc(payload);

  const goBack = () => {
    navigation.goBack();
  };

  useState(() => {
    if (route.params.taskName) {
      setOldTaskName(route.params.taskName);
      setTaskName(route.params.taskName);
    }
    if (route.params.desc) {
      setOldDesc(route.params.desc);
      setDesc(route.params.desc);
    }
  }, [navigation]);

  const createTask = () => {
    const obj = {
      project: "My Routine",
      type: "one-time-complete",
      name: taskName,
      desc: desc,
      data: [],
    };
    projectData.push(obj);
    saveData([...projectData]);
    goBack();
  };

  const editTask = () => {
    if (oldTaskName && oldDesc) {
      const newProjectData = [...projectData];
      const objIndex = newProjectData.findIndex(
        (obj) => obj.name == oldTaskName
      );
      newProjectData[objIndex].name = taskName;
      newProjectData[objIndex].desc = desc;
      saveData([...newProjectData]);
      goBack();
    }
  };

  const deleteTask = () => {
    if (oldTaskName && oldDesc) {
      const newProjectData = [...projectData].filter(
        (d) => d.name !== oldTaskName
      );
      saveData([...newProjectData]);
      goBack();
    }
  };

  // Return
  return (
    <Container>
      <BtnBox>
        <CancelBtn onPress={goBack}>
          <CancelTxt>Cancel</CancelTxt>
        </CancelBtn>
        <CreateBtn
          onPress={route.params.label === "Create" ? createTask : editTask}
        >
          <CreateTxt>{route.params.label}</CreateTxt>
        </CreateBtn>
      </BtnBox>

      <EditTitle>
        <LeftCol />
        <RightCol>
          <Title
            returnKeyType="done"
            onSubmitEditing={() => console.log("submitted")}
            onChangeText={onChangeEditingTaskName}
            value={taskName}
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
            onChangeText={onChangeDesc}
            value={desc}
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

      {route.params.label === "Edit" ? (
        <DeleteBtn onPress={deleteTask}>
          <DeleteTxt>Delete</DeleteTxt>
        </DeleteBtn>
      ) : null}
    </Container>
  );
};

export default MultiComplete;
