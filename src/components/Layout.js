import { Drawer, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { AddCircleOutline, SubjectOutlined } from "@mui/icons-material";
import { useHistory, useLocation } from "react-router";

const drawerWidth = 240;

// custom styles
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
  active: {
    background: "#f4f4f4",
  },
});

// children props needs to show children of this component
export default function Layout({ children }) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  console.log(location.pathname);

  // menu buttons
  const menuItem = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Notes",
      icon: <AddCircleOutline color="secondary" />,
      path: "/create",
    },
  ];

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

        {/* list / links */}
        <List>
          {menuItem.map((item) => (
            <ListItem
              key={item.text}
              button
              onClick={() => history.push(item.path)} // change page on button click
              className={location.pathname == item.path ? classes.active : null} // add active class on button click
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div className={classes.page}>{children}</div>
    </div>
  );
}
