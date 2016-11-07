import React, { Component, PropTypes } from 'react';

import './NodeControls.css';

class NodeControls extends Component {

  static propTypes = {
    count: PropTypes.number,
    onCountChange: PropTypes.func
  }

  constructor(props) {
    super(props);

    this.increaseCount = this.increaseCount.bind(this)
    this.decreaseCount = this.decreaseCount.bind(this)
  }

  increaseCount() {
    const { count, onCountChange } = this.props;

    onCountChange(count + 10);
  }

  decreaseCount() {
    const { count, onCountChange } = this.props;
    const newCount = Math.max(0, count - 10);

    onCountChange(newCount);
  }


  render() {
    const { count } = this.props;
    return (
      <div className='NodeControls'>
        <p>node count: {count}</p>
        <button onClick={this.increaseCount}>INCREASE</button>
        <button onClick={this.decreaseCount}>DECREASE</button>
      </div>
    )
  }

}

export default NodeControls;
