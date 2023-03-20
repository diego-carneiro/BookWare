// :::::::::: Tools ::::::::::
import * as React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// :::::::::: Material Parts ::::::::::
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import CompareArrowsRoundedIcon from "@mui/icons-material/CompareArrowsRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

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

  return (
    <Container>
      <Button type="submit" onClick={navigateToUsers}>
        <PersonRoundedIcon />
      </Button>
      <Button type="submit" onClick={navigateToBooks}>
        <AutoStoriesRoundedIcon />
      </Button>
      <Button type="submit" onClick={navigateToLoans}>
        <CompareArrowsRoundedIcon />
      </Button>
      {/* <Button type="submit">
        <AutoStoriesRoundedIcon />
      </Button>
      <Button type="submit">
        <AutoStoriesRoundedIcon />
      </Button> */}
    </Container>
  );
}

// ::::::::::Styled-Components::::::::::
const Container = styled.div`
  width: 400px;
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
