import styledComponents from 'styled-components';
import Button from '../Button/Button';

export const ModalButtonElement = styledComponents(Button)`
	font-size: 16px;

	padding: 20px 40px;

	@media (max-width: 360px) {
		font-size: 14px;
	}
`;