import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  // switch to Signup/Login controls
  switchContainer: {
    display: "flex",
    justifyContent: "flex-end",
    flexWrap: "wrap",
    height: "auto",
    width: "100%",
    paddingRight: "42px",
    paddingTop: "30px",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      paddingRight: "0",
    },
  },
  switchWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  switchButton: {
    boxShadow: "0px 2px 12px rgba(74, 106, 149, 0.2)",
    borderRadius: "5px",
    height: "54px",
    width: "140px",
    [theme.breakpoints.down("sm")]: {
      width: "140px",
      height: "45px",
    },
  },
  switchLabel: {
    paddingTop: "auto",
    paddingBottom: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "30px",
    height: "60%",
    minWidth: "16vw",
    fontSize: "14px",
    lineHeight: "19px",
    color: "#B0B0B0",
    [theme.breakpoints.down("sm")]: {
      marginRight: "0"
    },
    [theme.breakpoints.up(1050)]: {
      minWidth: "12vw",
      marginRight: "0"
    }
  },
  buttonText: {
    fontSize: "14px",
    lineHeight: "19px",
    fontWeight: "600",
    textDecoration: "none",
    color: "#3A8DFF",
  },
}));
