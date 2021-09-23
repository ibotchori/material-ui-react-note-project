import { Drawer, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const drawerWidth = 240;

const useStyles = makeStyles({
  page: {
    background: "#f9f9f9",
    with: "100%",
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  root: {
    display: "flex",
  },
});

// children props needs to show children of this component
export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* app bar */}

      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }} // classes override the css of the classes inside the drawer component built into it by material UI
      >
        <div>
          <Typography variant="h5">My Notes</Typography>
        </div>
      </Drawer>

      <div className={classes.page}>{children}</div>
    </div>
  );
}
