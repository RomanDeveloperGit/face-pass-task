import styledComponents from 'styled-components';

export const ButtonElement = styledComponents.button`
	font-size: 20px;
	font-weight: 500;
	color: #ffffff;

	background-color: #32B290;
	border-radius: 15px;

	padding: 20px 60px;
	transition: .5s;

	&:hover {
		background-color: #0B8968;
	}

	@media (max-width: 560px) {
		font-size: 16px;
	}

	@media (max-width: 360px) {
		font-size: 14px;

		padding: 16px 40px;
	}
`;