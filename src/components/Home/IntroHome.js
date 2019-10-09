import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import logo from '../../img/logo.svg';

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0),
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <div className={classes.heroContent}>
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography
              component="h1"
              variant="h2"
              color="textPrimary"
              gutterBottom
            >
              Sample create React app
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <img src={logo} alt="Material-UI Logo"></img>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Typography variant="h5" color="textSecondary" paragraph>
              This create react app is a boilerplate that aims to speed up your
              development process when using the Google Firebase tools. <br />
            </Typography>
            <Typography component="ul" gutterBottom>
              <Typography component="li">
                You can communicate with either a Backend API or a Cloud
                Firestore database.
              </Typography>
              <Typography component="li">
                It comes with Firebase Authentication and React-Router protected
                routes out of the box.
              </Typography>
              <Typography component="li">
                You could either deploy this project to Firebase Hosting using
                the Firebase CLI or modify the included .travis.yml file for
                continuous deployment.
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
