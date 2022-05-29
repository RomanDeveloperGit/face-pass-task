import styledComponents from 'styled-components';

export const SelectContainer = styledComponents.div`
	position: relative;
`;

export const SelectCurrentItem = styledComponents.div`
	position: relative;

	cursor: pointer;

	color: #32B290;
	background-color: transparent;

	border: 1px solid #32B290;
	border-radius: 10px;

	${props => props.isVisibleItems && `
		color: #0B8968;
		border-color: #0B8968;

		border-bottom-color: transparent;
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	`}

	padding: 10px 60px 10px 24px;

	&::after {
		position: absolute;
		top: 50%;
		right: 24px;

		width: 14px;
		height: 14px;

		content: '';

		transform: translateY(-70%) rotate(45deg);

		border-right: 2px solid #32B290;
		border-bottom: 2px solid #32B290;

		transition: .25s;

		${props => props.isVisibleItems && `
			border-color: #0B8968;
			transform: translateY(-20%) rotate(225deg);
		`}
	}

	@media (max-width: 360px) {
		font-size: 14px;
	}
`;

export const SelectItems = styledComponents.div`
	position: absolute;
	top: 100%;
	left: 0;
	right: 0;

	max-height: 200px;
	overflow-y: scroll;

	${props => props.isVisibleItems && `border: 1px solid #32B290;`}
	background-color: #1D2125;

	padding: 10px 0;

	&::-webkit-scrollbar {
		width: 6px;
	}
	
	&::-webkit-scrollbar-thumb {
		background-color: #32B290;
		border-radius: 10px;
	}
`;

export const SelectOptionItem = styledComponents.div`
	cursor: pointer;

	color: #32B290;
	background-color: #1D2125;

	padding: 8px 24px;

	transition: .5s;

	${props => props.isSelected && `opacity: 0.5;`}

	&:hover {
		opacity: 0.5;
	}

	@media (max-width: 360px) {
		font-size: 14px;
	}
`;