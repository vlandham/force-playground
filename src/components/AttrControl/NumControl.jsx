import React, { Component, PropTypes } from 'react';

import DragRange from '../DragRange/DragRange';
import Slider from 'react-rangeslider';

import './NumControl.css';

import {
  Col,
  Form, FormGroup,
  ControlLabel, FormControl } from 'react-bootstrap';

class NumControl extends Component {
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    rate: PropTypes.number,
    attrIndex: PropTypes.number,
    forceIndex: PropTypes.number,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    forceIndex: -1
  }

  constructor(props) {
    super(props)

    this.onUpdateEvent = this.onUpdateEvent.bind(this);
    this.onUpdateValue = this.onUpdateValue.bind(this);
  }

  onUpdateEvent(event) {
    this.onUpdateValue(event.target.value);
  }

  onUpdateValue(value) {
    const { attrIndex, forceIndex, onChange } = this.props;
    onChange(forceIndex, attrIndex, value);
  }

  render() {
    const { min, max, value, name, rate } = this.props;
    return (
      <Form horizontal className="AttrControl">
        <FormGroup>
              <Col componentClass={ControlLabel} sm={5}>
            <DragRange
              value={value}
              rate={rate}
              min={min}
              max={max}
              onChange={this.onUpdateValue}
              unit={5}
            >
                <span className="draggable">{name}</span>
            </DragRange>
          </Col>
           <Col sm={5}>
            <FormControl type="text" value={value} onChange={this.onUpdateEvent} />
          </Col>
          <Col sm={2}>
            <Slider
              min={min}
              max={max}
              step={rate}
              value={value}
              orientation="vertical"
              onChange={this.onUpdateValue}
            />
          </Col>
        </FormGroup>
      </Form>
    );
  }

}

export default NumControl;
