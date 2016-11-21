import React, { Component, PropTypes } from 'react';

import NumControl from './NumControl.jsx';

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

  render() {
    const { attr, onChange, attrIndex, forceIndex } = this.props;
    return (
      <NumControl
        name={attr.name}
        value={attr.default}
        min={attr.min}
        max={attr.max}
        rate={attr.rate}
        onChange={onChange}
        attrIndex={attrIndex}
        forceIndex={forceIndex}
      />
    );
  }

}

export default AttrControl;
