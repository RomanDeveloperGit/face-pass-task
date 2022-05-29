import { useState } from 'react';
import Modal from '../UI/Modal/Modal';
import Input from '../UI/Input/Input';
import ModalButton from '../UI/ModalButton/ModalButton';
import { AddTaskForm, AddTaskRows, AddTaskRow, AddTaskRowDescription, SelectTest, OptionTest } from './AddTaskModal.styled';
import Select from '../UI/Select/Select';

const AddTaskModal = ({ setActive }) => {
	const [taskName, setTaskName] = useState('');

	// операции с деревом в useCallback!!!

	const changeInputTaskName = event => {
		setTaskName(event.target.value);
	};

	const testOptions = [
		'Сделать математику',
		'Решить логарифмы',
		'Тригонометрия',
		'Решить задачи по методу вспомогательного угла',
		'Решить задачи по половинному углу',
		'Решить задачи олимпиадного уровня от школы XXX при МГТУ им. Баумана;Решить задачи олимпиадного уровня от школы XXX при МГТУ им. Баумана;Решить задачи олимпиадного уровня от школы XXX при МГТУ им. Баумана',
		'Изучить аналитику'
	];


	return (
		<Modal title="Добавить задачу" setActive={setActive}>
			<AddTaskForm>
				<AddTaskRows>
					<AddTaskRow>
						<AddTaskRowDescription>Родительский элемент</AddTaskRowDescription>
						<Select options={testOptions} />
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