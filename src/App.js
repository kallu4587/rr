import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@material-ui/core';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import About from './components/pages/Contribute';
// import Contribute from './components/pages/Contribute';
import ErrorPage from './components/pages/ErrorPage';
import { PageTopOnRouteChange } from './components/common/ui';
import './styles/home.scss';
import './styles/layout.scss';
import './styles/about.scss';
import './styles/errorpage.scss';
import './styles/cards.scss';
import './styles/contact.scss';
import './styles/contribution.scss';
import './styles/sponsors.scss';

const theme = createTheme({
  palette: {
    primary: {
      // main: '#030016',
      main: '#07162e',
    },
    secondary: {
      main: '#e1a87a',
    },
    success: {
      main: '#51b651',
    },
    error: {
      main: '#d96565',
    },
    type: 'light',
  },
});

const App = () => {
  const [modal, setModal] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setModal(true);
    }, 800);
  }, []);

  const handleModalClose = () => {
    setModal(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className='App'>
          <PageTopOnRouteChange>
            <Switch>
              <Route
                exact
                path='/'
                component={() => (
                  <Home modalOpen={modal} handleModalClose={handleModalClose} />
                )}
              />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/about' component={About} />
              <Route exact path='/contribute' component={Contribute} />
              {/* <Route exact path='/Contribute' component={Contribute} /> */}
              <Route component={ErrorPage} />
            </Switch>
          </PageTopOnRouteChange>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
