import { Avatar, Drawer, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { AddCircleOutline, SubjectOutlined } from "@mui/icons-material";
import { useHistory, useLocation } from "react-router";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { format } from "date-fns"; // date formatter
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const drawerWidth = 240;

// custom styles
const useStyles = makeStyles((theme) => {
  return {
    drawer: {
      width: "240px",
      [theme.breakpoints.down("md")]: {
        width: "190px",
      },
    },
    drawerPaper: {
      width: "240px",
      [theme.breakpoints.down("md")]: {
        width: "190px",
      },
    },

    page: {
      background: "#f9f9f9",
      with: "100%",
      // padding: theme.spacing(3), // base spacing = 8 px. 8 * 3 = 24 px
      padding: "24px",
    },

    root: {
      display: "flex",
    },
    active: {
      background: "#f4f4f4",
    },
    title: {
      // padding: theme.spacing(2), // base spacing = 8 px. 8 * 2 = 16 px
      padding: "16px",
    },
    appBar: {
      // calculate width
      width: `calc(100% - ${drawerWidth}px)`,
    },
    // mixing is a collection of styles used by MUI component. it get the ToolBar component classes included the height, and it drop the content by that hight
    //  toolbar: theme.mixins.toolbar,
    toolbar: {
      height: "84px",
    },
    date: {
      flexGow: 1,
    },
    avatar: {
      //  marginLeft: theme.spacing(2)
      marginLeft: "16px",
    },
  };
});

// children props needs to show children of this component
export default function Layout({ children }) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

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
      <AppBar
        elevation="0"
        className={classes.appBar}
        style={{ width: `calc(100% - ${!matches ? 240 : 190}px)` }} // set inline styles, because {classes.appBar} did not work
      >
        <Toolbar>
          <Typography
            className={classes.date}
            style={{ flexGrow: "1" }} // set inline styles, because {classes.date} did not work
          >
            Today is the {format(new Date(), "do MMMM Y")}{" "}
            {/* format date by date-fns npm*/}
          </Typography>
          <Typography>Mario</Typography>
          <Avatar
            className={classes.avatar}
            src="https://media.wired.com/photos/5926c126af95806129f50868/master/w_1334,c_limit/SuperMarioRunTA.jpg"
          />
        </Toolbar>
      </AppBar>

      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }} // classes override the css of the classes inside the drawer component built into it by material UI
      >
        <div>
          <Typography className={classes.title} variant="h5">
            Notes Page
          </Typography>
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

      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
}
