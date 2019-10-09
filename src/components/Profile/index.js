import React from 'react';
import {connect} from 'react-redux';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0),
  },
  content: {
    padding: theme.spacing(8, 0),
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  mainContainer: {
    padding: theme.spacing(2),
  },
});

const Profile = props => {
  const {user, classes} = props;

  return (
    <React.Fragment>
      <div className={classes.heroContent}>
        <Container fixed>
          <Typography
            component="h1"
            variant="h2"
            color="textPrimary"
            gutterBottom
          >
            Profile
          </Typography>
          <Typography variant="h5" color="textSecondary" paragraph>
            The Profile is populated with information gathered by using Firebase
            AUTH
            <br />
            It is comprised of basic non-sensitive information.
          </Typography>
        </Container>
      </div>
      <Container component="section" fixed className={classes.mainContainer}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={user.photoURL}
            title="User"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {user.displayName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Email verified: {JSON.stringify(user.emailVerified)}
            </Typography>
          </CardContent>

          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = ({authUser}) => {
  const {user, isAuthenticated, error, isLoading} = authUser;
  return {user, isAuthenticated, error, isLoading};
};

export default withStyles(styles)(connect(mapStateToProps)(Profile));
