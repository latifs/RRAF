import React, {Fragment} from 'react';

import Intro from './Intro';
import Create from './Create';
import List from './List';

import {Container, Row, Col} from 'reactstrap';

export default function SpotsLayout() {
  return (
    <Fragment>
      <Container>
        <Intro />
      </Container>
      <Container>
        <Row>
          <Col sm="6">
            <h2>Create form</h2>
            <Create />
          </Col>
          <Col sm="6">
            <h2>List of elements</h2>
            <List />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
