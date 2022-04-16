import { makeStyles } from "@material-ui/core/styles";

export  const useStyles = makeStyles(() => ({
    root: {
      display: "flex",
    },
    avatar: {
      height: 30,
      width: 30,
      marginRight: 11,
      marginTop: 6,
    },
    usernameDate: {
      fontSize: 11,
      color: "#BECCE2",
      fontWeight: "bold",
      marginBottom: 5,
    },
    bubble: {
      backgroundImage: "linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)",
      borderRadius: "0 10px 10px 10px",
    },
    text: {
      fontSize: 14,
      fontWeight: "bold",
      color: "#FFFFFF",
      letterSpacing: -0.2,
      padding: 8,
    },
    // attachmentsWrapper: {},
    // img: {
    //   maxWidth: "173px",
    //   maxHeight: "150px",
    // },
    // img: {
    //   maxWidth: "150px",
    //   height: "auto",
    //   width: "auto",
    //   maxHeight: "150px",
    // },
    // grouppedImgs: {
    //   margin: "5px",
    //   maxWidth: "150px",
    //   height: "125px",
    //   borderRadius: "5px",
    // },
  }));