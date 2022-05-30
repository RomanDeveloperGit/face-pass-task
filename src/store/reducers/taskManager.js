import { ADD_TASK, SET_COMPLETE_STATUS_TASK, REMOVE_TASK } from '../actions/taskManager';
import tasksTree from '../../utils/tasksTree';

const initialState = [];

const taskManagerReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TASK: return tasksTree.add([...state], action.payload.parentId, action.payload.task);
		case SET_COMPLETE_STATUS_TASK: return tasksTree.setCompleteStatus([...state], action.payload.id, action.payload.isCompleted);
		case REMOVE_TASK: return tasksTree.remove([...state], action.payload);
		default: return state;
	}
};

export default taskManagerReducer;