import styledComponents from 'styled-components';

export const RemoveButton = styledComponents.button`
	width: 36px;
	height: 36px;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: #CB4041;
	border-radius: 10px;

	opacity: ${props => props.disabled ? 0.7 : 1};
	transition: .5s;

	${props => !props.disabled && `
		&:hover {
			background-color: #C22223;
		}
	`}
`;