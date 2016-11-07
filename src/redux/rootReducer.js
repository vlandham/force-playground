import { combineReducers } from 'redux';

import nodes from './nodes/reducer';
import forces from './forces/reducer';

export default combineReducers({
  nodes,
  forces,
});
