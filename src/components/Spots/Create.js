import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createSpot} from '../../redux/spots/actions';

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Toast,
  ToastBody,
  ToastHeader,
} from 'reactstrap';

const emptyState = {
  name: '',
  description: '',
};

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = emptyState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createSpot(this.state);
    this.reset();
  }

  reset() {
    this.setState(emptyState);
  }

  render() {
    const {isSaving, hasError} = this.props;

    return (
      <Form onSubmit={this.handleSubmit}>
        {hasError ? (
          <Toast>
            <ToastHeader>Reactstrap</ToastHeader>
            <ToastBody>
              This is a toast on a white background — check it out!
            </ToastBody>
          </Toast>
        ) : (
          <div />
        )}

        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            placeholder="name"
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
            disabled={isSaving}
          />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="descr">Description</Label>
          <Input
            type="textarea"
            name="description"
            placeholder="Description"
            id="descr"
            value={this.state.description}
            onChange={this.handleChange}
            disabled={isSaving}
          />
        </FormGroup>
        <Button type="submit" onClick={this.onSubmit} disabled={isSaving}>
          Submit
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = ({spots}) => {
  const {isSaving, hasError} = spots;
  return {isSaving, hasError};
};

export default connect(
  mapStateToProps,
  {createSpot}
)(Add);
