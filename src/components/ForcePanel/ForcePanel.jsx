import React, { Component, PropTypes } from 'react';
import addComputedProps from 'react-computed-props';
import { constructForce, applyAttrs } from '../../util/forces';

import * as d3 from 'd3';

import './ForcePanel.css';

import { makeNodes } from '../../util/data';

const tau = 2 * Math.PI;

function computeProps(props) {
  const { nodeCount, forceConfigs } = props;
  const nodes = makeNodes(nodeCount);

  const forces = forceConfigs.map((f) => constructForce(f));

  return {
    nodes,
    forces,
  }
}


class ForcePanel extends Component {

  static propTypes = {
    attrs: PropTypes.array,
    activeForces: PropTypes.array,
    forces: PropTypes.array,
    forceConfigs: PropTypes.array,
    nodeCount: PropTypes.number,
    nodes: PropTypes.array,
    width: PropTypes.number,
    height: PropTypes.number,
  }

  static defaultProps = {
    width: 700,
    height: 600,
    forces: [],
    nodes: [],
    attrs: [],
  }

  constructor(props) {
    super(props);

    this.ticked = this.ticked.bind(this);
  }

  /**
   * When the react component mounts, setup the d3 vis
   */
  componentDidMount() {
    this.setup();
  }

  /**
   * When the react component updates, update the d3 vis
   */
  componentDidUpdate() {
    console.log('update')
    this.update();
  }

  setup() {
    const { width, height } = this.props;

    // this.svg = d3.select(this.root).append('svg')

    // this.svg
    //   .attr('width', width)
    //   .attr('height', height);

    this.canvas = d3.select(this.root).append('canvas')

    this.canvas
      .attr('width', width)
      .attr('height', height);

    this.context = this.canvas.node().getContext("2d");

    this.simulation = null;
    this.update();
  }

  update() {

    const { nodes, forces, attrs } = this.props;

    this.simulation = d3.forceSimulation(nodes)
      .velocityDecay(0.2)
      .on("tick", this.ticked)
      .alpha(1.0);

    applyAttrs(this.simulation, attrs);

    // attrs.forEach((attr) => {
    //   this.simulation[attr.name](getAttrValue(attr));
    // });

    const that = this;
    forces.forEach(function(force, index) {
      const forceName = `force-${index}`;
      that.simulation.force(forceName, force)
    });

  }

  ticked() {
    const { width, height, nodes } = this.props;
    const context = this.context;
    context.clearRect(0, 0, width, height);
    context.save();
    context.translate(width / 2, height / 2);

    context.beginPath();
    nodes.forEach(function(d) {
      context.moveTo(d.x + d.r, d.y);
      context.arc(d.x, d.y, d.r, 0, tau);
    });
    context.fillStyle = "#ddd";
    context.fill();
    context.strokeStyle = "#333";
    context.stroke();

    context.restore();
  }

  render() {
    return (
      <div className="ForcePanel">
        <div ref={(node) => { this.root = node; }} />
      </div>
    );
  }
}

export default addComputedProps(computeProps)(ForcePanel);
