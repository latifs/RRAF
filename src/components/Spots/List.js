import React from 'react';
import {connect} from 'react-redux';

// Actions
import {fetchSpots} from '../../redux/spots/actions';

// CMP
import Item from './Item';

import List from '@material-ui/core/List';

import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';

import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  mainContainer: {
    padding: theme.spacing(2),
  },
  progress: {
    position: 'absolute',
    left: '50%',
  },
});

class SpotList extends React.Component {
  componentDidMount() {
    this.props.fetchSpots();
  }

  renderSpots(spots) {
    return spots.map(spot => {
      return <Item key={spot.id} spot={spot} />;
    });
  }

  render() {
    const {allSpots, isLoading, classes} = this.props;

    return (
      <Container component="section" fixed className={classes.mainContainer}>
        {isLoading ? (
          <CircularProgress className={classes.progress} />
        ) : (
          <List>{this.renderSpots(allSpots)}</List>
        )}
      </Container>
    );
  }
}

const mapStateToProps = ({spots}) => {
  const {allSpots, isLoading} = spots;
  return {allSpots, isLoading};
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    {fetchSpots}
  )(SpotList)
);
