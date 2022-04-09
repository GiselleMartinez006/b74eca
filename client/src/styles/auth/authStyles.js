import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 8,
    flexDirection: "column",
    alignItems: "center",
  },
  rightSideWrapper: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "5rem",
      background: "white",
      position: "relative",
      top: "40%",
      width: "90%",
      margin: "auto",
      height: "60vh",
    },
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  // LOGIN
  formLogin: {
    width: "60%",
    height: "60%", //difference
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "80%",
    },
  },

  formWrapperLogin: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      marginTop: "0",
    },
  },
  formHeadingLogin: {
    fontSize: "2.5rem",
    lineHeight: "2rem",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
      lineHeight: "2.2rem",
    },
  },
  formRowLogin: {
    width: "100%",
    height: "20%", //difference
    [theme.breakpoints.down("sm")]: {
      height: "15%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  // SIGNUP
  formSignup: {
    width: "60%",
    height: "80%", //difference
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "85%",
    },
  },
  formWrapperSignup: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      marginTop: "0",
      justifyContent: "flex-start",
    },
  },
  formHeadingSignup: {
    fontSize: "2.5rem",
    lineHeight: "2rem",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
      lineHeight: "1.5rem",
    },
  },
  formRowSignup: {
    width: "100%",
    height: "10%", //difference
    [theme.breakpoints.down("sm")]: {
      height: "15%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      // margin: "auto",
      marginTop: "0.5rem",
      marginBottom: "0.5rem",
    },
  },
  // Button and Inputs
  formButtonRow: {
    width: "70%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  formButton: {
    width: "10rem",
    height: "4rem",
    fontSize: "1.3rem",
    [theme.breakpoints.down("sm")]: {
      height: "3rem",
      width: "25vw",
      margin: "auto",
    },
  },
  formInput: {
    width: "30vw",
    fontSize: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      width: "50vw",
      fontSize: "1rem",
    },
  },
}));

export const inputProps = (mediaQuery, classes) => ({
  input: {
    classes: {
      input: classes.formInput,
    },
    style: {
      height: mediaQuery ? 45 : 60,
      marginTop: mediaQuery ? 15 : 25,
    },
  },
  label: {
    style: {
      fontSize: mediaQuery ? 20 : 25,
    },
  },
});
