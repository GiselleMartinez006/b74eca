import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => {

  return ({

    form: {
      marginTop: "80px",
      marginRight: "122px",
      marginLeft: "87px",
      marginBottom: "106px",
      maxHeight: "424px",
      minHeight: "358px",
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.down("sm")]: {
        marginTop: "8px",
        marginRight: "auto",
        marginLeft: "auto",
        maxHeight: "424px",
        minHeight: "100px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",

      },
    },
    formWrapper: {
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    },
    formHeading: {
      fontSize: "26px",
      lineHeight: "40px",
      fontWeight: "600",
      [theme.breakpoints.down("sm")]: {
        fontSize: "22px",
      },
    },
    formRow: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    formButtonRow: {
      width: "70%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    formButton: {
      width: "160px",
      height: "56px",
      fontSize: "16px",
      lineHeight: "24px",
      [theme.breakpoints.down("sm")]: {
        width: "80px",
        height: "48px",
      },
    },

  })
});
