import styledComponents from 'styled-components';

export const ModalPage = styledComponents.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	z-index: 9;

	content: '';

	background-color: rgba(0, 0, 0, 0.75);
`;

export const ModalContainer = styledComponents.div`
	position: fixed;
	top: 50%;
	left: 50%;

	max-width: 740px;
	width: 95%;

	transform: translate(-50%, -50%);

	background-color: #1D2125;
	border-radius: 15px;

	padding: 50px 60px;
`;

export const ModalTop = styledComponents.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	margin-bottom: 50px;
`;

export const ModalTitle = styledComponents.h2`
	font-size: 22px;
	font-weight: 600;
	color: #ffffff;
`;

export const ModalCloseButton = styledComponents.img`
	cursor: pointer;

	transition: .5s;

	&:hover {
		opacity: 0.6;
	}
`;