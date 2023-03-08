// :::::::::: Tools ::::::::::
import React from "react";
import styled from "styled-components";

// :::::::::: Components ::::::::::
import ScheduleCard from "./ScheduleCard";

export default function ScheduleInterval({ info, index }) {
  return (
    <Container>
      {info && <ScheduleCard info={info} index={index}/>}
    </Container>
  );
}
// ::::::::::Styled-Components::::::::::
const Container = styled.div`
  width: 200px;
  height: 35px;
  margin: 0px 30px 2px 20px;

  background-color: #fff;
  border-style: solid;
  border-width: 1px;
  border-color: #9e9e9e;
  border-radius: 5px;
  position: relative;

  display: flex;
  flex-direction: column;
`;
