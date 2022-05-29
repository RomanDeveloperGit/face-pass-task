import { CheckboxContainer, CheckboxVisual } from "./Checkbox.styled";

const Checkbox = props => {
	return (
		<CheckboxContainer>
			<input type="checkbox" {...props} />
			<CheckboxVisual />
		</CheckboxContainer>
	);
};

export default Checkbox;