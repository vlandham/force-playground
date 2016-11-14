import React, { Component, PropTypes } from 'react';

import NodeControlsContainer from '../../containers/NodeControlsContainer';
import ForcesControlsContainer from '../../containers/ForcesControlsContainer';

import './Sidebar.css';

class Sidebar extends Component {

  static propTypes = {
    activeForces: PropTypes.array
  }

  renderNodeSection() {
    return (
      <div className='section'>
        <h3>Nodes</h3>
        <NodeControlsContainer />
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
