import { combineReducers } from 'redux';
import taskManagerReducer from './taskManager';

const rootReducer = combineReducers({
    taskManager: taskManagerReducer
});

export default rootReducer;