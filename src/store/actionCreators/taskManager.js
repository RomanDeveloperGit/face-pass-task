import { ADD_TASK, SET_COMPLETE_STATUS_TASK, REMOVE_TASK } from '../actions/taskManager';

const taskManagerActionCreators = {
	add: (parentId, text) => ({
		type: ADD_TASK,
		payload: {
			
		}
	}),
	setCompleteStatus: id => ({
		type: SET_COMPLETE_STATUS_TASK,
		payload: {
			
		}
	}),
	remove: id => ({
		type: REMOVE_TASK,
		payload: {
			
		}
	}),
};

export default taskManagerActionCreators;