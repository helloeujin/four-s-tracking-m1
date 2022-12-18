import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

const TicklesView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 8px;
`;
const Tickle = styled.TouchableOpacity`
  width: 38px;
  height: 38px;
  border-radius: 38px;
`;

const Tickles = ({ dates, data, updateProjectData }) => {
  // Colors update
  const getColor = (date) => {
    const weekData = data.data;
    const thisDate = date.dateFull;
    const item = weekData.filter((d) => d.date === thisDate)[0];
    const completed = item ? item.complete : false;

    return completed ? "#288E3F" : "#f2f2f2";
  };

  // Data update
  const getData = (date) => {
    const newData = data;
    const weekData = newData.data;
    const thisDate = date.dateFull;

    const item = weekData.filter((d) => d.date === thisDate)[0];
    if (item) {
      item.complete = !item.complete;
    } else {
      const obj = {
        date: thisDate,
        complete: true,
      };
      newData.data.push(obj);
    }
    // setUpdatedData(newData);
    // setUpdatedData(null);
    updateProjectData(newData.name, newData);
    // setProjectData(null);
  };

  // Rendering
  return (
    <TicklesView>
      {dates.map((date, i) => {
        return (
          <Tickle
            key={"t" + i}
            style={{ backgroundColor: getColor(date) }}
            onPress={() => getData(date)}
          />
        );
      })}
    </TicklesView>
  );
};

export default Tickles;
