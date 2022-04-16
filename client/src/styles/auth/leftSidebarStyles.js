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

      position: "absolute",
    },
  },
  leftSideContentWrapper: {
    marginTop: "200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: "auto",
    marginLeft: "auto",
    position: "relative",
    maxWidth: "70%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem",
    },
    [theme.breakpoints.up(1050)]: {
      marginTop: "40%",
      maxWidth: "50%"

    },
  },
  decorativeHeading: {
    fontSize: "26px",
    lineHeight: "40px",
    color: "white",
    textAlign: "center",
    fontWeight: 400,
    marginTop: "40px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
      lineHeight: "22px",
      fontSize: "20px",
    },
    [theme.breakpoints.up(1050)]: {
      lineHeight: "2.5rem",
      fontSize: "2rem",

    },
  },
  iconDimensions: {
    height: "auto",
    width: "67px",
    [theme.breakpoints.up(1050)]: {
      width: "100px",

    },

  },
}));

