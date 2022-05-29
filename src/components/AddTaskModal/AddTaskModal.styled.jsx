import styledComponents from 'styled-components';

export const AddTaskForm = styledComponents.form`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	row-gap: 60px;

	@media (max-width: 460px) {
		row-gap: 40px;
	}
`;

export const AddTaskRows = styledComponents.div`
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: space-between;

	row-gap: 30px;
`;

export const AddTaskRow = styledComponents.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);

	gap: 16px 20px;

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
	}
`;

export const AddTaskRowDescription = styledComponents.p`
	display: inline-flex;
	align-items: center;

	font-size: 16px;
	color: #ffffff;

	@media (max-width: 360px) {
		font-size: 14px;
	}
`;