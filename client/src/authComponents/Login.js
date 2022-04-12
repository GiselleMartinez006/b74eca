import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Grid, Box, FormControl, TextField, Button } from "@material-ui/core";

import { useTheme, useMediaQuery } from "@material-ui/core";
// import { useStyles as formStyles } from "../styles/auth/authFormStyles";
import { useStyles,inputProps } from "../styles/auth/authStyles";
import AuthSwitch from "./AuthSwitch";
import LeftSidebar from "./LeftSidebar";
import AuthForm from "./AuthForm";

const Login = ({ user, login }) => {
  const history = useHistory();
  const classes = { ...useStyles()};
  const theme = useTheme();
  const mediaQuery = useMediaQuery(theme.breakpoints.down("sm"));

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
  };

  useEffect(() => {
    if (user && user.id) history.push("/home");
  }, [user, history]);

  return (
    <Grid container>
      <LeftSidebar />
      <Grid container item md={7}>
        <Box className={classes.rightSideWrapper}>
          <AuthSwitch
            label="Don't have an account?"
            btnText="Create Account"
            path="register"
          />
          <AuthForm
            propTheme={theme.loginForm}
            headingText="Welcome back!"
            btnText="Login"
            handleSubmit={handleLogin}
          >
            <FormControl margin="normal" required>
              <TextField
                aria-label="username"
                label="Username"
                name="username"
                type="text"
                InputProps={inputProps(mediaQuery, classes).input}
                InputLabelProps={inputProps(mediaQuery, classes).label}
              />
            </FormControl>
            <FormControl margin="normal" required>
              <TextField
                label="Password"
                aria-label="password"
                type="password"
                name="password"
                InputProps={{
                  input: {
                    classes: {
                      input: classes.formInput,
                    },
                    style: {
                      // height: 45,//mediaQuery ? "66px" : "66px",
                      marginTop: mediaQuery ? 15 : 25,
                    },
                  },
                  endAdornment: (
                    <Button color="primary" className={classes.forgotPwdButton}>
                      Forgot?
                    </Button>
                  ),
                  label: {
                    style: {
                      lineHeight: "19px",
                      fontSize: "18px", // mediaQuery ? 20 : "14px",
                      color: "#B0B0B0",
                    },
                  },
                }}
                InputLabelProps={inputProps(mediaQuery, classes).label}
                className={classes.formInput}
              />
            </FormControl>
          </AuthForm>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
