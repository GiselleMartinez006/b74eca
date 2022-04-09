import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useTheme, useMediaQuery } from "@material-ui/core";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
} from "@material-ui/core";

import { useStyles, inputProps } from "../styles/auth/authStyles";

import LeftSidebar from "./LeftSidebar";
import AuthSwitch from "./AuthSwitch";

const Login = ({ user, login }) => {
  const history = useHistory();
  const classes = { ...useStyles() };
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
    <Grid container sx={{ height: "100vh", width: "100vw" }}>
      <LeftSidebar />
      <Grid container item md={8}>
        <Box className={classes.rightSideWrapper}>
          <AuthSwitch
            label="Don't have an account?"
            btnText="Create Account"
            path="register"
          />
          <form onSubmit={handleLogin} className={classes.formLogin}>
            <Grid className={classes.formWrapperLogin}>
              <Typography className={classes.formHeadingLogin}>
                Welcome Back!
              </Typography>
              <Grid className={classes.formRowLogin}>
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
              </Grid>
              <Grid className={classes.formRowLogin}>
                <FormControl margin="normal" required>
                  <TextField
                    label="Password"
                    aria-label="password"
                    type="password"
                    name="password"
                    InputProps={{
                      classes: {
                        input: classes.formInput,
                      },
                      endAdornment: (
                        <Button
                          color="primary"
                          className={classes.forgotPwdButton}
                        >
                          Forgot?
                        </Button>
                      ),
                      style: {
                        height: mediaQuery ? 45 : 60,
                        marginTop: mediaQuery ? 15 : 25,
                        width: mediaQuery ? "50vw" : "30vw",
                      },
                    }}
                    InputLabelProps={inputProps(mediaQuery, classes).label}

                    // className={classes.formInput}
                  />
                </FormControl>
              </Grid>
              <Grid className={classes.formButtonRow}>
                <Button
                  className={classes.formButton}
                  type="submit"
                  color="primary"
                  variant="contained"
                  size="large"
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
