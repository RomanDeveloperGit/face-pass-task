import React from 'react';

const TaskList = ({ tasks }) => {
	console.log(tasks);

	return (
		<>
			{tasks.map(task => <div>{task.text}</div>)}
		</>
	);
};

export default TaskList;