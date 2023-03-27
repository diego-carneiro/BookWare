// :::::::::: Tools ::::::::::
import * as React from "react";
import styled from "styled-components";

// :::::::::: Material Parts ::::::::::

// :::::::::: Components ::::::::::
import SideBar from "../../globalComponents/SideBar";

export default function MainPage() {
  return (
    <Container>
      <SideBar />
      <Content>
        <h1>BOOKWARE</h1>
        <h2>Contato:</h2>
        <h2>bookwareadm@gmail.com</h2>
        <h2>35999999999</h2>
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
  h2{
    font-size: 12px;
  }
`;
const Content = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #e5e5e5;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 50px;
    color: #000028;
    text-align: center;
  }
`;
