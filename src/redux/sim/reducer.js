import { handleActions } from 'redux-actions';
import { simAttrs } from '../../util/forces';

export const initialState = {
  nodeCount: 150,
  attrs: simAttrs,
}

const actionHandlers = {
  CHANGE_NODE_COUNT: (state, action) => ({
    ...state,
    nodeCount: action.payload
  }),
  UPDATE_SIM: (state, action) => {
    const attrs = state.attrs.slice();
    const attr = attrs[action.payload.attrIndex];
    attr.default = action.payload.newValue;
    return {
      ...state,
      attrs: attrs
    }
  }
}

export default handleActions(actionHandlers, initialState);

// export default function nodes(state = initialState, action = {}) {
//   switch (action.type) {
//     case Actions.CHANGE_NODE_COUNT:
//       return {
//         ...state,
//         count: action.count,
//       };
//     default:
//       return state;
//   }
// };
