import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { useTheme, useMediaQuery } from "@material-ui/core";
import { useStyles, inputProps } from "../styles/auth/authStyles";
import AuthSwitch from "./AuthSwitch";
import LeftSidebar from "./LeftSidebar";

const Signup = ({ user, register }) => {
  const history = useHistory();
  const classes = { ...useStyles() };
  const theme = useTheme();
  const mediaQuery = useMediaQuery(theme.breakpoints.down("sm"));

  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const confirmPassword = formElements.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }
    await register({ username, email, password });
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
            label="Already have an account?"
            btnText="Login"
            path="login"
          />
          <form onSubmit={handleRegister} className={classes.formSignup}>
            <Grid className={classes.formWrapperSignup}>
              <Typography className={classes.formHeadingSignup}>
                Create an account.
              </Typography>
              <Grid className={classes.formRowSignup}>
                <FormControl>
                  <TextField
                    aria-label="username"
                    label="Username"
                    name="username"
                    type="text"
                    required
                    InputProps={inputProps(mediaQuery, classes).input}
                    InputLabelProps={inputProps(mediaQuery, classes).label}
                  />
                </FormControl>
              </Grid>
              <Grid className={classes.formRowSignup}>
                <FormControl>
                  <TextField
                    label="E-mail address"
                    aria-label="e-mail address"
                    type="email"
                    name="email"
                    required
                    InputProps={inputProps(mediaQuery, classes).input}
                    InputLabelProps={inputProps(mediaQuery, classes).label}
                  />
                </FormControl>
              </Grid>
              <Grid className={classes.formRowSignup}>
                <FormControl error={!!formErrorMessage.confirmPassword}>
                  <TextField
                    aria-label="password"
                    label="Password"
                    type="password"
                    inputProps={{ minLength: 6 }}
                    name="password"
                    required
                    InputProps={inputProps(mediaQuery, classes).input}
                    InputLabelProps={inputProps(mediaQuery, classes).label}
                  />
                  <FormHelperText>
                    {formErrorMessage.confirmPassword}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid className={classes.formRowSignup}>
                <FormControl error={!!formErrorMessage.confirmPassword}>
                  <TextField
                    label="Confirm Password"
                    aria-label="confirm password"
                    type="password"
                    inputProps={{ minLength: 6 }}
                    name="confirmPassword"
                    required
                    InputProps={inputProps(mediaQuery, classes).input}
                    InputLabelProps={inputProps(mediaQuery, classes).label}
                  />
                  <FormHelperText>
                    {formErrorMessage.confirmPassword}
                  </FormHelperText>
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
                  Create
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Signup;
