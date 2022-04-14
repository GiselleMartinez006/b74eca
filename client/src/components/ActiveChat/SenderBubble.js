import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  date: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: "#91A3C0",
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: "bold",
  },
  bubble: {
    background: "#F4F6FA",
    borderRadius: "10px 10px 0 10px",
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

const SenderBubble = ({ time, text, attachments }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className={classes.date}>{time}</Typography>

      {attachments ? (
        attachments.length === 1 ? (
          <img className={classes.img} src={attachments[0]} />
        ) : (
          ""
        )
      ) : (
        ""
      )}
      <Box>
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

export default SenderBubble;
