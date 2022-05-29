import { useDispatch, useSelector } from 'react-redux';
import TaskList from '../../components/TaskList/TaskList';
import Button from '../../components/UI/Button/Button';
import taskManagerActionCreators from '../../store/actionCreators/taskManager';
import { TaskListContainer, TaskManagerContainer, TaskManagerDescription, TaskManagerSection, TaskManagerTitle } from './TaskManagerPage.styled';

const TaskManagerPage = () => {
	const tasks = useSelector(state => state.taskManager);

	const addTask = () => {
		console.log('открыть модалку');
	};

	return (
		<TaskManagerSection>
			<TaskManagerContainer>
				<TaskManagerTitle>ToDo-лист</TaskManagerTitle>
				{tasks.length ?
					<TaskListContainer><TaskList tasks={tasks} currentNestingLevel={0} /></TaskListContainer>
					:
					<TaskManagerDescription>В настоящий момент задачи отсутствуют.</TaskManagerDescription>
				}
				<Button onClick={addTask}>Добавить задачу</Button>
			</TaskManagerContainer>
		</TaskManagerSection>
	);
};

export default TaskManagerPage;