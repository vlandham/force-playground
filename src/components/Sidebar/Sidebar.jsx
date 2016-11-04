import React, { Component, PropTypes } from 'react';

import './Sidebar.css';

class Sidebar extends Component {

  static propTypes = {
    activeForces: PropTypes.array
  }

  renderNodeSection() {
    return (
      <div className='section'>
        <h3>Nodes</h3>
        

      </div>
    );
  }

  render() {
    return (
      <div className='Sidebar'>
        {this.renderNodeSection()}
      </div>
    );
  }
}

export default Sidebar;
