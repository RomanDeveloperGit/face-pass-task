import { generateId } from '../../utils/utils';
import { ADD_TASK, SET_COMPLETE_STATUS_TASK, REMOVE_TASK } from '../actions/taskManager';

const taskManagerActionCreators = {
	add: (parentText, text) => ({
		type: ADD_TASK,
		payload: {
			parentText,
			id: generateId(),
			text,
			isCompleted: false,
			createdAt: new Date().getTime()
		}
	}),
	setCompleteStatus: id => ({
		type: SET_COMPLETE_STATUS_TASK,
		payload: { id }
	}),
	remove: id => ({
		type: REMOVE_TASK,
		payload: { id }
	}),
};

export default taskManagerActionCreators;