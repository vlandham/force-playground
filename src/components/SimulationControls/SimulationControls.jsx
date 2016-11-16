import React, { Component, PropTypes } from 'react';
import Slider from 'react-rangeslider';

import './SimulationControls.css';

class SimulationControls extends Component {

  static propTypes = {
    count: PropTypes.number,
    onCountChange: PropTypes.func
  }

  constructor(props) {
    super(props);

    this.increaseCount = this.increaseCount.bind(this);
    this.decreaseCount = this.decreaseCount.bind(this);
    this.onChange = this.onChange.bind(this);
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

  onChange(value) {

  }


  render() {
    const { count, onCountChange } = this.props;
    return (
      <div className='SimulationControls'>
        <div className='NodeControls'>
          <p>node count: {count}</p>
          <Slider
            min={0}
            max={500}
            step={10}
            value={count}
            orientation="horizontal"
            onChange={onCountChange}
          />
        </div>

      </div>
    )
  }

}

export default SimulationControls;
