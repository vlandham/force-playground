import * as d3 from 'd3';

export const FORCE_X = 'FORCE_X';
export const FORCE_Y = 'FORCE_Y';

export const forcesConfig = {
  FORCE_X: {
    id: FORCE_X,
    name: 'forceX',
    func: d3.forceX,
    attrs:{ name: 'strength', type: 'number', default: 0.2}
  },
  FORCE_Y: {
    id: FORCE_Y,
    name: 'forceY',
    func: d3.forceY,
    attrs:{ name: 'strength', type: 'number', default: 0.2}
  },
};

export function getForceConfig(forceId) {
  return forcesConfig[forceId];
}

export function constructForce(forceAttrs) {
  const forceConfig = forcesConfig[forceAttrs.type]

  return forceConfig;
}
