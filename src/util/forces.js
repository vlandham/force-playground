import * as d3 from 'd3';

export const forceKeys = [
  'FORCE_X',
  'FORCE_Y',
  'FORCE_CENTER',
  'FORCE_COLLIDE',
  'FORCE_MANY_BODY'
];

export const simAttrs = [
  { name: 'velocityDecay', type: 'number', default: 0.4, min: 0.0, max: 1.0, rate: 0.01 },
  { name: 'alphaDecay', type: 'number', default: 0.0228, min: 0.0, max: 1.0, rate: 0.01 }
]



export const forcesConfig = {
  FORCE_X: {
    id: 'FORCE_X',
    name: 'forceX',
    func: d3.forceX,
    attrs: [
      { name: 'strength', type: 'number', default: 0.2, min: 0.0, max: 1.0, rate: 0.01 },
      { name: 'x', type: 'number', default: 0, min: -200, max: 200, rate: 20 }
    ]
  },
  FORCE_Y: {
    id: 'FORCE_Y',
    name: 'forceY',
    func: d3.forceY,
    attrs: [
      { name: 'strength', type: 'number', default: 0.2, min: 0.0, max: 1.0, rate: 0.01 },
      { name: 'y', type: 'number', default: 0, min: -200, max: 200, rate: 20 }
    ]
  },
  FORCE_CENTER: {
    id: 'FORCE_CENTER',
    name: 'forceCenter',
    func: d3.forceCenter,
    attrs:[
      { name: 'x', type: 'number', default: 0, min: -200, max: 200, rate: 20 },
      { name: 'y', type: 'number', default: 0, min: -200, max: 200, rate: 20 }

    ]
  },
  FORCE_COLLIDE: {
    id: 'FORCE_COLLIDE',
    name: 'forceCollide',
    func: d3.forceCollide,
    attrs: [

      { name: 'strength', type: 'number', default: 0.7, min: 0.0, max: 1.0, rate: 0.01 },
      { name: 'radius', type: 'number', default: 10, min: 0, max: 50, rate: 5 },
      { name: 'iterations', type: 'number', default: 1, min: 0, max: 10, rate: 1 }
    ]
  },
  FORCE_MANY_BODY: {
    id: 'FORCE_MANY_BODY',
    name: 'forceManyBody',
    func: d3.forceManyBody,
    attrs: [
      { name: 'strength', type: 'number', default: -30, min: -270, max: 270, rate: 30 },
      { name: 'theta', type: 'number', default: 0.9, min: 0, max: 1, rate: 0.1 }
    ]
  },
};

export function getForceConfig(forceId) {
  return Object.assign({}, forcesConfig[forceId]);
}

function getAttrValue(attr) {
  return +attr.default;
}

export function constructForce(forceAttrs) {
  const forceConfig = forcesConfig[forceAttrs.id];

  const force = forceConfig.func.call();

  // forceConfig.attrs.forEach((attr) => {
  //   force[attr.name](getAttrValue(attr));
  // });

  applyAttrs(force, forceConfig.attrs);

  return force;
}

export function applyAttrs(instance, attrs) {
  attrs.forEach((attr) => {
    instance[attr.name](getAttrValue(attr));
  });
}
