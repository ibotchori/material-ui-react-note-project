import { Container, Grid, Paper } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import NoteCard from "../components/NoteCard";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  // get data from server and set it to notes state
  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const handleDelete = async (id) => {
    // delete note from server
    await fetch("http://localhost:8000/notes/" + id, {
      method: "DELETE",
    });

    // delete note from local state
    const newNotes = notes.filter((note) => note.id != id);
    setNotes(newNotes);
  };
  return (
    <Container>
      <Grid container spacing={3}>
        {notes.map((note) => (
          <Grid item item xs={12} md={6} lg={4} key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
