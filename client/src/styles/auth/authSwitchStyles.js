import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  // switch to Signup/Login controls
  switchWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    flexWrap: "wrap",
    height: "12rem",
    width: "100%",
    paddingRight: "8rem",
    paddingTop: "4rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      padding: "2rem",
      paddingBottom: "0",
      paddingTop: "1rem",
      height: "5rem",
    },
  },
  switchButton: {
    boxShadow: "0px 2px 12px rgba(74, 106, 149, 0.2)",
    borderRadius: "5px",
    height: "60%",
    minWidth: "12vw",
    [theme.breakpoints.down("md")]: {
      height: "70%",
    },
  },
  switchLabel: {
    paddingTop: "auto",
    paddingBottom: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    height: "60%",
    minWidth: "16vw",
    fontSize: "1rem",
    lineHeight: "1rem",
    color: "#B0B0B0",
  },
  buttonText: {
    fontWeight: "600",
    textDecoration: "none",
    fontSize: "1rem",
    color: "#3A8DFF",
  },
}));
