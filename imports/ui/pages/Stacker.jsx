import React, { Component } from 'react';

import { Table, Grid, Row, Col, PageHeader, Button } from 'react-bootstrap';
import DispatchTable from './Stacker/DispatchTable/DispatchTable.jsx';
import SisuStatusTable from './Stacker/SisuStatusTable.jsx';

class Stacker extends Component {
  render() {
    return (
      <Grid fluid={true}>
        <Row className="show-grid">
          <Col xs={12}>
            <PageHeader>Lyftari</PageHeader>
          </Col>
        </Row>

        <Row className="show-grid">
          <DispatchTable />
        </Row>

        <Row className="show-grid">
          {/* <SisuStatusTable /> */}
        </Row>
      </Grid>
    );
  }
}

export default Stacker;