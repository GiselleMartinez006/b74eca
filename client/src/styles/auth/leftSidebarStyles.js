import { makeStyles } from "@material-ui/core";
import background from "../../assets/bg-img.png";

export const useStyles = makeStyles((theme) => ({
  //left side
  leftSideWrapper: {
    height: "100vh",
    width: "100%",
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
    },
  },
  leftBackgroundTint: {
    background:
      "linear-gradient(180deg, rgb(58,141,255, 0.8) 0%, rgb(58,141,255) 100%)",
    height: "100%",
    width: "100%",
    mixBlendMode: "normal",
    display: "flex",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      // paddingTop: "5rem",
      position: "absolute",
    },
  },
  leftSideContentWrapper: {
    marginTop: "15rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: "auto",
    marginLeft: "auto",
    position: "relative",
    maxWidth: "60%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "5rem",
      // fontSize: "1.5rem",
    },
  },
  decorativeHeading: {
    fontSize: "2rem",
    color: "white",
    textAlign: "center",
    marginTop: "2.5rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem",
      fontSize: "1.5rem",
    },
  },
  iconDimensions: {
    width: "100px",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "80px",
    },
  },
}));
