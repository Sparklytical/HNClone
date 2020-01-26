/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import { hot } from 'react-hot-loader/root';
import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

// Header and Footer

import GlobalStyle from '../../global-styles';
import { colorsDark } from '../../styles/palette.js';
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={colorsDark}>
        <div>
          <Helmet titleTemplate="%s - HN Clone" defaultTitle="HN Clone">
            <meta name="description" content="A HN Clone application" />
          </Helmet>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/features" component={FeaturePage} />
            <Route path="" component={NotFoundPage} />
          </Switch>
          <GlobalStyle />
        </div>
      </ThemeProvider>
    );
  }
}
export default hot(App);
