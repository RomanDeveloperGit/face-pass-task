import { useDispatch } from 'react-redux';
import basketSVG from '../../assets/images/icons/basket.svg';
import taskManagerActionCreators from '../../store/actionCreators/taskManager';
import { RemoveButton } from './TaskRemoveButton.styled';

const TaskRemoveButton = ({ id, disabled }) => {
	const dispatch = useDispatch();
	const removeTask = () => dispatch(taskManagerActionCreators.remove(id));

	return (
		<RemoveButton disabled={disabled} onClick={removeTask}>
			<img src={basketSVG} alt="Basket icon" />
		</RemoveButton>
	);
};

export default TaskRemoveButton;