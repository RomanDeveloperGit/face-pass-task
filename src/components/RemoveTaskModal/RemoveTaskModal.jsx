import { useDispatch } from 'react-redux';
import taskManagerActionCreators from '../../store/actionCreators/taskManager';
import Modal from '../UI/Modal/Modal';
import ModalButton from '../UI/ModalButton/ModalButton';
import { RemoveTaskDescriptionBox, RemoveTaskDescriptionItem } from './RemoveTaskModal.styled';

const RemoveTaskModal = ({ task, setActive }) => {
	const dispatch = useDispatch();
	const removeTask = () => dispatch(taskManagerActionCreators.remove(task.id));
	
	return (
		<Modal title="Удаление задачи" setActive={setActive}>
			<RemoveTaskDescriptionBox>
				<RemoveTaskDescriptionItem>Задача: {task.text}</RemoveTaskDescriptionItem>
				<RemoveTaskDescriptionItem>Создана: {new Date(task.createdAt).toLocaleString('ca')}</RemoveTaskDescriptionItem>
				<RemoveTaskDescriptionItem>Вы уверены, что хотите удалить данную задачу? Дальнейшее восстановление невозможно.</RemoveTaskDescriptionItem>
			</RemoveTaskDescriptionBox>
			<ModalButton onClick={removeTask}>Удалить</ModalButton>
		</Modal>
	);
};

export default RemoveTaskModal;