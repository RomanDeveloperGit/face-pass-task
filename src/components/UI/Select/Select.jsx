import { useState } from 'react';
import { SelectContainer, SelectOptionItem, SelectCurrentItem, SelectItems } from './Select.styled';

const Select = ({ options, currentItem, setCurrentItem }) => {
	const [isVisibleItems, setVisibleItems] = useState(false);
	const clickCurrentItem = () => setVisibleItems(!isVisibleItems);
	
	const changeOption = option => {
		setCurrentItem(option);
		setVisibleItems(false);
	};

	return (
		<SelectContainer>
			<SelectCurrentItem onClick={clickCurrentItem} isVisibleItems={isVisibleItems}>{currentItem.text}</SelectCurrentItem>
			{isVisibleItems && <SelectItems isVisibleItems={isVisibleItems}>
				{options.map(option => <SelectOptionItem isSelected={option.id === currentItem.id} onClick={() => changeOption(option)} key={option.id}>
					{option.text}
				</SelectOptionItem>)}
			</SelectItems>}
		</SelectContainer>
	);
};

export default Select;