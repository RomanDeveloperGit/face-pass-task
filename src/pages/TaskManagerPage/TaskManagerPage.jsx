import { useSelector } from 'react-redux';
import TaskList from '../../components/TaskList/TaskList';
import { TaskListContainer, TaskManagerContainer, TaskManagerSection, TaskManagerTitle } from './TaskManagerPage.styled';

const TaskManagerPage = () => {
	const tasks = useSelector(state => state.taskManager);

	return (
		<TaskManagerSection>
			<TaskManagerContainer>
				<TaskManagerTitle>ToDo-лист</TaskManagerTitle>
				<TaskListContainer>
					<TaskList tasks={tasks} currentNestingLevel={0} />
				</TaskListContainer>
			</TaskManagerContainer>
		</TaskManagerSection>
	);
};

export default TaskManagerPage;