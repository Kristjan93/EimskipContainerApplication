import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import { 
  Glyphicon, 
  Button,
  Well,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
} from 'react-bootstrap';

class CreateContainer extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      location: '',
      number: ''
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  onSubmit(event) {
    event.preventDefault();

    const newContainer = Object.assign({}, {
      location: this.state.location,
      number: this.state.number
    });

    Meteor.call('containers.insert', newContainer);

    this.setState({
      location: '',
      number: ''
    });
  }

  render() {
    return (
      <Well>
        <Form style={{ fontSize: '2rem' }} inline onSubmit={this.onSubmit}>
          <FormGroup controlId="formInlineLocation">
            <ControlLabel>Staðsetning</ControlLabel>
            {' '}
            <FormControl name='location' onChange={this.handleChange} value={this.state.location} type="text" placeholder="03L-14-3B" />
          </FormGroup>

          {' '}
          <FormGroup controlId="formInlineNumber">
            <ControlLabel>Gámanúmer</ControlLabel>
            {' '}
            <FormControl name='number' onChange={this.handleChange} value={this.state.number} type="text" placeholder="3459" />
          </FormGroup>

          {' '}
          <Button type="submit" bsStyle="primary">
            <Glyphicon glyph="plus" />
            Ný staðsetning
          </Button>
        </Form>
      </Well>
    );
  }
};

export default CreateContainer;