// :::::::::: Tools ::::::::::
import * as React from "react";
import styled from "styled-components";

// :::::::::: Material Parts ::::::::::

// :::::::::: Components ::::::::::
import SideBar from "../../globalComponents/SideBar";

export default function LoansPage() {
  return (
    <Container>
      <SideBar />
      <Content>
        <h1>LOANS</h1>
      </Content>
    </Container>
  );
}

// ::::::::::Styled-Components::::::::::
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #e5e5e5;

  display: flex;
  align-items: center;

  h1 {
    font-size: 50px;
    color: #000028;
    text-align: center;
  }
`;
const Content = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #e5e5e5;

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 50px;
    color: #000028;
    text-align: center;
  }
`;
