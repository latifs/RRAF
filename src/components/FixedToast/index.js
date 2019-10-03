import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Toast, ToastBody, ToastHeader} from 'reactstrap';
import './index.css';

class FixedToast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.dissapear();
  }

  toggle() {
    this.setState({
      show: !this.state.show,
    });
  }

  dissapear() {
    setTimeout(() => {
      this.setState({show: false});
    }, 3000);
  }

  render() {
    return (
      <Toast isOpen={this.state.show} className="fixed-toast">
        <ToastHeader toggle={this.toggle} icon="dark">
          info
        </ToastHeader>
        <ToastBody>
          Authenticated -> {JSON.stringify(this.props.isAuthenticated)}
          Authenticated -> {JSON.stringify(this.props.isAuthenticated)}
        </ToastBody>
      </Toast>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.authUser.user,
    error: state.authUser.error,
    isLoading: state.authUser.isLoading,
    isAuthenticated: state.authUser.isAuthenticated,
  };
};

export default connect(mapStateToProps)(FixedToast);
