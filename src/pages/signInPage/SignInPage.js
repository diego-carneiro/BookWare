// :::::::::: Tools ::::::::::
import * as React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// :::::::::: Material Parts ::::::::::
import { Paper } from "@mui/material";
import { Box } from "@mui/system";

export default function SignInPage() {
  const initialValue = {
    email: "",
    password: "",
  };

  function onChange(ev) {
    const { name, value } = ev.target;

    setInput({ ...input, [name]: value });
  }

  const [input, setInput] = useState(initialValue);

  const navigate = useNavigate();

  const bookwareADM = {
    email: "bookwareADM@bookware.com",
    password: "adm123",
  };

  const handleNavigation = () => {
    if (
      input.email === bookwareADM.email &&
      input.password === bookwareADM.password
    ) {
      return navigate("/inicio");
    }
  };

  function onSubmit(ev) {
    ev.preventDefault();

    handleNavigation();
  }

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 428,
            height: 728,
          },
        }}
      >
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h1>Login</h1>
          <Logo src="./bookware.png" />
          <Form onSubmit={onSubmit}>
            <Input
              placeholder="E-mail"
              type="email"
              name="email"
              onChange={onChange}
            />
            <Input
              placeholder="Senha"
              type="password"
              name="password"
              onChange={onChange}
            />
            <Button type="submit">ENTRAR</Button>
          </Form>
        </Paper>
      </Box>
    </Container>
  );
}

// ::::::::::Styled-Components::::::::::
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #e5e5e5;

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    text-align: center;
    margin-top: 60px;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Input = styled.input`
  width: 350px;
  height: 52px;
  border-radius: 8px;
  margin-top: 16px;
  padding-left: 14px;
  font-size: 14px;
  color: #7e7e7e;
`;
const Button = styled.button`
  width: 350px;
  height: 52px;
  margin: 24px 0px 80px 0px;
  background-color: #000028;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
`;
const Logo = styled.img`
  width: 200px;
  height: 150px;
  margin-top: 40px;
`;
