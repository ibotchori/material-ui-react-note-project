import React from "react";
import Typography from "@mui/material/Typography";

export default function Create() {
  return (
    <div>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom // add some margin on bottom
      >
        Create a new note
      </Typography>
    </div>
  );
}
