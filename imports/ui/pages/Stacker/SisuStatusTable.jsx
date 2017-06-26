import React from 'react';

import { Col, Table, Button, ListGroup, ListGroupItem } from 'react-bootstrap';

const SisuStatusTable = () => {
  return (
    <Col xs={12}>
      {/* <ListGroup>
        <ListGroupItem header='Staða grænt' bsStyle="success">
          Þýðir að sisu sé kominn eða er á leiðinni.
        </ListGroupItem>
        <ListGroupItem header='Staða rauður' bsStyle="danger">
          Þíðir að einginn sisu er á leiðinni.
        </ListGroupItem>
      </ListGroup> */}
      <Table style={{ fontSize: '2rem', }} striped bordered hover>
        <thead>
          <tr>
            <th>Röð</th>
            <th>Staða</th>
            <th>Staðsetning</th>
            <th>Númer</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td style={{ backgroundColor: '#dff0d8', }}></td>
            <td>03L-14-3B</td>
            <td>345-9</td>
            <td><Button block bsStyle="warning">Pause</Button></td>
          </tr>
          <tr>
            <td>2</td>
            <td style={{ backgroundColor: '#f2dede', }}></td>
            <td>03L-14-B2</td>
            <td>345-0</td>
            <td><Button block bsStyle="warning">Pause</Button></td>
          </tr>
        </tbody>
      </Table>
    </Col>
  );
};

export default SisuStatusTable;