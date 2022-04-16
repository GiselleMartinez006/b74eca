import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { useStyles } from "../styles/auth/authFormStyles";
import { useTheme, useMediaQuery } from "@material-ui/core";


const AuthForm = ({ handleSubmit, propTheme, headingText, btnText, children }) => {
  const classes = useStyles()
  const theme = useTheme();
  const mediaQuery = useMediaQuery(theme.breakpoints.down("sm"), { noSsr: true });
  console.log(propTheme.normalHeight, propTheme.mobileHeight)
  return (
    <form onSubmit={handleSubmit}
      className={classes.form}
      style={{ minHeight: mediaQuery ? propTheme.mobileHeight : propTheme.normalHeight }}
    >

      <Typography className={classes.formHeading}>{headingText}</Typography>

      <Box className={classes.formWrapper}>
        {children.map((child, index) => (
          <Box key={index} className={classes.formRow}>
            {child}
          </Box>
        ))}

        <Box className={classes.formButtonRow}>
          <Button
            className={classes.formButton}
            type="submit"
            color="primary"
            variant="contained"
            size="large"
          >
            {btnText}
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default AuthForm;
