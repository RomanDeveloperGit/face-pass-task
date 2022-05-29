import styledComponents from 'styled-components';

export const TaskManagerSection = styledComponents.section`
	min-height: 100vh;

	background-color: #121619;
	
	padding: 100px 0;

	@media (max-width: 560px) {
		padding: 80px 0;
	}
`;

export const TaskManagerContainer = styledComponents.div`
	max-width: 1300px;

	padding: 0 20px;
	margin: 0 auto;

	@media (max-width: 360px) {
		padding: 0 8px;
	}
`;

export const TaskManagerTitle = styledComponents.h1`
	font-size: 40px;
	font-weight: bold;
	color: #ffffff;

	margin-bottom: 70px;

	@media (max-width: 560px) {
		font-size: 30px;

		margin-bottom: 50px;
	}
`;

export const TaskManagerDescription = styledComponents.p`
	font-size: 20px;
	color: #ffffff;

	line-height: 1.5;

	margin-bottom: 50px;

	@media (max-width: 560px) {
		font-size: 18px;

		margin-bottom: 30px;
	}
`;

export const TaskListContainer = styledComponents.div`
	display: flex;
	flex-direction: column;

	row-gap: 20px;

	margin-bottom: 50px;

	@media (max-width: 560px) {
		margin-bottom: 30px;
	}
`;