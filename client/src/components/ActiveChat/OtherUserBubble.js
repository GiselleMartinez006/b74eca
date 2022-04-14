import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Avatar } from "@material-ui/core";

const useStyles = makeStyles(() => ({
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
  attachmentsWrapper: {},
  img: {
    maxWidth: "173px",
    maxHeight: "150px",
  },
  img: {
    maxWidth: "150px",
    height: "auto",
    width: "auto",
    maxHeight: "150px",
  },
  grouppedImgs: {
    margin: "5px",
    maxWidth: "150px",
    height: "125px",
    borderRadius: "5px",
  },
}));

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
        {attachments ? (
          attachments.length === 1 ? (
            <img className={classes.img} src={attachments[0]} />
          ) : (
            ""
          )
        ) : (
          ""
        )}
        {text.length ? (
          <Box className={classes.bubble}>
            <Typography className={classes.text}>{text}</Typography>
          </Box>
        ) : (
          ""
        )}
        <Box>
          {attachments
            ? attachments.length > 1
              ? attachments.map((attachment) => (
                  <img
                    key={attachment}
                    className={classes.grouppedImgs}
                    src={attachment}
                  />
                ))
              : ""
            : ""}
        </Box>
      </Box>
    </Box>
  );
};

export default OtherUserBubble;
