import React, { Component, PropTypes } from 'react';

import SimulationControlsContainer from '../../containers/SimulationControlsContainer';
import ForcesControlsContainer from '../../containers/ForcesControlsContainer';

import './Sidebar.css';

class Sidebar extends Component {

  static propTypes = {
    activeForces: PropTypes.array
  }

  renderNodeSection() {
    return (
      <div className='section'>
        <h3>Simulation</h3>
        <SimulationControlsContainer />
      </div>

    );
  }

  renderForcesSection() {
    return (
      <div className='section'>
        <ForcesControlsContainer />
      </div>
    );
  }

  render() {
    return (
      <div className='Sidebar'>
        {this.renderNodeSection()}
        {this.renderForcesSection()}
      </div>
    );
  }
}

export default Sidebar;
