import React from 'react';
import { ButtonElement } from './Button.styled';

const Button = ({ children, ...props }) => {
	return (
		<ButtonElement {...props}>
			{children}
		</ButtonElement>
	);
};

export default Button;