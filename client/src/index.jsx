import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import customTheme from './customTheme';
import App from './components/App';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(
  <Router>
    <MuiThemeProvider muiTheme={getMuiTheme(customTheme)}>
      <App />
    </MuiThemeProvider>
  </Router>, document.getElementById('app'));
