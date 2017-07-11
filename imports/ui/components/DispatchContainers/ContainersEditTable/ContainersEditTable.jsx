import React from 'react';
import TableRow from './TableRow.jsx';

import {
  Col,
  Table,
  Glyphicon, 
  ButtonToolbar, 
  Button,
  Well,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
} from 'react-bootstrap';

const ContainersTable = ({ containers, onContainerEdit }) => {
  return (
    <Table style={{ fontSize: '2rem', }} striped bordered hover>
      <thead>
        <tr>
          <th>Staðsetning</th>
          <th>Númer</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {containers.map((item, index) => (
          <TableRow
            key={index}
            container={item}
            onContainerEdit={onContainerEdit}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default ContainersTable;