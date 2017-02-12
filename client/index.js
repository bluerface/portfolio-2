import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/App';
import MainPage from './components/MainPage';
import DetailPage from './components/DetailPage';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={MainPage} />
      <Route path='/:project_slug' component={DetailPage} />
    </Route>
  </Router>
  ,
  document.getElementById('app')
);
