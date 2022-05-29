import { useState } from 'react';
import { SelectContainer, OptionElement, SelectCurrentItem, SelectItems } from './Select.styled';

const Select = ({ options }) => {
	const [isVisibleItems, setVisibleItems] = useState(false);
	const [currentItem, setCurrentItem] = useState(options[0]);

	const clickCurrentItem = () => {
		setVisibleItems(!isVisibleItems);
	};
	
	const changeOption = event => {
		setCurrentItem(event.target.innerText)
		setVisibleItems(false);
	};

	return (
		<SelectContainer>
			<SelectCurrentItem onClick={clickCurrentItem} isVisibleItems={isVisibleItems}>{currentItem}</SelectCurrentItem>
			{isVisibleItems && <SelectItems isVisibleItems={isVisibleItems}>
				{/* убрать потом key = index!!! */}
				{options.map((option, index) => <OptionElement onClick={changeOption} key={index}>{option}</OptionElement>)}
			</SelectItems>}
		</SelectContainer>
	);
};

export default Select;