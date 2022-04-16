import React from "react";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./../../styles/messages/messageBubbleStyles"


const DisplayBubble = ({ text, attachments, parentStyles }) => {

    const classes = { ...useStyles(), ...parentStyles() }
    return (
        <>
            {attachments ? (
                attachments.length === 1 ? (

                    <img className={classes.img} alt="attachment" src={attachments[0]} />
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
                                alt="attachment"
                                className={classes.grouppedImgs}
                                src={attachment}
                            />
                        ))
                        : ""
                    : ""}
            </Box>


        </>
    );
};

export default DisplayBubble;
