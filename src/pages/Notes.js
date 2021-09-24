import { Container, Grid, Paper } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import NoteCard from "../components/NoteCard";
import Masonry from "react-masonry-css";

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


  // media query
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {/* array of JSX items */}
        {notes.map((note) => (
          <div item item>
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
}
