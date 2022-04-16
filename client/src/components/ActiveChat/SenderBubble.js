import React from "react";
import { Box, Typography } from "@material-ui/core";
import DisplayBubble from "./DisplayBubble";
import { useStyles } from "./../../styles/messages/loggedUserStyles"


const SenderBubble = ({ time, text, attachments }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className={classes.date}>{time}</Typography>


      <Box>

        <DisplayBubble attachments={attachments} parentStyles={useStyles} text={text} />

      </Box>
    </Box>
  );
};

export default SenderBubble;
