import { ModalButtonElement } from './ModalButton.styled';

const ModalButton = ({ children, ...props }) => {
    return (
        <ModalButtonElement {...props}>{children}</ModalButtonElement>
    );
};

export default ModalButton;