import { combineReducers } from 'redux';

import sim from './sim/reducer';
import forces from './forces/reducer';

export default combineReducers({
  sim,
  forces,
});
