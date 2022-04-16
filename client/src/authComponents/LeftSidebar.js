import React from "react";
import { Grid, Box, Typography, Icon } from "@material-ui/core";
import { useStyles } from "../styles/auth/leftSidebarStyles";

import svg from "./../assets/bubble.svg";

const LeftSidebar = () => {
  const classes = useStyles();

  return (
    <Grid item md={5}>
      <Box className={classes.leftSideWrapper}>
        <Box className={classes.leftBackgroundTint}>
          <Box className={classes.leftSideContentWrapper}>
            <Icon className={classes.iconDimensions}>
              <img alt="message bubble icon" className={classes.iconDimensions} src={svg} />
            </Icon>
            <Typography className={classes.decorativeHeading}>
              Converse with anyone with any language
            </Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default LeftSidebar;
