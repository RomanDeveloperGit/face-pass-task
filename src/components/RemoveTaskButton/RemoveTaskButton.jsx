import { useState } from 'react';
import RemoveTaskModal from '../RemoveTaskModal/RemoveTaskModal';
import { RemoveButton } from './RemoveTaskButton.styled';
import basketSVG from '../../assets/images/icons/basket.svg';

const RemoveTaskButton = ({ task }) => {
	const [isActiveModal, setActiveModal] = useState(false);
	const showModal = () => setActiveModal(true);

	return (
		<>
			<RemoveButton disabled={!task.isCompleted} onClick={showModal}>
				<img src={basketSVG} alt="Basket icon" />
			</RemoveButton>
			{isActiveModal && <RemoveTaskModal task={task} setActive={setActiveModal} />}
		</>
	);
};

export default RemoveTaskButton;