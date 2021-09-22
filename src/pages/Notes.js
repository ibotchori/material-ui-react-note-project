import { Container, Grid, Paper } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  // get data from server and set it to notes state
  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);
  return (
    <Container>
      <Grid container>
        {notes.map((note) => (
          <Grid item item xs={12} md={6} lg={4} key={note.id}>
            <Paper>{note.title}</Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
