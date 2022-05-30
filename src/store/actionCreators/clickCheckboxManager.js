import { HAS_BEEN_SYSTEM_CLICK, HAS_BEEN_USER_CLICK } from '../actions/clickCheckboxManager';

const clickCheckboxManagerActionCreators = {
    systemClick: () => ({
        type: HAS_BEEN_SYSTEM_CLICK
    }),
    userClick: () => ({
        type: HAS_BEEN_USER_CLICK
    }),
};

export default clickCheckboxManagerActionCreators;