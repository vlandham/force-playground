import * as d3 from 'd3';

export function makeNodes(count) {
  return d3.range(count).map(function(i) {
    return {
      r: Math.random() * 14 + 4
    };
  })
}
