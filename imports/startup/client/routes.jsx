import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import Home from '/imports/ui/pages/Home.jsx';
import Stacker from '/imports/ui/pages/Stacker.jsx';
import Sisu from '/imports/ui/pages/Sisu.jsx';

export const routes = () => (
  <Router history={ browserHistory }>
    <Route path='/' component={ Home }></Route>
    <Route path='/stacker' component={ Stacker }></Route>
    <Route path='/sisu' component={ Sisu }></Route>
  </Router>
);