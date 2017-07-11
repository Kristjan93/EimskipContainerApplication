import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
 
import { Col } from 'react-bootstrap';

import CreateContainer from './CreateContainer/CreateContainer.jsx';
import ContainersEditTable from './ContainersEditTable/ContainersEditTable.jsx';

import { Containers } from '../../../api/containers.js';

class DispatchContainers extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      containers: null,
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
        <CreateContainer onSubmit={this.handleNewContainer} />
        
        <ContainersEditTable 
          onContainerEdit={this.handleCommentEdit} 
          containers={this.props.containers}
        />
      </Col>
    );
  }
};

export default createContainer(() => {
  Meteor.subscribe('containers');
  
  return {
    containers: Containers.find({ }).fetch(),
  };
}, DispatchContainers);