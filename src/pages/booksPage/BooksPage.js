// :::::::::: Tools ::::::::::
import * as React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// :::::::::: Material Parts ::::::::::
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { styled as StyledMUI } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// :::::::::: Components ::::::::::
import SideBar from "../../globalComponents/SideBar";

export default function BooksPage() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const localStorageBooks = JSON.parse(localStorage.getItem("books"));

    if (localStorageBooks) {
      setRows(localStorageBooks);
    }
  }, []);

  const navigate = useNavigate();

  const navigateToBookRegister = () => {
    return navigate("/cadastroDeLivro");
  };

  const StyledTableCell = StyledMUI(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = StyledMUI(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <Container>
      <SideBar />
      <Content>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Título</StyledTableCell>
                <StyledTableCell align="right">Gênero</StyledTableCell>
                <StyledTableCell align="right">Autor</StyledTableCell>
                <StyledTableCell align="right">Editora</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
                <StyledTableCell align="right">ISBN</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.title}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.gender}</StyledTableCell>
                  <StyledTableCell align="right">{row.author}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.publisher}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.status}</StyledTableCell>
                  <StyledTableCell align="right">{row.ISBN}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button type="submit" onClick={navigateToBookRegister}>
          <AddCircleOutlineRoundedIcon />
        </Button>
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
  box-sizing: border-box;
  padding: 150px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

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
