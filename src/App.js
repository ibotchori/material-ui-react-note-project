import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import Layout from "./components/Layout";
import { useState } from "react";

// run json server first: json-server --watch data/db.json --port 8000

const theme = createTheme({
  palette: {
    primary: {
      // change primary main color
      main: "#fefefe",
    },
    secondary: purple, // it applies to all values (light, main, dark)
  },
  typography: {
    // set imported fonts on typography
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 400,
    fontWeightMedium: 400,
    fontWeightBold: 400,
  },
});

function App() {
  const [notes, setNotes] = useState([
    {
      title: "Yoshi's birthday bash",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
      category: "reminders",
      id: 1,
    },
    {
      title: "Complete my ninja training",
      details:
        "Lorem Ipsum is simply  dummy text ever since the 1500s, when an unknown printer took.",
      category: "work",
      id: 2,
    },
    {
      title: "Order a pizza!",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of ",
      category: "todos",
      id: 3,
    },
    {
      title: "Buy Yoshi's Birthday Gift",
      details:
        "Mario ipsum RGB mushroom 1-up. Cloud lakitu slide fire flower pipe jump swim, lava slide koopa troopa side-scrolling starman paratroopa fire bar question block 1985 koopa troopa fireball Mushroom Kingdom. Lava Mushroom Kingdom.",
      category: "todos",
      id: 4,
    },
    {
      title: "Pay the milkman",
      details:
        "Mario ipsum RGB mushroom 1-up. Cloud lakitu slide fire flower pipe jump swim, lava slide koopa troopa side-scrolling starman  Mushroom Kingdom. Lava Mushroom Kingdom. Mario ipsum RGB mushroom .",
      category: "money",
      id: 5,
    },
    {
      title: "Check my promo codes",
      details:
        "Goomba invincible Mario green shell slide koopa paratroopa fire bar question block 1985 koopa troopa fireball Mushroom Kingdom. Lava Mushroom Kingdom.",
      category: "reminders",
      id: 6,
    },
    {
      title: "Make a new website banner",
      details:
        "Mario ipsum RGB mushroom 1-up. Cloud lakitu slide fire flower pipe jump swim, lava slide koopa troopa side-scrolling starman ",
      category: "work",
      id: 7,
    },
  ]);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Notes notes={notes} setNotes={setNotes} />
            </Route>
            <Route path="/create">
              <Create setNotes={setNotes} />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
