import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import {Container, Row, Col, Media, Jumbotron} from 'reactstrap';

class Profile extends Component {
  render() {
    const {isAuthenticated, user} = this.props;

    return (
      <Fragment>
        {isAuthenticated ? (
          <Fragment>
            <Jumbotron fluid>
              <Container>
                <p className="lead">
                  The Profile is populated with information gathered by using
                  Firebase AUTH
                </p>
                <p>it is comprised of basic non-sensitive information.</p>
              </Container>
            </Jumbotron>
            <Container>
              <section>
                <Row>
                  <Col sm="8">
                    <Media>
                      <Media left href="#">
                        <Media
                          object
                          src={user.photoURL}
                          alt="Generic placeholder image"
                        />
                      </Media>
                      <Media body>
                        <Media heading>{user.displayName}</Media>
                        Email verified: {JSON.stringify(user.emailVerified)}
                      </Media>
                    </Media>
                  </Col>
                </Row>
              </section>
            </Container>
          </Fragment>
        ) : (
          <div />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = ({authUser}) => {
  const {user, isAuthenticated, error, isLoading} = authUser;
  return {user, isAuthenticated, error, isLoading};
};

export default connect(mapStateToProps)(Profile);
