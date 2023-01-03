import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components/native";
import Swiper from "react-native-swiper";
import EachWeek from "../components/EachWeek";
import Ticklesbox from "../components/Ticklesbox";
import { getDates, getSlideIndex, saveData } from "../functions/datafn";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import Modal from "react-native-modal";
import Addtask from "../screens/Addtask";
import { useIsFocused } from "@react-navigation/native";

// project data
const testData2 = require("../data/test3.json");
const numWeeks = 4;
const numWeeksArray = [...Array(numWeeks).keys()];

const Container = styled.View`
  padding-top: 12px;
  flex: 1;
  background-color: white;
`;
const WeekContainer = styled.View`
  flex: 1.3;
  padding-bottom: 7px;
  border-bottom-color: #efefef;
  border-bottom-width: 1px;
`;
const TicklesContainer = styled.ScrollView`
  flex: 9;
  padding-top: 25px;
`;
const AddBttn = styled.TouchableOpacity`
  padding-right: 15px;
`;

/////////// HOME ///////////
const Home = ({ navigation, route }) => {
  const weekData = getDates(numWeeks);
  const oldIndex = useRef(numWeeks - 1);
  const tickleSwipersRef = useRef([]);
  const isFocused = useIsFocused();

  /// transparent modal
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // update project data
  const [projectData, setProjectData] = useState(null);
  const updateProjectData = (taskName, newData) => {
    const newProjectData = projectData;
    newProjectData[taskName] = newData;
    setProjectData([...newProjectData]);
    saveData([...newProjectData]);
  };

  // Working with Local Storage
  const STORAGE_KEY = "@my_routine";
  const loadData = async () => {
    // await AsyncStorage.clear(); //reset storage -> throw error
    // await AsyncStorage.getAllKeys().then(AsyncStorage.multiRemove); //reset storage -> working
    const storedData = await AsyncStorage.getItem(STORAGE_KEY);
    if (storedData) {
      setProjectData(JSON.parse(storedData));
    } else {
      setProjectData(testData2);
    }
  };

  // init > load data from local storage
  useEffect(() => {
    loadData();
  }, []);

  // check if this nav is focused
  useEffect(() => {
    loadData();
  }, [isFocused]);

  // useEffect(() => {
  //   console.log("...");
  //   console.log(projectData);
  // }, [projectData]);

  // get HeaderRight Event from tab (to show transparent modal)
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View>
          <AddBttn onPress={toggleModal}>
            <Ionicons name="md-add-outline" size={24} color="black" />
          </AddBttn>
        </View>
      ),
    });
  }, [navigation]);

  //// RENDERING
  return (
    <Container>
      {/* WEEKLY DATES */}
      <WeekContainer>
        <Swiper
          index={numWeeks - 1}
          horizontal
          containerStyle={{
            width: "100%",
            height: "100%",
            marginBottom: 0,
          }}
          loop={false}
          showsButtons={false}
          showsPagination={false}
          slidesPerView={1}
          onIndexChanged={(index) => {
            const relativeIndex = getSlideIndex(index, oldIndex.current);
            projectData?.map((_, i) => {
              tickleSwipersRef.current[i].scrollBy(relativeIndex, true);
            });
            oldIndex.current = index;
          }}
        >
          {numWeeksArray.map((_, i) => {
            return (
              <EachWeek
                key={"week" + i}
                dates={weekData.slice(7 * i, 7 * (i + 1))}
              />
            );
          })}
        </Swiper>
      </WeekContainer>

      {/* TICKLES */}
      <TicklesContainer>
        {projectData?.map((eachData, i) => {
          return (
            <Ticklesbox
              weekData={weekData}
              ticklesData={eachData}
              numWeeks={numWeeks}
              numWeeksArray={numWeeksArray}
              swiper={tickleSwipersRef}
              swiperIndex={i}
              // key={"ticklebox" + i}
              key={Date.now() + i}
              updateProjectData={updateProjectData}
              oldIndex={oldIndex.current}
              navigation={navigation}
              projectData={projectData}
            />
          );
        })}
      </TicklesContainer>

      <View>
        {/* Transparent Modal */}
        <Modal
          isVisible={isModalVisible}
          backdropColor={"white"}
          backdropOpacity={0.94}
          onBackdropPress={() => setModalVisible(false)}
          animationIn={"slideInDown"}
          animationOut={"fadeOut"}
          animationInTiming={320}
          animationOutTiming={10}
        >
          <Addtask
            toggleModal={toggleModal}
            navigation={navigation}
            projectData={projectData}
          />
        </Modal>
      </View>
    </Container>
  );
};

export default Home;
