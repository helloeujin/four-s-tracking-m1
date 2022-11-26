import React from "react";
import styled from "styled-components/native";

const TicklesView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 8px;
`;
const Tickle = styled.View`
  width: 43px;
  height: 43px;
  border-radius: 43px;
`;

const Tickles = ({ dates, data }) => {
  const getColor = (date) => {
    const weekData = data.data;
    const thisDate = date.dateFull;

    const item = weekData.filter((d) => d.date === thisDate)[0];
    const completed = item ? item.complete : false;

    return completed ? "#288E3F" : "#f4f4f4";
  };

  return (
    <TicklesView>
      {dates.map((date, i) => {
        return (
          <Tickle key={"t" + i} style={{ backgroundColor: getColor(date) }} />
        );
      })}
    </TicklesView>
  );
};

export default Tickles;
