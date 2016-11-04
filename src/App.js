import React, { Component } from 'react';
import './App.css';

import { makeNodes } from './util/data';

import { FORCE_X } from './util/forces';

import {Col, Row} from 'react-bootstrap';

import Sidebar from './components/Sidebar/Sidebar';
import ForcePanel from './components/ForcePanel/ForcePanel';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeForces: [
        { type: FORCE_X, options: { strength: 0.2 }}
      ],
      data: {
        count: 10
      }
    };
  }

  renderSidebar() {
    const { activeForces } = this.state;
    return (
      <Col md={4}>
        <Sidebar
          activeForces={activeForces}
        />
      </Col>
    );
  }

  renderForce() {
    const { activeForces, data } = this.state;

    const nodes = makeNodes(data.count);

    return (
      <Col md={8}>
        <ForcePanel
          activeForces={activeForces}
          nodes={nodes}
        />
      </Col>
    );
  }

  render() {
    return (
      <div className="App">
      <Row>
        {this.renderSidebar()}
        {this.renderForce()}
      </Row>
      </div>
    );
  }
}

export default App;
