import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    marginBottom: 0,
  },
}));

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © '}
    <Link color="inherit" href="https://material-ui.com/">
      React Redux Auth Firestore
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
);

export default () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Nothing more but a classic footer here
      </Typography>
      <Copyright />
    </footer>
  );
};
