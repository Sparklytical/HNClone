/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import FontFaceObserver from 'fontfaceobserver';
import { BrowserRouter } from 'react-router-dom';
import 'sanitize.css/sanitize.css';
import loadInitialState from 'store/middleware/localStorageMiddleware/loadInitialState';
// Import root app
import App from 'containers/App';

// Load the favicon and the .htaccess file
/* eslint-disable import/no-unresolved */
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import 'file-loader?name=.htaccess!./.htaccess';
/* eslint-enable import/no-unresolved */
import { HelmetProvider } from 'react-helmet-async';
import configureStore from './configureStore';

// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Open Sans', {});

// When Open Sans is loaded, add a font-family using Open Sans to the body
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
});

// Create redux store with history
const MOUNT_NODE = document.getElementById('app');

const ConnectedApp = () => (
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

const render = () => {
  const initialState = loadInitialState();
  const store = configureStore(initialState);

  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    </BrowserRouter>,
    MOUNT_NODE,
  );
};

if (module.hot) {
  // Hot reloadable React components
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}
render();
// Chunked polyfill for browsers without Intl support

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
