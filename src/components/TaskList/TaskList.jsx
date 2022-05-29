import React from 'react';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({ tasks, currentNestingLevel }) => {
	return (
		<>
			{tasks.map(task => <TaskItem task={task} currentNestingLevel={currentNestingLevel} key={task.id} />)}
		</>
	);
};

export default TaskList;