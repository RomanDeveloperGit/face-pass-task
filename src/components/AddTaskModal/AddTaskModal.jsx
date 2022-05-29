import { useState } from 'react';
import Modal from '../UI/Modal/Modal';
import Input from '../UI/Input/Input';
import ModalButton from '../UI/ModalButton/ModalButton';
import { AddTaskForm, AddTaskRows, AddTaskRow, AddTaskRowDescription } from './AddTaskModal.styled';
import Select from '../UI/Select/Select';
import { useDispatch } from 'react-redux';
import taskManagerActionCreators from '../../store/actionCreators/taskManager';

const testOptions = [
	{
		id: 1,
		text: 'Сделать математику'
	},
	{
		id: 2,
		text: 'Решить логарифмы'
	},
	{
		id: 3,
		text: 'Тригонометрия'
	},
	{
		id: 4,
		text: 'Решить задачи по методу вспомогательного угла'
	},
	{
		id: 5,
		text: 'Решить задачи по половинному углу'
	},
	{
		id: 6,
		text: 'Решить задачи олимпиадного уровня от школы XXX при МГТУ им. Баумана;Решить задачи олимпиадного уровня от школы XXX при МГТУ им. Баумана;Решить задачи олимпиадного уровня от школы XXX при МГТУ им. Баумана'
	},
	{
		id: 7,
		text: 'Изучить аналитику'
	}
];

const AddTaskModal = ({ setActive }) => {
	const dispatch = useDispatch();
	const [parentTask, setParentTask] = useState(testOptions[0]);
	const [taskName, setTaskName] = useState('');

	// операции с деревом в useCallback!!!

	const changeInputTaskName = event => {
		setTaskName(event.target.value);
	};

	const addTask = event => {
		event.preventDefault();

		dispatch(taskManagerActionCreators.add(parentTask.text, taskName));
	}

	return (
		<Modal title="Добавить задачу" setActive={setActive}>
			<AddTaskForm onSubmit={addTask}>
				<AddTaskRows>
					<AddTaskRow>
						<AddTaskRowDescription>Родительский элемент</AddTaskRowDescription>
						<Select options={testOptions} currentItem={parentTask} setCurrentItem={setParentTask} />
					</AddTaskRow>
					<AddTaskRow>
						<AddTaskRowDescription>Текст задачи</AddTaskRowDescription>
						<Input value={taskName} onChange={changeInputTaskName} placeholder="Название" />
					</AddTaskRow>
				</AddTaskRows>
				<ModalButton>Добавить</ModalButton>
			</AddTaskForm>
		</Modal>
	);
};

export default AddTaskModal;