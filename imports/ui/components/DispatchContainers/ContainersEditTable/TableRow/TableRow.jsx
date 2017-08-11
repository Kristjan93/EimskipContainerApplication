import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import { Form } from 'react-bootstrap';

import EditRow from './EditRow.jsx';
import ViewRow from './ViewRow.jsx';

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.handleEditMode = this.handleEditMode.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      editMode: false,
    }
  }

  // Toggle normal/edit view of the table.
  handleEditMode() {
    this.setState({
      editMode: !this.state.editMode,
    })
  }

  handleDelete() {
    Meteor.call('containers.remove', this.props.container._id);
  }

  render() {
    if(!this.state.editMode) {
      return (
        <ViewRow
          container={this.props.container}
          onEditMode={this.handleEditMode}
          onDelete={this.handleDelete}
        />
      );
    }
    else {
      return (
        <EditRow
          container={this.props.container}
          onEditMode={this.handleEditMode}
        />
      )
    }
  }
}

export default TableRow;