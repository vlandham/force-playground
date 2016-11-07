import React, { Component, PropTypes } from 'react';
import addComputedProps from 'react-computed-props';

import * as d3 from 'd3';

import './ForcePanel.css';

import { makeNodes } from '../../util/data';

const tau = 2 * Math.PI;

function computeProps(props) {
  const { nodeCount } = props;
  const nodes = makeNodes(nodeCount);

  return {
    nodes,
  }
}


class ForcePanel extends Component {

  static propTypes = {
    activeForces: PropTypes.array,
    nodeCount: PropTypes.number,
    nodes: PropTypes.array,
    width: PropTypes.number,
    height: PropTypes.number,
  }

  static defaultProps = {
    width: 600,
    height: 800,
    nodes: [],
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

    const { nodes } = this.props;


    this.simulation = d3.forceSimulation(nodes)
      .velocityDecay(0.2)
      .force("x", d3.forceX().strength(0.002))
      .force("y", d3.forceY().strength(0.002))
      .force("collide", d3.forceCollide().radius(function(d) { return d.r + 0.5; }).iterations(2))
      .on("tick", this.ticked)
      .alpha(1.0);

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
      <div>
        <div ref={(node) => { this.root = node; }} />
      </div>
    );
  }
}

export default addComputedProps(computeProps)(ForcePanel);
