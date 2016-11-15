import React, { Component } from 'react';
import './App.css';


import {Col, Row} from 'react-bootstrap';

import Sidebar from './components/Sidebar/Sidebar';
import ForceContainer from './containers/ForceContainer';

class App extends Component {

  renderSidebar() {
    return (
      <Col md={4} sm={4}>
        <Sidebar />
      </Col>
    );
  }

  renderForce() {

    return (
      <Col md={8} sm={8}>
        <ForceContainer />
      </Col>
    );
  }

  render() {
    return (
      <div className="App container">
      <Row>
        {this.renderSidebar()}
        {this.renderForce()}
      </Row>
      </div>
    );
  }
}

export default App;
