import React from 'react';
import {NavLink} from 'react-router-dom';

export default () => (
  <React.Fragment>
    <h1>Error!!</h1>
    <NavLink to="/login" data-flag="dashboard">
      login
    </NavLink>
  </React.Fragment>
);
