import { useState } from 'react';
import Modal from '../UI/Modal/Modal';
import Input from '../UI/Input/Input';
import ModalButton from '../UI/ModalButton/ModalButton';
import { AddTaskForm, AddTaskRows, AddTaskRow, AddTaskRowDescription } from './AddTaskModal.styled';

const AddTaskModal = ({ setActive }) => {
	const [taskName, setTaskName] = useState('');

	// операции с деревом в useCallback!!!

	const changeInputTaskName = event => {
		setTaskName(event.target.value);
	};

	return (
		<Modal title="Добавить задачу" setActive={setActive}>
			<AddTaskForm>
				<AddTaskRows>
					<AddTaskRow>
						<AddTaskRowDescription>Родительский элемент</AddTaskRowDescription>
						<select>
							<option value="11">11</option>
							<option value="22">22</option>
						</select>
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