import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => {
  // console.log(theme)
  return({
  root: {
    display: "flex",
    flexGrow: 8,
    flexDirection: "column",
    alignItems: "center",
  },
  
  form: {
    // width: "100%",
    // margin: "100px",
    marginTop: "80px",
    marginRight: "122px",
    marginLeft: "87px",
    marginBottom: "106px",
    maxHeight: "424px",
    // height: "80%",
    // height: props.formHeight,
    minHeight: "358px",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-evenly",
    // mobile size 386 x 646
    [theme.breakpoints.down("sm")]: {
      marginTop: "8px",
      marginRight: "auto",
      marginLeft: "auto",
      // marginBottom: "106px",
      maxHeight: "424px",
      // height: "250px",
      // height: props.formHeight,
      minHeight: "100px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      // width: "100%",
      // height: "85%",

    },
  },
  formWrapper: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    // [theme.breakpoints.down("sm")]: {
    //   alignItems: "center",
    //   marginTop: "0",
    //   justifyContent: "flex-start",
    // },
  },
  formHeading: {
    fontSize: "26px",
    lineHeight: "40px",
    fontWeight: "600",
    [theme.breakpoints.down("sm")]: {
      fontSize: "22px",
    //   lineHeight: "1.5rem",
    },
  },
  formRow: {
  //   width: "100%",
  //   height: "10%", //difference
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  //   // display: 
  //   // [theme.breakpoints.down("sm")]: {
  //   //   height: "15%",
  //   //   display: "flex",
  //   //   flexDirection: "column",
  //   //   alignItems: "center",
  //   //   // margin: "auto",
  //   //   marginTop: "0.5rem",
  //   //   marginBottom: "0.5rem",
  //   // },
  },
  // Button and Inputs
  formButtonRow: {
    width: "70%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // [theme.breakpoints.down("sm")]: {
    //   width: "100%",
    // },
  },
 
  formButton: {
    width: "160px",
    height: "56px",
    fontSize: "16px",
    lineHeight: "24px",
    [theme.breakpoints.down("sm")]: {
      width: "80px",
      height: "48px",
      // height: "3rem",
      // width: "25vw",
      // margin: "auto",
    },
  },
 
  })});
// 380 x 66


// // LOGIN
  // formLogin: {
  //   width: "60%",
  //   height: "60%", //difference
  //   [theme.breakpoints.down("sm")]: {
  //     width: "100%",
  //     height: "80%",
  //   },
  // },

  // formWrapperLogin: {
  //   height: "100%",
  //   width: "100%",
  //   display: "flex",
  //   flexDirection: "column",
  //   justifyContent: "space-evenly",
  //   alignItems: "flex-start",
  //   [theme.breakpoints.down("sm")]: {
  //     alignItems: "center",
  //     marginTop: "0",
  //   },
  // },
  // formHeadingLogin: {
  //   fontSize: "2.5rem",
  //   lineHeight: "2rem",
  //   fontWeight: "bold",
  //   [theme.breakpoints.down("sm")]: {
  //     fontSize: "2rem",
  //     lineHeight: "2.2rem",
  //   },
  // },
  // formRowLogin: {
  //   width: "100%",
  //   height: "20%", //difference
  //   [theme.breakpoints.down("sm")]: {
  //     height: "15%",
  //     display: "flex",
  //     flexDirection: "column",
  //     alignItems: "center",
  //   },
  // },
  // 
  