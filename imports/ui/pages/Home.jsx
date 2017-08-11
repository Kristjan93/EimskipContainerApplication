import React, { Component } from 'react';

import { Grid, Row, Col, PageHeader, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const styles = {
  buttons: {
    height: '100px',
    marginBottom: '26px',
    lineHeight: '79px',
  }
}

class Home extends Component {
  render() {
    return (
      <Grid fluid={true}>
        <Row className="show-grid">
          <Col xs={10} xsOffset={1}>
            <PageHeader>Veldu farartæki</PageHeader>  
            <LinkContainer to={{ pathname: '/stacker' }}>
              <Button
                style={styles.buttons}
                bsStyle="info"
                bsSize="lg"
                block
              >
                Lyftari
              </Button>
            </LinkContainer>

            <LinkContainer to={{ pathname: '/sisu' }}>
              <Button
                style={styles.buttons}
                bsStyle="success" 
                bsSize="lg" 
                block
              >
                Sisu bíll
              </Button>
            </LinkContainer>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;