import { combineReducers } from 'redux';
import taskManagerReducer from './taskManager';
import clickCheckboxManagerReducer from './clickCheckboxManager';

const rootReducer = combineReducers({
	tasks: taskManagerReducer,
	isSystemClickCheckbox: clickCheckboxManagerReducer
});

export default rootReducer;