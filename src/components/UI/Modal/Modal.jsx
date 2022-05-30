import { ModalCloseButton, ModalContainer, ModalPage, ModalTitle, ModalTop } from './Modal.styled';
import closeSVG from '../../../assets/images/icons/close.svg';

const Modal = ({ title, children, setActive }) => {
	const hideModal = () => setActive(false);

	return (
		<ModalPage>
			<ModalContainer>
				<ModalTop>
					<ModalTitle>{title}</ModalTitle>
					<ModalCloseButton src={closeSVG} onClick={hideModal} />
				</ModalTop>
				{children}
			</ModalContainer>
		</ModalPage>
	);
};

export default Modal;