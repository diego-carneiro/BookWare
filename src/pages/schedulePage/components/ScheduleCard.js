// :::::::::: Tools ::::::::::
import React, { useEffect, useState } from "react";
import styled from "styled-components";

// :::::::::: Components ::::::::::

export default function ScheduleCard({ info, index }) {
  const endCalc = () => {
      const start = info.commitmentStart.split(":");
      const end = info.commitmentEnd.split(":");
      const blocks =
        parseInt(end[0]) * 60 +
        parseInt(end[1]) -
        (parseInt(start[0]) * 60 + parseInt(start[1]));
      const cardIntervals = Math.floor((37/15)*(blocks));
      const cardHeight = cardIntervals.toString() + "px";

      return cardHeight;
  };
  const startCalc = () =>{
    const start = info.commitmentStart.split(":");
    const startDesloc = start[1]%15;
    return Math.floor((37/15)*(startDesloc-1)).toString() + "px";
  }
  return <Container height={endCalc()} top={startCalc()}></Container>;
}
// ::::::::::Styled-Components::::::::::
const Container = styled.div`
  top: ${(props) => (props.top ? props.top : "0px")};
  width: 100%;
  height: ${(props) => (props.height ? props.height : "0px")};
  background-color: #4285f4;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  position: absolute;
  z-index: 5;
`;
