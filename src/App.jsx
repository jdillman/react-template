import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import defaultTheme from './themes/default';
import Routes from './components/Routes';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <section className="main-app">
        <Routes />
      </section>
    </ThemeProvider>
  );
}

export default App;
