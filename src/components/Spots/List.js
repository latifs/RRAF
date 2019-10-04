import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

// Actions
import {fetchSpots} from '../../redux/spots/actions';

// CMP
import Item from './Item';

import {Spinner, ListGroup} from 'reactstrap';

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
        {isLoading ? (
          <Spinner color="secondary" type="grow" />
        ) : (
          <ListGroup>{this.renderSpots(allSpots)}</ListGroup>
        )}
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
