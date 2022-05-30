import { HAS_BEEN_SYSTEM_CLICK, HAS_BEEN_USER_CLICK } from '../actions/clickCheckboxManager';

const initialState = false;

const clickCheckboxManagerReducer = (state = initialState, action) => {
	switch (action.type) {
		case HAS_BEEN_SYSTEM_CLICK: return true;
		case HAS_BEEN_USER_CLICK: return false;
		default: return state;
	}
};

export default clickCheckboxManagerReducer;