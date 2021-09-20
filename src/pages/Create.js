import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Create() {
  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom // add some margin on bottom
      >
        Create a new note
      </Typography>

      <Button
        onClick={() => console.log("You clicked me")}
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon/>}
      >
        Submit
      </Button>
    </Container>
  );
}
