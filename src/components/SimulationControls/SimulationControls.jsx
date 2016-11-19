import React, { Component, PropTypes } from 'react';
import Slider from 'react-rangeslider';

import AttrControl from '../AttrControl/AttrControl';

import './SimulationControls.css';

class SimulationControls extends Component {

  static propTypes = {
    count: PropTypes.number,
    onCountChange: PropTypes.func,
    onAttrUpdate: PropTypes.func,
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

  renderAttr(attr, index) {
    const { onAttrUpdate } = this.props;

    return (
      <AttrControl
        key={index}
        attrIndex={index}
        attr={attr}
        onChange={onAttrUpdate}
      />
    );
  }


  render() {
    const { count, onCountChange, attrs } = this.props;
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
        {attrs.map((a, i) => this.renderAttr(a, i))}

      </div>
    )
  }

}

export default SimulationControls;
