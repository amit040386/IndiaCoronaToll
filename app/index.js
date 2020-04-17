import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import ErrorBoundary from './components/molecules/ErrorBoundary';
import AppRootContainer from './App';
import * as serviceWorker from './serviceWorker';

import './styles/theme.scss';

ReactDOM.render(
  <ErrorBoundary>
    <AppRootContainer />
  </ErrorBoundary>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
