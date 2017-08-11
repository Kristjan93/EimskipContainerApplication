import React from 'react';

import { Button } from 'react-bootstrap';

const ViewRow = ({
  container: { location, number },
  onEditMode,
  onDelete
}) => {
  return (
    <tr style={{ fontWeight: '600', }}>
      <td>{location || ''}</td>
      <td>{number || ''}</td>
      <td>
        <Button onClick={onEditMode}
          bsSize='large'
          block
          bsStyle="primary"
        >
          Breyta
            </Button>
      </td>
      <td>
        <Button onClick={onDelete}
          bsSize='large'
          block bsStyle="danger"
        >
          Eyða
            </Button>
      </td>
    </tr>
  );
};

export default ViewRow;