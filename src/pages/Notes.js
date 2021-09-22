import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Notes() {
  const [notes, setNotes] = useState([])


  // get data from server and set it to notes state
  useEffect(() => {
    fetch('http://localhost:8000/notes')
    .then(res => res.json())
    .then(data => setNotes(data))
  
  }, [])
  return (
    <div>
      {notes.map(note => (
        <p key={note.id}>{note.title}</p>
      ))}
    </div>
  )
}
