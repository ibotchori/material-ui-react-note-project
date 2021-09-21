import React from "react";
import { TextField, Typography, Button, Container } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

// custom styles
const useStyles = makeStyles({
  field: {
    // style for TextField
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

export default function Create() {
  const classes = useStyles(); // call custom styles
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  // execute function on submit
  const handleSubmit = (e) => {
    setTitleError(false);
    setDetailsError(false);
    e.preventDefault();

    if (title == "") {
      setTitleError(true);
    }
    if (details == "") {
      setDetailsError(true);
    }
    if (title && details) {
      console.log(title, details);
    }
  };

  return (
    <Container>
      <Typography
        className={classes.title}
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom // add some margin on bottom
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label="Details"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          multiline
          rows={4}
          error={detailsError}
        />
        <Button
          className={classes.btn}
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
