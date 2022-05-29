import React from 'react';
import TaskList from '../TaskList/TaskList';
import { TaskItemContainer } from './TaskItem.styled';

const TaskItem = ({ task, currentNestingLevel }) => {
    return (
        <>
			<TaskItemContainer currentNestingLevel={currentNestingLevel}>{task.text}</TaskItemContainer>
			{task.children && <TaskList tasks={task.children} currentNestingLevel={++currentNestingLevel} />}
		</>
    );
};

export default TaskItem;