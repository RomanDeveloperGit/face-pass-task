import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import taskManagerActionCreators from '../../store/actionCreators/taskManager';
import tasksTree from '../../utils/tasksTree';
import { TASK_NO_PARENT_ID, TASK_NO_PARENT_TEXT } from '../../utils/utils';
import Modal from '../UI/Modal/Modal';
import Input from '../UI/Input/Input';
import Select from '../UI/Select/Select';
import ModalButton from '../UI/ModalButton/ModalButton';
import { AddTaskForm, AddTaskRows, AddTaskRow, AddTaskRowDescription } from './AddTaskModal.styled';

const AddTaskModal = ({ setActive }) => {
	const dispatch = useDispatch();
	const tasks = useSelector(state => state.tasks);
	const options = [
		{
			id: TASK_NO_PARENT_ID,
			text: TASK_NO_PARENT_TEXT
		},
		...tasksTree.getTasksArray(tasks)
	];

	const [parentTask, setParentTask] = useState(options[0]);
	const [taskText, setTaskText] = useState('');

	const changeInputTaskText = event => setTaskText(event.target.value);
	const addTask = event => {
		event.preventDefault();
		
		if (!taskText.trim()) return;

		dispatch(taskManagerActionCreators.add(parentTask.id, taskText.trim()));
		setActive(false);
	};

	return (
		<Modal title="Добавить задачу" setActive={setActive}>
			<AddTaskForm onSubmit={addTask}>
				<AddTaskRows>
					<AddTaskRow>
						<AddTaskRowDescription>Родительский элемент</AddTaskRowDescription>
						<Select options={options} currentItem={parentTask} setCurrentItem={setParentTask} />
					</AddTaskRow>
					<AddTaskRow>
						<AddTaskRowDescription>Текст задачи</AddTaskRowDescription>
						<Input value={taskText} onChange={changeInputTaskText} placeholder="Название" />
					</AddTaskRow>
				</AddTaskRows>
				<ModalButton>Добавить</ModalButton>
			</AddTaskForm>
		</Modal>
	);
};

export default AddTaskModal;