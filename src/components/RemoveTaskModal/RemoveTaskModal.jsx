import { useDispatch } from 'react-redux';
import taskManagerActionCreators from '../../store/actionCreators/taskManager';
import { getDateLocaleString } from '../../utils/utils';
import Modal from '../UI/Modal/Modal';
import ModalButton from '../UI/ModalButton/ModalButton';
import { RemoveTaskConfirmText, RemoveTaskDescriptionBox, RemoveTaskDescriptionItem } from './RemoveTaskModal.styled';

const RemoveTaskModal = ({ task, setActive }) => {
	const dispatch = useDispatch();
	const removeTask = () => {
		dispatch(taskManagerActionCreators.remove(task.id));
		setActive(false);
	};
	
	return (
		<Modal title="Удаление задачи" setActive={setActive}>
			<RemoveTaskDescriptionBox>
				<RemoveTaskDescriptionItem>Задача: {task.text}</RemoveTaskDescriptionItem>
				<RemoveTaskDescriptionItem>Создана: {getDateLocaleString(task.createdAt)}</RemoveTaskDescriptionItem>
				{task.completedAt && <RemoveTaskDescriptionItem>Последнее изменение: {getDateLocaleString(task.completedAt)}</RemoveTaskDescriptionItem>}
				<RemoveTaskConfirmText>Вы уверены, что хотите удалить данную задачу? Дальнейшее восстановление невозможно.</RemoveTaskConfirmText>
			</RemoveTaskDescriptionBox>
			<ModalButton onClick={removeTask}>Удалить</ModalButton>
		</Modal>
	);
};

export default RemoveTaskModal;