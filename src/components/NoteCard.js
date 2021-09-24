import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Avatar, IconButton, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { DeleteOutlined } from "@mui/icons-material";
import { blue, green, pink, yellow } from "@mui/material/colors";

// custom styles
const useStyles = makeStyles({
  test: {
    border: (note) => {
      // assign styles by category, dynamically
      if (note.category == "work") {
        return "1px solid red";
      }
    },
  },
  avatar: {
    backgroundColor: (note) => {
      // assign styles by category, dynamically
      if (note.category == "work") {
        return yellow[700];
      }
      if (note.category == "money") {
        return green[500];
      }
      if (note.category == "todus") {
        return pink[500];
      }
      return blue[500];
    },
  },
});

export default function NoteCard({ note, handleDelete }) {
  const classes = useStyles();

  return (
    <div>
      <Card
        elevation={1}
        className={classes.test}
        style={{
          // set dynamically styles inline, because {classes.test} did not work
          border: `${note.category == "work" ? "1px solid red" : null}`,
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              style={{
                // set dynamically styles inline, because {classes.avatar} did not work
                backgroundColor: `${
                  note.category == "work"
                    ? yellow[700]
                    : note.category == "money"
                    ? green[500]
                    : note.category == "todos"
                    ? pink[500]
                    : blue[500]
                }`,
              }}
              className={classes.avatar}
            >
              {/* set firs letter of notes category on avatar */}
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
