import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components/native";
import Swiper from "react-native-swiper";
import Eachweek from "../components/Eachweek";
import Ticklesbox from "../components/Ticklesbox";
import { getDates, getSlideIndex } from "../functions/datafn";
import AsyncStorage from "@react-native-async-storage/async-storage";

// const testData = require("../data/test.json");
// const numDataArray = [...Array(8).keys()]; // for testing
const testData2 = require("../data/test2.json");
const numWeeks = 4;
const numWeeksArray = [...Array(numWeeks).keys()];

const Container = styled.View`
  flex: 1;
  background-color: white;
`;
const WeekContainer = styled.View`
  flex: 1.9;
  margin-top: 30px;
`;
const TicklesContainer = styled.ScrollView`
  flex: 9;
`;

/////////// HOME ///////////
const Home = () => {
  const weekData = getDates(numWeeks);
  const oldIndex = useRef(numWeeks - 1);
  const tickleSwipersRef = useRef([]);
  const [projectData, setProjectData] = useState(null);
  const [loadedData, setLoadedData] = useState(null);

  // updateProjectData
  const updateProjectData = (taskName, newData) => {
    const newProjectData = projectData;
    newProjectData[taskName] = newData;
    setProjectData([...newProjectData]);
    // saveData(newProjectData);
    saveData([...newProjectData]);
  };

  // Working with Local Storage
  const STORAGE_KEY = "@my_routine";

  const saveData = async (toSave) => {
    console.log(toSave);
    try {
      // https://react-native-async-storage.github.io/async-storage/docs/usage/
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    } catch (e) {
      // saving error
    }
  };
  const loadData = async () => {
    const s = await AsyncStorage.getItem(STORAGE_KEY);
    // setLoadedData(JSON.parse(s));
    setProjectData(JSON.parse(s));
  };

  // Initialization
  useEffect(() => {
    // load data from local storage
    loadData();
  }, []);

  // Redering
  return (
    <Container>
      {/* DATES */}
      <WeekContainer>
        <Swiper
          index={numWeeks - 1}
          horizontal
          containerStyle={{
            width: "100%",
            height: "100%",
            marginBottom: 30,
          }}
          loop={false}
          showsButtons={false}
          showsPagination={false}
          slidesPerView={1}
          onIndexChanged={(index) => {
            const relativeIndex = getSlideIndex(index, oldIndex.current);
            projectData.map((_, i) => {
              tickleSwipersRef.current[i].scrollBy(relativeIndex, true);
            });
            oldIndex.current = index;
          }}
        >
          {numWeeksArray.map((_, i) => {
            return (
              <Eachweek
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
            />
          );
        })}
      </TicklesContainer>
    </Container>
  );
};

export default Home;
