import { useState } from 'react';
import { CheckboxElement } from './Checkbox.styled';

const Checkbox = props => {
	return (
		<CheckboxElement type="checkbox" {...props} />
	);
};

export default Checkbox;