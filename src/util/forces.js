import * as d3 from 'd3';

export const FORCE_X = 'FORCE_X';
export const FORCE_Y = 'FORCE_Y';

const forceMapping = {
  FORCE_X: d3.forceX(),
  FORCE_Y: d3.forceY(),
}

export const forceOptions = {
  FORCE_X: [{ name: 'strength', type: 'number', default: 0.2}],
  FORCE_Y: [{ name: 'strength', type: 'number', default: 0.2}]
}

export function constructForce(forceAttrs) {
  const force = forceMapping[forceAttrs.type]

  return force;
}
