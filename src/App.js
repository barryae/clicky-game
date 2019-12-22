import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { teal, green } from '@material-ui/core/colors'
import NavBar from './components/NavBar'
import Main from './components/Main'

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: green
  }
})

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <NavBar />
        <Main />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
