import basketSVG from '../../assets/images/icons/basket.svg';
import { RemoveButton } from './TaskRemoveButton.styled';

const TaskRemoveButton = ({ disabled }) => {
    return (
        <RemoveButton disabled={disabled}>
            <img src={basketSVG} alt="Basket icon" />
        </RemoveButton>
    );
};

export default TaskRemoveButton;