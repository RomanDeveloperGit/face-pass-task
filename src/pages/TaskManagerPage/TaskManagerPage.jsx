import React from 'react';
import { useSelector } from 'react-redux';
import TaskList from '../../components/TaskList/TaskList';
import { TaskManagerContainer, TaskManagerSection, TaskManagerTitle } from './TaskManagerPage.styled';

const TaskManagerPage = () => {
	const tasks = useSelector(state => state.taskManager);

	return (
		<TaskManagerSection>
			<TaskManagerContainer>
				<TaskManagerTitle>ToDo-лист</TaskManagerTitle>
				<TaskList tasks={tasks} />
			</TaskManagerContainer>
		</TaskManagerSection>
	);
};

export default TaskManagerPage;