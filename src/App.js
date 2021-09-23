import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Layout from './components/Layout';



const theme = createTheme({
  palette: {
    primary: { // change primary main color
      main: '#fefefe'
    }, 
    secondary: purple // it applies to all values (light, main, dark)
  }, 
  typography: { // set imported fonts on typography
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 400,
    fontWeightMedium: 400,
    fontWeightBold: 400,
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Layout>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
      </Layout>
    </Router>
    </ThemeProvider>
  );
}

export default App;
