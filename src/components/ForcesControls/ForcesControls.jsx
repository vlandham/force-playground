import React, { Component, PropTypes } from 'react';

import { FORCE_X } from '../../util/forces';

import './ForcesControls.css';

class ForcesControls extends Component {

  static propTypes = {
    forces: PropTypes.array,
    onForceAdd: PropTypes.func,
  }

  constructor(props) {
    super(props);

    this.addForce = this.addForce.bind(this);
    this.removeForce = this.removeForce.bind(this);
  }

  addForce() {
    const { onForceAdd } = this.props;

    onForceAdd(FORCE_X);
  }

  removeForce() {
    const { onForceRemove } = this.props;

    onForceRemove(0);
  }

  renderForce(forceConfig, index) {

    return (
      <div key={index} className='forceConfig'>
        {forceConfig.name}
      </div>
    );
  }

  render() {
    const { forces } = this.props;
    return (
      <div className='ForcesControls'>
        <p>force count: {forces.length}</p>
        <button onClick={this.addForce}>ADD FORCE</button>
        <button onClick={this.removeForce}>REMOVE FORCE</button>
        <div>
          {forces.map((f,i) => this.renderForce(f,i))}
        </div>
      </div>
    );
  }
}

export default ForcesControls;
