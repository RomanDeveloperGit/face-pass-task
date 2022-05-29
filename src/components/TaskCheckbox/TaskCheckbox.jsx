import { useState } from 'react';
import { useDispatch } from 'react-redux';
import taskManagerActionCreators from '../../store/actionCreators/taskManager';
import Checkbox from '../UI/Checkbox/Checkbox';
import { TaskCheckboxLabel, TaskCheckboxText } from './TaskCheckbox.styled';

const TaskCheckbox = ({ task }) => {
	const [isChecked, setChecked] = useState(task.isCompleted);
	const dispatch = useDispatch();

	const setCompleteStatusTask = () => {
		setChecked(!isChecked);
		dispatch(taskManagerActionCreators.setCompleteStatus(task.id));
	};
	
	return (
		<TaskCheckboxLabel>
			<Checkbox checked={isChecked} onChange={setCompleteStatusTask} />
			<TaskCheckboxText>{task.text}</TaskCheckboxText>
		</TaskCheckboxLabel>
	);
};

export default TaskCheckbox;