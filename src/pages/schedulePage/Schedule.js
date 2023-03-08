// :::::::::: Tools ::::::::::
import React from "react";
import styled from "styled-components";

// :::::::::: Components ::::::::::
import Header from "./components/Header";
import ScheduleWeekGrid from "./components/ScheduleWeekGrid";

export default function Schedule() {
  return (
    <Container>
      <Header />
      <ScheduleWeekGrid />
    </Container>
  );
}
// ::::::::::Styled-Components::::::::::
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #FFF;

  display: flex;
  flex-direction: column;
`;
