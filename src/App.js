import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';



import Panel from 'react-bootstrap/lib/Panel';
import { Col, Row, Grid, Button, ButtonToolbar, Nav, NavItem } from 'react-bootstrap/lib/';

console.log(BrowserRouter);

class App extends React.Component {

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={4}>
            <Panel bsStyle="primary">
              <Panel.Heading>
                <Panel.Title componentClass="h3">Panel heading</Panel.Title>
              </Panel.Heading>
              <Panel.Body>Panel content</Panel.Body>
            </Panel>


          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8}>
            <ButtonToolbar>
              {/* Standard button */}
              <Button>Default</Button>

              {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
              <Button bsStyle="primary">Primary</Button>

              {/* Indicates a successful or positive action */}
              <Button bsStyle="success">Success</Button>

              {/* Contextual button for informational alert messages */}
              <Button bsStyle="info">Info</Button>

              {/* Indicates caution should be taken with this action */}
              <Button bsStyle="warning">Warning</Button>

              {/* Indicates a dangerous or potentially negative action */}
              <Button bsStyle="danger">Danger</Button>

            </ButtonToolbar>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={12}>
            <Nav bsStyle="pills" activeKey={1}>
              <NavItem eventKey={1} href="/">
                NavItem 1 content
    </NavItem>
              <NavItem eventKey={2} title="Item">
                NavItem 2 content
    </NavItem>
              <NavItem eventKey={3} disabled>
                NavItem 3 content
    </NavItem>
            </Nav>
          </Col>
        </Row>

      </Grid>
    );
  }
}


export default App;
