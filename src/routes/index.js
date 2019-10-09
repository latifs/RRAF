import React from 'react';
import {Route, withRouter, Switch, Redirect} from 'react-router-dom';

import home from '../components/Home';
import crud from '../components/Spots/';
import sampleCall from '../components/SampleApiCall';
import profile from '../components/Profile';

const MainRoute = props => (
  <Switch>
    <Route path={`${props.match.url}/home`} component={home} />
    <Route path={`${props.match.url}/crud`} component={crud} />
    <Route path={`${props.match.url}/sample-call`} component={sampleCall} />
    <Route path={`${props.match.url}/profile`} component={profile} />
    <Redirect to="/error" />
  </Switch>
);

export default withRouter(MainRoute);
