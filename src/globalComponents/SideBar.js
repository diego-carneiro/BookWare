// :::::::::: Tools ::::::::::
import * as React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// :::::::::: Material Parts ::::::::::
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import CompareArrowsRoundedIcon from "@mui/icons-material/CompareArrowsRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';

export default function SideBar() {
  const navigate = useNavigate();

  const navigateToUsers = () => {
    return navigate("/usuarios");
  };

  const navigateToBooks = () => {
    return navigate("/livros");
  };

  const navigateToLoans = () => {
    return navigate("/emprestimos");
  };

  const navigateToMain = () => {
    return navigate("/inicio");
  };

  const navigateToLogout = () => {
    return navigate("/");
  };

  return (
    <Container>
      <Button type="submit" onClick={navigateToMain}>
        <MenuRoundedIcon />
      </Button>
      <Button type="submit" onClick={navigateToUsers}>
        <PersonRoundedIcon />
      </Button>
      <Button type="submit" onClick={navigateToBooks}>
        <AutoStoriesRoundedIcon />
      </Button>
      <Button type="submit" onClick={navigateToLoans}>
        <CompareArrowsRoundedIcon />
      </Button>
      <Button type="submit" onClick={navigateToLogout}>
        <ExitToAppRoundedIcon />
      </Button>
    </Container>
  );
}

// ::::::::::Styled-Components::::::::::
const Container = styled.div`
  width: 100px;
  min-height: 100vh;
  background-color: #000028;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: #000028;
    text-align: center;
  }
`;
const Button = styled.button`
  width: 90%;
  height: 52px;
  margin-top: 24px;
  background-color: #77c3ec;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
`;
