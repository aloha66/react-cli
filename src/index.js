import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import moment from 'moment';
moment.locale('zh-cn');

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
