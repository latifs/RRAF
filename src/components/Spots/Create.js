import React from 'react';
import {connect} from 'react-redux';
import {createSpot} from '../../redux/spots/actions';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  paper: {
    padding: theme.spacing(4),
  },
  mainContainer: {
    padding: theme.spacing(2),
  },
});

const emptyState = {
  name: '',
  description: '',
};

class Add extends React.Component {
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
    const {isSaving, classes} = this.props;

    return (
      <Container component="section" fixed className={classes.mainContainer}>
        <Paper className={classes.paper}>
          <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
            <Grid container spacing={2} alignItems="flex-end">
              <Grid item xs={12} sm={12} md={5}>
                <TextField
                  id="standard-full-width"
                  name="name"
                  label="Name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  disabled={isSaving}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <TextField
                  id="standard-full-width"
                  name="description"
                  label="Description"
                  value={this.state.description}
                  onChange={this.handleChange}
                  disabled={isSaving}
                  fullWidth
                  placeholder="Placeholder"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={1}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  onClick={this.onSubmit}
                  disabled={isSaving}
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    );
  }
}

const mapStateToProps = ({spots}) => {
  const {isSaving} = spots;
  return {isSaving};
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    {createSpot}
  )(Add)
);
