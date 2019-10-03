import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteSpot} from '../../redux/spots/actions';

import {ListGroupItem, Button} from 'reactstrap';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

class Item extends Component {
  render() {
    const {spot} = this.props;
    return (
      <ListGroupItem key={spot.id}>
        <div className="float-left">
          <strong>Name:</strong> {spot.name} <br />
          <strong>Description:</strong> {spot.description}
        </div>
        <Button
          className="float-right"
          onClick={() => this.props.deleteSpot(spot.id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </ListGroupItem>
    );
  }
}

const mapStateToProps = ({spots}) => {
  const {isDeleting, hasError} = spots;
  return {
    isDeleting,
    hasError,
  };
};

export default connect(
  mapStateToProps,
  {deleteSpot}
)(Item);
