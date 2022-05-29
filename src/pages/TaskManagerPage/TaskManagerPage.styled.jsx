import styledComponents from 'styled-components';

export const TaskManagerSection = styledComponents.section`
	min-height: 100vh;

	background: #121619;
	
	padding: 100px 0;
`;

export const TaskManagerContainer = styledComponents.div`
	max-width: 1300px;

	padding: 0 20px;
	margin: 0 auto;
`;

export const TaskManagerTitle = styledComponents.h1`
	font-size: 40px;
	font-weight: bold;
	color: #ffffff;

	margin-bottom: 70px;
`;

export const TaskListContainer = styledComponents.div`
	display: flex;
	flex-direction: column;

	row-gap: 20px;
`;