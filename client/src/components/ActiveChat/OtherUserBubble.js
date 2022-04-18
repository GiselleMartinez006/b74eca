import React from "react";
import { Box, Typography, Avatar } from "@material-ui/core";
import { useStyles } from "./../../styles/messages/otherUserStyles"
import DisplayBubble from "./DisplayBubble"

const OtherUserBubble = ({ text, time, otherUser, attachments }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Avatar
        alt={otherUser.username}
        src={otherUser.photoUrl}
        className={classes.avatar}
      />
      <Box>
        <Typography className={classes.usernameDate}>
          {otherUser.username} {time}
        </Typography>
        <DisplayBubble text={text} attachments={attachments} parentStyles={useStyles} otherUser={otherUser} time={time} />
      </Box>
    </Box>
  );
};

export default OtherUserBubble;
