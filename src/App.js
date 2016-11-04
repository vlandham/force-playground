import React, { Component } from 'react';
import './App.css';

import * as d3 from 'd3';

import {Col, Row} from 'react-bootstrap';

import Sidebar from './components/Sidebar/Sidebar';
import ForcePanel from './components/ForcePanel/ForcePanel';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeForces: [],
      data: {
        count: 10
      }
    };
  }

  getNodes(count) {
    return d3.range(count).map(function(i) {
      return {
        r: Math.random() * 14 + 4
      };
    })
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

    const nodes = this.getNodes(data.count);

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
