import React, {Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom';

class Error404 extends Component {
  render() {
    return (
      <Fragment>
        <h1>Error!!</h1>
        <NavLink to="/login" data-flag="dashboard">
          login
        </NavLink>
      </Fragment>
    );
  }
}
export default Error404;
