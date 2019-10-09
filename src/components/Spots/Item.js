import React from 'react';
import {connect} from 'react-redux';
import {deleteSpot} from '../../redux/spots/actions';

import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import FolderIcon from '@material-ui/icons/Folder';
import Divider from '@material-ui/core/Divider';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import Avatar from '@material-ui/core/Avatar';

const Item = props => {
  const {spot} = props;

  return (
    <React.Fragment>
      <ListItem key={spot.id}>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={spot.name}
          secondary={spot.description ? spot.description : null}
        />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => console.log('edit')}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => props.deleteSpot(spot.id)}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider component="li" />
    </React.Fragment>
  );
};

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
