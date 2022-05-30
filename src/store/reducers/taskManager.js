import tasksTree from '../../utils/tasksTree';
import { ADD_TASK, SET_COMPLETE_STATUS_TASK, REMOVE_TASK } from '../actions/taskManager';

const initialState = [
	{
		id: 0,
		text: 'Сделать математику',
		isCompleted: false,
		createdAt: new Date().getTime(),
		children: [
			{
				id: 1,
				text: 'Решить логарифмы',
				isCompleted: true,
				createdAt: new Date().getTime() + 1,
				completedAt: new Date().getTime() + 1
			},
			{
				id: 2,
				text: 'Тригонометрия',
				isCompleted: false,
				createdAt: new Date().getTime() + 2,
				children: [
					{
						id: 3,
						text: 'Решить задачи по методу вспомогательного угла',
						isCompleted: false,
						createdAt: new Date().getTime() + 3
					},
					{
						id: 4,
						text: 'Решить задачи по половинному углу',
						isCompleted: false,
						createdAt: new Date().getTime() + 4
					},
					{
						id: 5,
						text: 'Решить задачи олимпиадного уровня от школы XXX при МГТУ им. Баумана;Решить задачи олимпиадного уровня от школы XXX при МГТУ им. Баумана;Решить задачи олимпиадного уровня от школы XXX при МГТУ им. Баумана',
						isCompleted: false,
						createdAt: new Date().getTime() + 5
					},
					{
						id: 6,
						text: 'Изучить аналитику',
						isCompleted: true,
						createdAt: new Date().getTime() + 6,
						completedAt: new Date().getTime() + 6
					}
				]
			},
			{
				id: 7,
				text: 'Решить геометрию',
				isCompleted: false,
				createdAt: new Date().getTime() + 7
			}
		]
	},
	{
		id: 8,
		text: 'Убраться дома',
		isCompleted: false,
		createdAt: new Date().getTime() + 8
	}
];

// Все стейты обработать функцией, чекающей, выполнены ли все дочерние элементы; если да, то ставим автоматом галочку у родителя.

const taskManagerReducer = (state = initialState, action) => {
	console.log(state, action);
	
	switch (action.type) {
		case ADD_TASK: return tasksTree.add([...state], action.payload.parentText, action.payload.task);
		case SET_COMPLETE_STATUS_TASK: return tasksTree.setCompleteStatus([...state], action.payload);
		case REMOVE_TASK: return tasksTree.remove([...state], action.payload);
		default: return state;
	}
};

export default taskManagerReducer;