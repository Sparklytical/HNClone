/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
// import Header from '../../components/Header/Header.js';
// import Footer from '../../components/Footer/Footer.js';
import { Helmet } from 'react-helmet-async';
import AppContainer from 'components/AppContainer';

export default class HomePage extends React.PureComponent {
  render() {
    return (
      <article>
        <Helmet>
          <title>HackerNews Clone</title>
          <meta name="description" content="A HackerNews Clone" />
        </Helmet>
        <div className="home-page">
          <section className="centered">
            <AppContainer />
          </section>
        </div>
      </article>
    );
  }
}
