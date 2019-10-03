import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

// Actions
import {signInUser} from '../../redux/auth/actions';

import {
  Button,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  Row,
  Col,
  Card,
  CardBody,
} from 'reactstrap';

class LoginLayout extends Component {
  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    const {isAuthenticated, location} = this.props;
    const originalLocation = location.state && location.state.from;

    return isAuthenticated ? (
      <Redirect to={originalLocation || '/app/home'} />
    ) : (
      <Row>
        <Col sm="12" md={{size: 4, offset: 4}}>
          <Card>
            <CardBody>
              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    id="email"
                  />
                  <FormText>Your username is most likely your email.</FormText>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                    id="password"
                  />
                  <FormText>
                    Don't bother only Google sign-in is available.
                  </FormText>
                </FormGroup>
                <Button type="submit" block>
                  Sign Up
                </Button>
                <Button color="primary" block onClick={this.props.signInUser}>
                  Sign in with Google
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}
const mapStateToProps = ({authUser}) => {
  const {isAuthenticated} = authUser;
  return {isAuthenticated};
};

export default connect(
  mapStateToProps,
  {signInUser}
)(LoginLayout);
