import { handleActions } from 'redux-actions';

export const initialState = {
  nodeCount: 30
}

const actionHandlers = {
  CHANGE_NODE_COUNT: (state, action) => ({
    nodeCount: action.payload
  })
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
