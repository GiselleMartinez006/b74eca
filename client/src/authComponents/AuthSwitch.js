import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme, useMediaQuery } from "@material-ui/core";
import { Grid, Typography, Button } from "@material-ui/core";

import { useStyles } from "../styles/auth/authSwitchStyles";

const AuthSwitch = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const mediaQuery = useMediaQuery(theme.breakpoints.down("sm"), {noSsr: true});

  const [switchToggle, setSwitchToggle] = useState(false);

  const handleSwitch = () => {
    setSwitchToggle(!switchToggle);
  };
  return (
    <Grid item className={classes.switchWrapper}>
      {!mediaQuery ? (
        <>
          <Typography className={classes.switchLabel}>{props.label}</Typography>

          <Link href={`/${props.path}`} to={`/${props.path}`}>
            <Button className={classes.switchButton}>
              <p className={classes.buttonText}>{props.btnText}</p>
            </Button>
          </Link>
        </>
      ) : !switchToggle ? (
        <Typography onClick={handleSwitch} className={classes.switchLabel}>
          {props.label}
        </Typography>
      ) : (
        <Link href={`/${props.path}`} to={`/${props.path}`}>
          <Button className={classes.switchButton}>
            <p className={classes.buttonText}>{props.btnText}</p>
          </Button>
        </Link>
      )}
    </Grid>
  );
};

export default AuthSwitch;
