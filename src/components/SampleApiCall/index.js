import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

// Actions
import {fetchApiSample} from '../../redux/sample-api/actions';

// Reactstrap
import {
  Container,
  Jumbotron,
  Spinner,
  Row,
  Col,
  Card,
  CardTitle,
} from 'reactstrap';

class SampleApiCall extends Component {
  componentDidMount() {
    this.props.fetchApiSample();
  }

  render() {
    const {sample_data, isLoading, hasError} = this.props;

    return (
      <Fragment>
        <Jumbotron fluid>
          <Container>
            <p className="lead">
              This page fetches data that is behind a protected/unprotected API
            </p>
            <p>
              It is set to communicate with either an open public API (like
              here) or a your own Firebase Token protected Express API.
            </p>
            <p>
              It comes with Firebase Auth and routes protecting out of the box.
            </p>
          </Container>
        </Jumbotron>
        <Container>
          <Row>
            <Col>
              Result of an API Call to{' '}
              <a
                href="https://jsonplaceholder.typicode.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                jsonplaceholder
              </a>{' '}
              <strong>user</strong> resource
              {isLoading ? (
                <Spinner color="secondary" type="grow" />
              ) : hasError ? (
                <div>{hasError}</div>
              ) : (
                <Card body>
                  <CardTitle>Example User</CardTitle>
                  <pre>{JSON.stringify(sample_data, null, 4)}</pre>
                </Card>
              )}
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = ({sampleApi}) => {
  const {sample_data, isLoading, hasError} = sampleApi;
  return {sample_data, isLoading, hasError};
};

export default connect(
  mapStateToProps,
  {fetchApiSample}
)(SampleApiCall);
