import { ADD_TASK, SET_COMPLETE_STATUS_TASK, REMOVE_TASK } from '../actions/taskManager';
import { generateId } from '../../utils/utils';

const taskManagerActionCreators = {
	add: (parentId, text) => ({
		type: ADD_TASK,
		payload: {
			parentId,
			task: {
				id: generateId(),
				text,
				isCompleted: false,
				createdAt: new Date().getTime()
			}
		}
	}),
	setCompleteStatus: (id, isCompleted) => ({
		type: SET_COMPLETE_STATUS_TASK,
		payload: {
			id,
			isCompleted
		}
	}),
	remove: id => ({
		type: REMOVE_TASK,
		payload: id
	})
};

export default taskManagerActionCreators;