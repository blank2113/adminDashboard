import React, { useEffect } from "react";
import classes from "./loginPage.module.css";
import logo from "../../assets/logo-horizontal.svg";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useGetAuthorizationMutation } from "../../store/middleWares/auth";
import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "../../store/slices/status";

const theme = createTheme({
  palette: {
    primary: {
      main: "#BEF264",
      light: "#BEF264",
      dark: "#BEF264",
      contrastText: "#000",
    },
  },
});

const LoginPage = () => {
  const mainPage = useNavigate();
  const [postLoginData] = useGetAuthorizationMutation();
  const userId = useSelector((state) => state.status.id);
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });
  useEffect(() => {
    if (userId) {
      mainPage("main/tour/all");
    }
  }, [userId, mainPage]);
  const onSubmit = async (data, e) => {
    e.preventDefault();
    if (data) {
      postLoginData(data).then(
        (res) =>
          sessionStorage.setItem("token", res?.data?.token) &&
          dispatch(getUserId(res.data.user_id)) &&
          localStorage.setItem("user", JSON.stringify(res.data.user))
      );
    }
    reset();
  };
  console.log(userId);
  return (
    <div className={classes.LoginPage}>
      <div className={classes.inner}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <img src={logo} alt="logo" />
          <ThemeProvider theme={theme}>
            <TextField
              id="outlined-basic"
              sx={{ width: "100%", margin: "20px 0" }}
              label="Email"
              variant="outlined"
              className={errors?.email && "is-invalid"}
              {...register("email", {
                required: "Поле обязателно к заполнению",
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            <TextField
              id="outlined-basic"
              sx={{ width: "100%", margin: "20px 0" }}
              label="Password"
              type="password"
              variant="outlined"
              className={errors?.password && "is-invalid"}
              {...register("password", {
                required: "Проверьте Пароль или Email",
              })}
            />
            {errors?.email && errors?.password && (
              <p style={{ fontSize: "15px", margin: "0px 0", color: "red" }}>
                {errors?.password?.message || "Проверьте Email"}
              </p>
            )}
            <Button
              variant="contained"
              size="large"
              sx={{ margin: "50px 0 30px 0" }}
              type="submit"
            >
              Войти
            </Button>
          </ThemeProvider>
        </form>
        <div className={classes.textBottom}>
          © 2014-2023 All Rights Reserved Minzifa Travel.
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
