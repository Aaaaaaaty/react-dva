import React from 'react';
import { Router, Route } from 'dva/router';
import test from './routes/test';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={test} />
    </Router>
  );
}

export default RouterConfig;
