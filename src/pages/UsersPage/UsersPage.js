// :::::::::: Tools ::::::::::
import * as React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// :::::::::: Material Parts ::::::::::
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import { styled as StyledMUI } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

// :::::::::: Components ::::::::::
import SideBar from "../../globalComponents/SideBar";

export default function UsersPage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [rowIndex, setRowIndex] = useState(-1);
  const [columnIndex, setColumnIndex] = useState(-1);
  const [changedRows, setChangedRows] = useState([]);
  const [rows, setRows] = useState(() => {
    const localStorageUsers = JSON.parse(localStorage.getItem("users"));

    if (localStorageUsers) {
      return localStorageUsers;
    } else {
      return [];
    }
  });

  const navigate = useNavigate();

  const navigateToUserRegister = () => {
    return navigate("/cadastroDeUsuario");
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

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const onChange = (rowInd, colName, value) => {
    rows[rowInd][colName] = value;
  };

  function saveToStorage() {
    localStorage.setItem("users", JSON.stringify(changedRows));
    handleClose();
  }

  return (
    <Container>
      <SideBar />
      <Content>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Nome</StyledTableCell>
                <StyledTableCell align="right">Tipo</StyledTableCell>
                <StyledTableCell align="right">Telefone</StyledTableCell>
                <StyledTableCell align="right">Email</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.type}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.telephone}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.email}</StyledTableCell>
                  <StyledTableCell
                    align="right"
                    onClick={() => {
                      setRowIndex(index);
                      setColumnIndex(4);
                    }}
                  >
                    {rowIndex === index && columnIndex === 4 ? (
                      <TextField
                        name="status"
                        defaultValue={rows[index]["status"]}
                        onChange={(event) =>
                          onChange(index, "status", event.target.value)
                        }
                      />
                    ) : (
                      row.status
                    )}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button type="submit" onClick={navigateToUserRegister}>
          <AddCircleOutlineRoundedIcon />
        </Button>
        <Button
          type="submit"
          onClick={() => {
            handleOpen();
            setChangedRows(rows);
          }}
        >
          <SaveRoundedIcon />
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Deseja salvar as alterações?
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
              onClick={saveToStorage}
            >
              SIM
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
              onClick={handleClose}
            >
              NÃO
            </Typography>
          </Box>
        </Modal>
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
