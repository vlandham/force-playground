import { createAction } from 'redux-actions';

export const changeCount = createAction('CHANGE_NODE_COUNT');

export const restartSim = createAction('RESTART_SIM');

export const updateSim = createAction('UPDATE_SIM');
