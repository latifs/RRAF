import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

// Actions
import {fetchSpots} from '../../redux/spots/actions';

// CMP
import Item from './Item';
import Create from './Create';

import {
  Spinner,
  Row,
  Col,
  Container,
  ListGroup,
  Card,
  CardTitle,
} from 'reactstrap';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faKey} from '@fortawesome/free-solid-svg-icons';

class SpotList extends Component {
  componentDidMount() {
    this.props.fetchSpots();
  }

  renderSpots(spots) {
    return spots.map(spot => {
      return <Item key={spot.id} spot={spot} />;
    });
  }

  render() {
    const {allSpots, isLoading} = this.props;

    return (
      <Fragment>
        <Container>
          <section>
            <Row>
              <Col>
                <p className="lead">
                  This is a simple CRUD example to a protected Cloud Firestore
                  database.
                  <br />
                  For this CRUD to work properly 2 Firebase tools have to work
                  together .
                </p>
              </Col>
            </Row>
          </section>

          <section>
            <Row>
              <Col sm="6">
                <h2>
                  <FontAwesomeIcon icon={faKey} /> Firebase Auth
                </h2>
                Upon signup a token is requested through the auth process.
                <br />
                if Security rules have been set on your Cloud Firestore DB, the
                token will be accessed to be able to read/write to the DB.
                <Card body>
                  <CardTitle>Read/Write Protected</CardTitle>
                  <pre>
                    {`rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth.uid != null;
    }
  }
}`}
                  </pre>
                </Card>
              </Col>
              <Col sm="6">
                <h2>Cloud Firestore</h2>
                <p>
                  Protected meaning only authenticated users can read and write
                  to the database.
                </p>
                <p>
                  The Database is also accessed using <em>onSnapshot</em>{' '}
                  functionality making changes on the Database refresh the UI to
                  reflect them.{' '}
                  <a
                    href="https://firebase.google.com/docs/firestore/query-data/listen"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    More
                  </a>
                </p>
                <p>The collection we read/write to is called Spots.</p>
                <Card body>
                  <CardTitle>Example spot</CardTitle>
                  <pre>
                    {JSON.stringify(
                      {description: 'spot description', name: 'spot Name'},
                      null,
                      4
                    )}
                  </pre>
                </Card>
              </Col>
            </Row>
          </section>

          <h2>All spots</h2>
          {isLoading ? (
            <Row>
              <Spinner color="secondary" type="grow" />
            </Row>
          ) : (
            <Row>
              <Col sm="6">
                <ListGroup>{this.renderSpots(allSpots)}</ListGroup>
              </Col>
              <Col sm="6">
                <Create />
              </Col>
            </Row>
          )}
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = ({spots}) => {
  const {allSpots, isLoading} = spots;
  return {allSpots, isLoading};
};

export default connect(
  mapStateToProps,
  {fetchSpots}
)(SpotList);
