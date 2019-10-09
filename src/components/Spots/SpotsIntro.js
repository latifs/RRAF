import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(3, 0),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0),
  },
  mainContainer: {
    padding: theme.spacing(2),
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Firestore CRUD
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            This is a simple CRUD example to a protected Cloud Firestore
            database.
            <br />
            For this CRUD to work properly 2 Firebase tools have to work
            together .
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  Firebase Authentication
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Cloud Firestore
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>

      <Container component="section" fixed className={classes.mainContainer}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <Card body>
              <CardContent>
                <Typography component="h2" variant="h4" gutterBottom>
                  Firebase Auth
                </Typography>
                <Typography variant="body2" component="p" gutterBottom>
                  Upon signup, a token is requested through the authentication
                  process.
                  <br />
                  if Security rules have been set on your Cloud Firestore DB,
                  the token will be accessed to be able to read/write to the DB.
                </Typography>
                <Divider />
                <Typography component="pre" color="textSecondary">
                  {`rules_version = '2';
  service cloud.firestore {
    match /databases/{database}/documents {
      match /{document=**} {
        allow read, write: if request.auth.uid != null;
      }
    }
  }`}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Card body>
              <CardContent>
                <Typography component="h2" variant="h4" gutterBottom>
                  Cloud Firestore
                </Typography>
                <Typography variant="body2" component="p" gutterBottom>
                  Protected meaning only authenticated users can read and write
                  to the database.
                  <br />
                  The Database is also accessed using <em>onSnapshot</em>{' '}
                  functionality making changes on the Database refresh the UI to
                  reflect them.{' '}
                  <Button
                    component={Link}
                    href="https://firebase.google.com/docs/firestore/query-data/listen"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    More
                  </Button>
                </Typography>
                <Divider />
                <Typography component="pre" color="textSecondary">
                  {JSON.stringify(
                    {description: 'spot description', name: 'spot Name'},
                    null,
                    4
                  )}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
