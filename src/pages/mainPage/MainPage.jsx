import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Nav from "../../components/nav/Nav";
import { getUserId } from "../../store/slices/status";
import classes from "./mainPage.module.css";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#bfe98b",
      contrastText: "#fff",
    },
    secondary: {
      main: "#bfe98b",
      contrastText: "#fff",
    },
    text: {
      primary: "#000",
    },
  },
});

const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserId(0));
  }, [dispatch]);
  return (
    <div className={classes.MainPage}>
      <ThemeProvider theme={theme}>
        <Nav />
        <div id="detail">
          <Header />
          <Outlet />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default MainPage;
