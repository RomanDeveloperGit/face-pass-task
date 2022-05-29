import styledComponents from 'styled-components';

export const InputElement = styledComponents.input`
	font-size: 16px;
	color: #32B290;

	border: 1px solid #32B290;
	border-radius: 10px;

	padding: 10px 24px;

	transition: .5s;

	&:focus {
		color: #0B8968;
		border-color: #0B8968;
	}
`;