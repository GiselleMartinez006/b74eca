import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 8,
    flexDirection: "column",
    alignItems: "center",
  },
  gridContainer: {
    height: "100vh", width: "100vw"
  },
  rightSideWrapper: {
    [theme.breakpoints.down("sm")]: {
      background: "white",
      position: "fixed",
      top: "30%",
      height: "70vh",
      alignItems: "center"
    },
    width: "100%",
    display: "flex",
    height: "100%",
    flexDirection: "column",
  },
  rightSideFormWrapper: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      height: "100%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }
  },
  formInput: {
    width: "380px",
    fontSize: "14px",
    lineHeight: "19px",
    [theme.breakpoints.down("sm")]: {
      width: "280px",
    },
  },
}));
export const inputProps = (mediaQuery, classes) => ({
  input: {
    classes: {
      input: classes.formInput,
    },
    style: {
      marginTop: mediaQuery ? 15 : 25,
    },
  },
  label: {
    style: {
      lineHeight: "19px",
      fontSize: "18px",
      color: "#B0B0B0"
    },
  },
});

