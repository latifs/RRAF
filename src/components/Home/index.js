import React from 'react';

import CardHome from './CardHome';
import IntroHome from './IntroHome';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    padding: theme.spacing(2),
  },
}));

const libraries = [
  {name: 'React', link: 'https://reactjs.org'},
  {name: 'Redux', link: 'https://redux.js.org/'},
  {name: 'CreateReactApp', link: 'https://create-react-app.dev'},
  {
    name: 'React Router 4',
    link: 'https://github.com/ReactTraining/react-router',
  },
  {name: 'Material-UI', link: 'https://material-ui.com/'},
  {
    name: 'Firebase Hosting',
    link: 'https://firebase.google.com/products/hosting/',
  },
  {
    name: 'Firebase Auth',
    link: 'https://firebase.google.com/products/auth/',
  },
  {
    name: 'Cloud Firestore',
    link: 'https://firebase.google.com/products/firestore/',
  },
  {name: 'Google Fonts', link: 'https://fonts.google.com/'},
  {name: 'Axios', link: 'https://github.com/axios/axios'},
  {name: 'JsonPlaceholder', link: 'https://jsonplaceholder.typicode.com/'},
  {name: 'Travis', link: 'http://travis-ci.com'},
];

export default () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <IntroHome />
      <Container component="section" fixed className={classes.mainContainer}>
        <Grid container spacing={2}>
          {libraries.map((library, key) => {
            return (
              <Grid item xs={12} sm={4} md={3} key={key}>
                <CardHome name={library.name} link={library.link} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </React.Fragment>
  );
};
