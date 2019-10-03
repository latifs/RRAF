import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {withRouter, NavLink as RRNavLink} from 'react-router-dom';

// Actions
import {signOutUser} from '../../redux/auth/actions';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

class MainNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggle = this.toggle.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  closeNavbar() {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    const {isAuthenticated} = this.props;
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand
            onClick={() => this.closeNavbar()}
            tag={RRNavLink}
            to="/app/home"
          >
            ReactReduxFirebaseAuth
          </NavbarBrand>

          {isAuthenticated ? (
            <Fragment>
              <NavbarToggler onClick={() => this.toggle()} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem onClick={() => this.closeNavbar()}>
                    <NavLink tag={RRNavLink} to="/app/spot-list">
                      Firestore CRUD
                    </NavLink>
                  </NavItem>
                  <NavItem onClick={() => this.closeNavbar()}>
                    <NavLink tag={RRNavLink} to="/app/sample-call">
                      Sample API Call
                    </NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret></DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem
                        onClick={() => {
                          this.props.history.push('/app/profile');
                          this.closeNavbar();
                        }}
                      >
                        Profile
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem
                        onClick={() => {
                          this.closeNavbar();
                          this.props.signOutUser();
                        }}
                      >
                        Sign Out
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Fragment>
          ) : (
            <div />
          )}
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = ({authUser}) => {
  const {user, isAuthenticated, error, isLoading} = authUser;
  return {user, isAuthenticated, error, isLoading};
};

export default withRouter(
  connect(
    mapStateToProps,
    {signOutUser}
  )(MainNavBar)
);
