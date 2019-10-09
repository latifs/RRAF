import React from 'react';

import Create from './Create';
import List from './List';
import SpotsIntro from './SpotsIntro';

export default () => (
  <React.Fragment>
    <SpotsIntro />
    <Create />
    <List />
  </React.Fragment>
);
