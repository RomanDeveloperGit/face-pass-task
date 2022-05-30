import styledComponents from 'styled-components';

export const TaskItemContainer = styledComponents.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	column-gap: 20px;

	background-color: #1D2125;
	border-radius: 15px;

	padding: 20px 40px;
	margin-left: ${props => (props.currentNestingLevel - 1) * 60}px;

	@media (max-width: 720px) {
		padding: 20px;
	}

	@media (max-width: 560px) {
		margin-left: ${props => (props.currentNestingLevel - 1) * 40}px;
	}

	@media (max-width: 460px) {
		margin-left: ${props => (props.currentNestingLevel - 1) * 20}px;
	}

	@media (max-width: 420px) {
		column-gap: 16px;
	}
`;