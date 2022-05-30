import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import taskManagerActionCreators from '../../store/actionCreators/taskManager';
import clickCheckboxManagerActionCreators from '../../store/actionCreators/clickCheckboxManager';
import Checkbox from '../UI/Checkbox/Checkbox';
import { TaskCheckboxLabel, TaskCheckboxText } from './TaskCheckbox.styled';

const TaskCheckbox = ({ parentTask, task, children }) => {
	const dispatch = useDispatch();
	const isSystemClickCheckbox = useSelector(state => state.isSystemClickCheckbox);
	
	const setTaskCompleteStatus = () => {
		dispatch(clickCheckboxManagerActionCreators.userClick());
		dispatch(taskManagerActionCreators.setCompleteStatus(task.id, !task.isCompleted));
	}

	useEffect(() => {
		if (parentTask && parentTask.children && parentTask.children.length) {
			if (!parentTask.isCompleted && parentTask.children.every(child => child.isCompleted)) {
				dispatch(taskManagerActionCreators.setCompleteStatus(parentTask.id, true));
			}
			else if (parentTask.isCompleted && parentTask.children.some(child => !child.isCompleted)) {
				dispatch(taskManagerActionCreators.setCompleteStatus(parentTask.id, false));
				dispatch(clickCheckboxManagerActionCreators.systemClick());
			}
		}

		if (children && children.length && !isSystemClickCheckbox) {
			children.forEach(child => {
				dispatch(taskManagerActionCreators.setCompleteStatus(child.id, task.isCompleted));
			});
		}
	}, [task.isCompleted]);

	return (
		<TaskCheckboxLabel>
			<Checkbox checked={task.isCompleted} onChange={setTaskCompleteStatus} />
			<TaskCheckboxText isCompleted={task.isCompleted}>{task.text}</TaskCheckboxText>
		</TaskCheckboxLabel>
	);
};

export default TaskCheckbox;