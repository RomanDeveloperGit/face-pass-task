import { ADD_TASK, SET_COMPLETE_STATUS_TASK, REMOVE_TASK } from '../actions/taskManager';

const initialState = [
	{
        id: 0,
        text: '1',
        children: [
            {
                id: 1,
                text: '1 1'
            },
            {
                id: 2,
                text: '1 2',
                children: [
                    {
                        id: 3,
                        text: '1 2 1'
                    },
                    {
                        id: 4,
                        text: '1 2 2'
                    },
                    {
                        id: 5,
                        text: '1 2 3'
                    },
                    {
                        id: 6,
                        text: '1 2 4'
                    }
                ]
            },
            {
                id: 7,
                text: '1 3'
            }
		]
    },
    {
        id: 8,
        text: '2'
    }
];

const taskManagerReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TASK: return state;
		case SET_COMPLETE_STATUS_TASK: return state;
		case REMOVE_TASK: return state;
		default: return state;
	}
};

export default taskManagerReducer;