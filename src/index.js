import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// :::::::::: Pages ::::::::::
import SignInPage from "./pages/signInPage/SignInPage";
import MainPage from "./pages/mainPage/MainPage";
import BooksPage from "./pages/booksPage/BooksPage";
import BookRegisterPage from "./pages/bookRegisterPage/BookRegisterPage";
import LoansPage from "./pages/loansPage/LoansPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import UserRegisterPage from "./pages/userRegisterPage/UserRegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInPage />,
  },
  {
    path: "inicio",
    element: <MainPage />,
  },
  {
    path: "livros",
    element: <BooksPage />,
  },
  {
    path: "cadastroDeLivro",
    element: <BookRegisterPage />,
  },
  {
    path: "emprestimos",
    element: <LoansPage />,
  },
  {
    path: "usuarios",
    element: <UsersPage />,
  },
  {
    path: "cadastroDeUsuario",
    element: <UserRegisterPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
