// :::::::::: Tools ::::::::::
import * as React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// :::::::::: Material Parts ::::::::::
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

// :::::::::: Components ::::::::::
import SideBar from "../../globalComponents/SideBar";

export default function UsersPage() {
  const navigate = useNavigate();

  const navigateToRegister = () => {
    return navigate("/cadastroDeLivro");
  };

  return (
    <Container>
      <SideBar />
      <Content>
USUARIOS
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
const Button = styled.button`
  width: 40px;
  height: 40px;
  margin-top: 24px;
  background-color: #378805;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
`;

