import { handleActions } from 'redux-actions';

import { getForceConfig } from '../../util/forces';

export const initialState = {
  forces: []
}

const actionHandlers = {
  ADD_FORCE: (state, action) => ({
    forces: state.forces.concat([getForceConfig(action.payload)])
  }),
  REMOVE_FORCE: (state, action) => {

    // TODO: better way to do this?
    const forces = state.forces.slice();
    forces.splice(action.payload, 1)

    return {
      forces: forces
    };
  },
  UPDATE_FORCE: (state, action) => {
    const forces = state.forces.slice();
    const attr = forces[action.payload.forceIndex].attrs[action.payload.attrIndex];
    attr.default = action.payload.newValue;
    return {
      forces: forces
    }
  }
}

export default handleActions(actionHandlers, initialState);
