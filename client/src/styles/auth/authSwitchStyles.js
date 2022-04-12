import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  // switch to Signup/Login controls
  switchWrapper: {
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
    //   padding: "2rem",
    //   paddingBottom: "0",
    //   paddingTop: "1rem",
    //   height: "5rem",
    },
  },
  switchButton: {
    boxShadow: "0px 2px 12px rgba(74, 106, 149, 0.2)",
    borderRadius: "5px",
    height: "54px",
    width: "140px",
    //  140 x 54
    [theme.breakpoints.down("sm")]: {
      width: "140px",
      height: "45px",
    //   height: "70%",
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
    }
  },
  buttonText: {
    fontSize: "14px",
    lineHeight: "19px",
    fontWeight: "600",
    textDecoration: "none",
    // fontSize: "1rem",
    color: "#3A8DFF",
  },
}));
