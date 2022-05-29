import styledComponents from 'styled-components';

export const AddTaskForm = styledComponents.form`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	row-gap: 60px;
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
`;

export const AddTaskRowDescription = styledComponents.p`
	font-size: 16px;
	color: #ffffff;
`;