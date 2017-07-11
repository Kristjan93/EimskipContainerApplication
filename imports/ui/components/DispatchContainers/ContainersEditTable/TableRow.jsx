import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import { 
  Col,
  Table as _Table,
  Glyphicon, 
  ButtonToolbar, 
  Button,
  Well,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
} from 'react-bootstrap';

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
    this.state = {
      editMode: false,
      location: this.props.container.location,
      number: this.props.container.number,
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

  handleEdit() {
    this.setState({ editMode: !this.state.editMode })
  }

  handleDelete() {
    console.log(this.props.container._id)
    Meteor.call('containers.remove', this.props.container._id);
  }

  handleSubmit() {
    const { id } = this.props.container;
    const { location, number } = this.state;
    this.props.onContainerEdit({ 
      id,
      location,
      number,
    })
    this.setState({ editMode: !this.state.editMode })
  }


  render() {
    const { container } = this.props;
    
    if(!this.state.editMode) {
      return (
        <tr style={{ fontWeight: '600', }}>
          <td>{container.location}</td>
          <td>{container.number}</td>
          <td>
            <Button onClick={this.handleEdit} bsSize='large' block bsStyle="primary">Breyta</Button>
          </td>
          <td>
            <Button onClick={this.handleDelete} bsSize='large' block bsStyle="danger">Eyða</Button>
          </td>
        </tr>
      );
    }
    else {
      return (
        <tr style={{ fontWeight: '600', }}>
          <td>
            <FormControl value={this.state.location} name='location' onChange={this.handleChange} type="text" />
          </td>

          <td>
            <FormControl value={this.state.number} name='number' onChange={this.handleChange} type="text"/>
          </td>

          <td>
            <Button onClick={this.handleEdit} bsSize='large' block bsStyle="primary">Cancel</Button>
          </td>

          <td>
            <Button onClick={this.handleSubmit} bsSize='large' block bsStyle="success">Staðfesta</Button>
          </td>

        </tr>
      )
    }
  }
}

export default TableRow;