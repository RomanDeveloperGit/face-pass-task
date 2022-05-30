import styledComponents from 'styled-components';

export const RemoveTaskDescriptionBox = styledComponents.p`
	display: flex;
	flex-direction: column;

	margin-bottom: 60px;
`;

export const RemoveTaskDescriptionItem = styledComponents.span`
	font-size: 18px;
	color: #ffffff;

	@media (max-width: 460px) {
		font-size: 16px;
	}

	@media (max-width: 360px) {
		font-size: 14px;
	}
`;

export const RemoveTaskConfirmText = styledComponents(RemoveTaskDescriptionItem)`
	font-weight: 600;

	margin-top: 10px;
`;