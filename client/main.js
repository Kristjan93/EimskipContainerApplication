import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import { routes } from '../imports/startup/client/routes.jsx'
import '../imports/startup/client/accounts-config.js';

Meteor.startup(() => {
  render(routes(), document.getElementById('render-target'));
});