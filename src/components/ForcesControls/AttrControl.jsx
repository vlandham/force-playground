import React, { Component, PropTypes } from 'react';

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

  constructor(props) {
    super(props)

    this.onUpdate = this.onUpdate.bind(this);
  }

  onUpdate(event) {

    const { attrIndex, forceIndex, onChange } = this.props;
    onChange(forceIndex, attrIndex, event.target.value);
  }

  render() {
    const { attr } = this.props;
    return (
      <Form className="attrControl pull-right">
        <FormGroup>
          <Col sm={6}>
            <ControlLabel className="pull-right">{attr.name}</ControlLabel>
          </Col>
          <Col sm={6}>
            <FormControl type="text" value={attr.default} onChange={this.onUpdate} />
          </Col>
        </FormGroup>
      </Form>
    );
  }

}

export default AttrControl;
