import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Grid, Row, Col, PageHeader, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Home extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={8} xsOffset={2}>
            <PageHeader>Veldu farartæki</PageHeader>  
            <LinkContainer to={{ pathname: '/stacker' }}>
              <Button
                style={{ height: '100px', margin: '1rem', lineHeight: '79px' }} 
                bsStyle="info"
                bsSize="lg"
                block
              >
                Lyftari
              </Button>
            </LinkContainer>

            <LinkContainer to={{ pathname: '/sisu' }}>
              <Button 
                style={{ height: '100px', margin: '1rem', lineHeight: '79px' }} 
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

Home.propTypes = {

};

export default Home;