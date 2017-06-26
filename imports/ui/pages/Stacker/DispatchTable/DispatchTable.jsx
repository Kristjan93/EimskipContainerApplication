import React, { Component } from 'react';
import update from 'react-addons-update';

import ContainerForm from './ContainerForm.jsx';
import Table from './Table.jsx';

import { 
  Col,
} from 'react-bootstrap';

const containers = [
  {
    id: 1,
    location: '03L-14-3B',
    number: '1234',
    dispatched: false,
    order: null,
  },
  {
    id: 2,
    location: '08O-17-1A',
    number: '1234',
    dispatched: false,
    order: null,
  },
];

class DispatchTable extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      containers: containers,
    }

    this.handleNewContainer = this.handleNewContainer.bind(this);
    this.handleCommentEdit = this.handleCommentEdit.bind(this);
  }

  handleCommentEdit (container) {
    const { id, location, number } = container;
    const containers = this.state.containers;

    const index = containers.findIndex(function(item) { 
        return item.id == id; 
    });

    const updatedContainer = update(containers[index], 
      {number: {$set: number}},
      {location: {$set: location}},
    );

    const updatedContainers = update(containers, {
        $splice: [[index, 1, updatedContainer]]
    });
    this.setState({containers: updatedContainers});
  }

  handleNewContainer(item) {
    this.setState({ containers: this.state.containers.concat([item]) });
  }

  handleContainerEdit(item) {
    this.setState({ containers: this.state.containers.concat([item]) });
  }

  render() {
    return (
      <Col xs={12}>
        <ContainerForm onSubmit={this.handleNewContainer} />

        <Table onContainerEdit={this.handleCommentEdit} containers={ this.state.containers } />
      </Col>
    );
  }
};

export default DispatchTable;