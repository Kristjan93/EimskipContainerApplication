import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from '../../ui/Layout/Layout.jsx';
import Home from '/imports/ui/pages/Home.jsx';
import Stacker from '/imports/ui/pages/Stacker.jsx';
import Sisu from '/imports/ui/pages/Sisu.jsx';

export const routes = () => (
  <Router history={ browserHistory }>
    <Route path='/' component={ Layout }>
      <IndexRoute component={ Home }></IndexRoute>
      <Route path='/stacker' component={ Stacker }></Route>
      <Route path='/sisu' component={ Sisu }></Route>
    </Route>
  </Router>
);