import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import { BrowserRouter } from 'react-router-dom';
//import ReactGA from 'react-ga';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#d7c47c',
      contrastText: '#ffffff',
    },
    secondary: {

      main: '#0E112C',
      contrastText: '#000000',
    },
    textPrimary: {
      main: '#ff8f00',
    },

  }

})




//ReactGA.initialize('164477320')
//ReactGA.pageview("/");

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
