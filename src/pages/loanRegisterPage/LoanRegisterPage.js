// :::::::::: Tools ::::::::::
import * as React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// :::::::::: Material Parts ::::::::::
import { Paper } from "@mui/material";
import { Box } from "@mui/system";

// :::::::::: Components ::::::::::
import SideBar from "../../globalComponents/SideBar";

export default function LoanRegisterPage() {
  const [loans, setLoans] = useState(() => {
    const localStorageLoans = JSON.parse(localStorage.getItem("loans"));

    if (localStorageLoans) {
      return localStorageLoans;
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("loans", JSON.stringify(loans));
  }, [loans]);

  const initialValue = {
    reader: "",
    book: "",
    initialDate: "",
    endDate: "",
    status: "",
  };

  const [input, setInput] = useState(initialValue);

  function onChange(ev) {
    const { name, value } = ev.target;

    setInput({ ...input, [name]: value });
  }

  const navigate = useNavigate();

  const addLoan = () => {
    setLoans([...loans, input]);
  };

  function onSubmit(ev) {
    ev.preventDefault();

    addLoan();
  }

  return (
    <Container>
      <SideBar />
      <Content>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 528,
              height: 828,
            },
          }}
        >
          <Paper
            elevation={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <h1>Cadastro de Empréstimo</h1>
            <Form onSubmit={onSubmit}>
              <Input
                placeholder="Leitor"
                type="text"
                name="reader"
                onChange={onChange}
              />
              <Input
                placeholder="Livro"
                type="text"
                name="book"
                onChange={onChange}
              />
              <Input
                placeholder="Data de Empréstimo"
                type="text"
                name="initialDate"
                onChange={onChange}
              />
              <Input
                placeholder="Data de Entrega"
                type="text"
                name="endDate"
                onChange={onChange}
              />
              <Input
                placeholder="Status"
                type="text"
                name="status"
                onChange={onChange}
              />
              <Button type="submit">SALVAR</Button>
            </Form>
          </Paper>
        </Box>
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
    margin-top: 30px;
    font-size: 26px;
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
  margin-top: 24px;
  background-color: #000028;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
`;
