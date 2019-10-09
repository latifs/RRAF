import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

// Actions
import {signOutUser} from '../../redux/auth/actions';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = props => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          className={classes.title}
          onClick={() => props.history.push('/app/home')}
        >
          RRFA
        </Typography>
        {props.isAuthenticated && (
          <div>
            <Button
              onClick={() => props.history.push('/app/crud')}
              color="inherit"
            >
              Firestore Crud
            </Button>
            <Button
              onClick={() => props.history.push('/app/sample-call')}
              color="inherit"
            >
              Sample Api Call
            </Button>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => {
                  props.history.push('/app/profile');
                  handleClose();
                }}
              >
                Profile
              </MenuItem>
              <MenuItem
                onClick={() => {
                  props.signOutUser();
                  handleClose();
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = ({authUser}) => {
  const {user, isAuthenticated, error, isLoading} = authUser;
  return {user, isAuthenticated, error, isLoading};
};

export default withRouter(
  connect(
    mapStateToProps,
    {signOutUser}
  )(NavBar)
);
