import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme, useMediaQuery } from "@material-ui/core";
import { Grid, Box, Typography, Button } from "@material-ui/core";

import { useStyles } from "../client/src/styles/auth/authSwitchStyles";

const AuthSwitch = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const mediaQuery = useMediaQuery(theme.breakpoints.down("sm"), { noSsr: true });

  const [switchToggle, setSwitchToggle] = useState(false);

  const handleSwitch = () => {
    setSwitchToggle(!switchToggle);
  };
  return (
    <Grid item className={classes.switchContainer}>
      {!mediaQuery ? (
        <Box className={classes.switchWrapper}>

          <Typography className={classes.switchLabel}>{props.label}</Typography>

          <Link href={`/${props.path}`} to={`/${props.path}`}>
            <Button className={classes.switchButton}>
              <Typography className={classes.buttonText}>{props.btnText}</Typography>
            </Button>
          </Link>
        </Box>
      ) : !switchToggle ? (
        <Typography onClick={handleSwitch} className={classes.switchLabel}>
          {props.label}
        </Typography>
      ) : (
        <Link href={`/${props.path}`} to={`/${props.path}`}>
          <Button className={classes.switchButton}>
            <Typography className={classes.buttonText}>{props.btnText}</Typography>
          </Button>
        </Link>
      )}
    </Grid>
  );
};

export default AuthSwitch;
