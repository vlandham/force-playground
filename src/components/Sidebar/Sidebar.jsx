import React, { Component, PropTypes } from 'react';

import './Sidebar.css';

class Sidebar extends Component {

  static propTypes = {
    activeForces: PropTypes.array
  }

  render() {
    return (
      <div>
        <p>Sidebar</p>
      </div>
    );
  }
}

export default Sidebar;
