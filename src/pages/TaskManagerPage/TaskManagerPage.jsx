import { useSelector } from 'react-redux';
import TaskList from '../../components/TaskList/TaskList';
import { TaskListContainer, TaskManagerContainer, TaskManagerDescription, TaskManagerSection, TaskManagerTitle } from './TaskManagerPage.styled';

const TaskManagerPage = () => {
	const tasks = useSelector(state => state.taskManager);

	return (
		<TaskManagerSection>
			<TaskManagerContainer>
				<TaskManagerTitle>ToDo-лист</TaskManagerTitle>
				{tasks.length ?
					<TaskListContainer><TaskList tasks={tasks} currentNestingLevel={0} /></TaskListContainer>
					:
					<TaskManagerDescription>В настоящий момент задачи отсутствуют.</TaskManagerDescription>
				}
			</TaskManagerContainer>
		</TaskManagerSection>
	);
};

export default TaskManagerPage;