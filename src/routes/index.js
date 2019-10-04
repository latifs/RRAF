import React, {Component} from 'react';
import {Route, withRouter, Switch, Redirect} from 'react-router-dom';

import home from '../components/Home';
import crud from '../components/Spots/';
import sampleCall from '../components/SampleApiCall';
import profile from '../components/Profile';

class MainRoute extends Component {
  render() {
    const {match} = this.props;

    return (
      <Switch>
        <Route path={`${match.url}/home`} component={home} />
        <Route path={`${match.url}/crud`} component={crud} />
        <Route path={`${match.url}/sample-call`} component={sampleCall} />
        <Route path={`${match.url}/profile`} component={profile} />
        <Redirect to="/error" />
      </Switch>
    );
  }
}

export default withRouter(MainRoute);
