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
    const attr = state.forces[action.payload.forceIndex].attrs[action.payload.attrIndex];
    console.log(attr);
    return {
    }
  }
}

export default handleActions(actionHandlers, initialState);
