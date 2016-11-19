import React, { Component, PropTypes } from 'react';

import DragRange from '../DragRange/DragRange';

import './AttrControl.css';

import {
  Col,
  Form, FormGroup,
  ControlLabel, FormControl } from 'react-bootstrap';

class AttrControl extends Component {
  static propTypes = {
    attr: PropTypes.object,
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
    const { attr } = this.props;
    return (
      <Form horizontal className="AttrControl">
        <FormGroup>
              <Col componentClass={ControlLabel} sm={6}>
            <DragRange
              value={attr.default}
              rate={attr.rate}
              min={attr.min}
              max={attr.max}
              onChange={this.onUpdateValue}
              unit={5}
            >
                <span className="draggable">{attr.name}</span>
            </DragRange>
          </Col>
           <Col sm={6}>
            <FormControl type="text" value={attr.default} onChange={this.onUpdateEvent} />
          </Col>
        </FormGroup>
      </Form>
    );
  }

}

export default AttrControl;
