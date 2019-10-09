import React from 'react';
import {connect} from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';

const PositionedSnackbar = props => {
  const [state, setState] = React.useState({
    open: true,
    vertical: 'top',
    horizontal: 'right',
  });

  const {vertical, horizontal, open} = state;

  // const handleClick = newState => () => {
  //   setState({open: true, ...newState});
  // };

  const handleClose = () => {
    setState({...state, open: false});
  };

  const dissapear = () => {
    setTimeout(() => {
      handleClose();
    }, 3000);
  };

  dissapear();

  return (
    <Snackbar
      anchorOrigin={{vertical, horizontal}}
      key={`${vertical},${horizontal}`}
      open={open}
      onClose={handleClose}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      onClick={handleClose}
      message={
        <span id="message-id">
          Authenticated -> {JSON.stringify(props.isAuthenticated)}
        </span>
      }
    />
  );
};

const mapStateToProps = state => {
  return {
    user: state.authUser.user,
    error: state.authUser.error,
    isLoading: state.authUser.isLoading,
    isAuthenticated: state.authUser.isAuthenticated,
  };
};

export default connect(mapStateToProps)(PositionedSnackbar);
