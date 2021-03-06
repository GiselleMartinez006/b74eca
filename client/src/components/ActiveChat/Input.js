import React, { useState } from "react";
import axios from "axios";
import {
  FormControl,
  Input as FileInput,
  Typography,
  Box,
  FilledInput,
  IconButton,
} from "@material-ui/core";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: "flex-end",
    marginTop: 15,
  },
  input: {
    height: 70,
    backgroundColor: "#F4F6FA",
    borderRadius: 8,
    marginBottom: 20,
  },
  upload: {
    color: "#959aa1",

    "&:hover": {
      color: "#009aed",
    },
  },
  previewImgs: {
    borderRadius: "10px",
    maxHeight: "100px",
  },
  previewWrapper: {
    background:
      "linear-gradient(180deg, rgba(101,101,103,0.6530987394957983) 0%, rgba(244,246,250,1) 4%, rgba(244,246,250,1) 100%)",
    display: "flex",
    flexDirection: "row-reverse",
    width: "100%",
    justifyContent: "space-evenly",
    padding: "15px",
  },
}));

const Input = ({ otherUser, conversationId, user, postMessage }) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [imgPreview, setImgPreview] = useState([]);
  const [images, setImages] = useState([]);

  const handleChange = (event) => {
    setText(event.target.value);
  };
  const readURL = (file) => {
    return new Promise((res, rej) => {
      const reader = new FileReader();
      reader.onload = (e) => res(e.target.result);
      reader.onerror = (e) => rej(e);
      reader.readAsDataURL(file);
    });
  };

  const handleUpload = async (event) => {
    const img = event.target.files;
    const imgUrl = await readURL(img[0]);
    await setImgPreview((prevState) => [
      ...prevState,
      { src: imgUrl, alt: img[0].name },
    ]);
    await setImages((prevState) => [...prevState, img]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;

    const cloud_name = process.env.REACT_APP_CLOUD_NAME;
    const preset = process.env.REACT_APP_PRESET;
    const url = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

    setImages([]);
    setImgPreview([]);
    setLoading(true);

    const promises = images.map(img => {
      let file = img[0];

      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", preset);

      const instance = axios.create();
      return instance.post(url, data)
    })

    const resolvedPromises = await Promise.all(promises)
    const attachments = resolvedPromises.map(response => response.data.url)

    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: formElements.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments: attachments,
    };
    setText("");
    setLoading(false);
    await postMessage(reqBody);

  };

  const handleDelete = (index) => {
    setImgPreview((prevState) => prevState.filter((img, i) => i !== index));
  };
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      {(loading || imgPreview.length > 0) && (
        <Box className={classes.previewWrapper}>
          {!loading ? (
            imgPreview.map((img, index) => (
              <img
                key={img.src}
                alt={img.alt}
                className={classes.previewImgs}
                src={img.src}
                onClick={() => handleDelete(index)}
              />
            ))
          ) : (
            <Typography variate="h1"> Loading... </Typography>
          )}
        </Box>
      )}
      <FormControl fullWidth hiddenLabel>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
          endAdornment={
            <FormControl>
              <label htmlFor="icon-button-file">
                <FileInput
                  style={{ display: "none" }}
                  accept="image/*"
                  id="icon-button-file"
                  type="file"
                  onChange={handleUpload}
                />
                <IconButton aria-label="upload-image" component="span">
                  <FileCopyOutlinedIcon className={classes.upload} />
                </IconButton>
              </label>
            </FormControl>
          }
        />
      </FormControl>
    </form>
  );
};

export default Input;
