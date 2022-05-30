import { combineReducers } from 'redux';
import taskManagerReducer from './taskManager';

const rootReducer = combineReducers({
	tasks: taskManagerReducer
});

export default rootReducer;