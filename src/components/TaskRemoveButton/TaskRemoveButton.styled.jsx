import styledComponents from 'styled-components';

export const RemoveButton = styledComponents.button`
	background-color: #CB4041;
	border-radius: 10px;

	opacity: ${props => props.disabled ? 0.7 : 1};
	transition: .5s;

	padding: 8px;

	${props => !props.disabled && `
		&:hover {
			background-color: #C22223;
		}
	`}
`;