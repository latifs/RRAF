import React from 'react';
import {connect} from 'react-redux';

// Actions
import {fetchApiSample} from '../../redux/sample-api/actions';

import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  paper: {
    padding: theme.spacing(4),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0),
  },
  mainContainer: {
    padding: theme.spacing(2),
  },
});

class SampleApiCall extends React.Component {
  componentDidMount() {
    this.props.fetchApiSample();
  }

  render() {
    const {sample_data, isLoading, hasError, classes} = this.props;

    return (
      <React.Fragment>
        <div className={classes.heroContent}>
          <Container
            component="section"
            fixed
            className={classes.mainContainer}
          >
            <Typography
              component="h1"
              variant="h2"
              color="textPrimary"
              gutterBottom
            >
              API Call
            </Typography>
            <Typography variant="h5" color="textSecondary" paragraph>
              This page fetches data that is behind a protected/unprotected API
              <br />
              It is set to communicate with either an open public API (like
              here) or a your own Firebase Token protected Express API.
              <br />
              It comes with Firebase Auth and routes protecting out of the box.
            </Typography>
          </Container>
        </div>

        <Container component="section" fixed className={classes.mainContainer}>
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
            <CircularProgress />
          ) : hasError ? (
            <div>{hasError}</div>
          ) : (
            <React.Fragment>
              <h2>Example User</h2>
              <pre>{JSON.stringify(sample_data, null, 4)}</pre>
            </React.Fragment>
          )}
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({sampleApi}) => {
  const {sample_data, isLoading, hasError} = sampleApi;
  return {sample_data, isLoading, hasError};
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    {fetchApiSample}
  )(SampleApiCall)
);
