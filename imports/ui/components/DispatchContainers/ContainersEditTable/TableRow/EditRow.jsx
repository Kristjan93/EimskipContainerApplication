import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import { Button, Form, FormControl } from 'react-bootstrap';

class EditRow extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const id = this.props.container._id;

    // Fetch values from ref's set on inputs.
    editedContainer = {
      location: this.locationInput.value.trim(),
      number: editedNumber = this.numberInput.value.trim()
    };

    Meteor.call('containers.update', id, editedContainer);

    this.props.onEditMode();
  }

  render() {
    const { location, number } = this.props.container;
    return (
      <tr style={{ fontWeight: '600', }}>
        <td>
          <FormControl
            name='location'
            type="text"
            defaultValue={location}
            inputRef={(input) => { this.locationInput = input; }} />
        </td>

        <td>
          <FormControl
            name='number'
            type="text"
            defaultValue={number}
            inputRef={(input) => { this.numberInput = input; }} />
        </td>

        <td>
          <Button onClick={this.props.onEditMode} bsSize='large' block bsStyle="primary">Cancel</Button>
        </td>

        <td>
          <Button onClick={this.handleSubmit} bsSize='large' block bsStyle="success">Staðfesta</Button>
        </td>
      </tr>
    );
  }
}

export default EditRow;