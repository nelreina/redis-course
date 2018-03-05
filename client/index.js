import React from 'react';
import { render } from 'react-dom';
import 'babel-polyfill';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
window.API = 'http:/localhost:9000/api';
render(
  <Router>
    <App />
  </Router>,
  document.querySelector('#root')
);
