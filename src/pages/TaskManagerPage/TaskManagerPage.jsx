import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import tasksTree from '../../utils/tasksTree';
import Button from '../../components/UI/Button/Button';
import AddTaskModal from '../../components/AddTaskModal/AddTaskModal';
import TaskList from '../../components/TaskList/TaskList';
import { TaskListContainer, TaskManagerContainer, TaskManagerDescription, TaskManagerSection, TaskManagerTitle } from './TaskManagerPage.styled';

const TaskManagerPage = () => {
	const tasks = useSelector(state => state.tasks);
	const sortedTasks = useMemo(() => tasksTree.sort(tasks));

	const [isActiveModal, setActiveModal] = useState(false);
	const addTask = () => setActiveModal(true);

	return (
		<TaskManagerSection>
			<TaskManagerContainer>
				<TaskManagerTitle>ToDo-лист</TaskManagerTitle>
				{tasks.length ?
					<TaskListContainer><TaskList parentTask={null} tasks={sortedTasks} currentNestingLevel={1} /></TaskListContainer>
					:
					<TaskManagerDescription>В настоящий момент задачи отсутствуют.</TaskManagerDescription>
				}
				<Button onClick={addTask}>Добавить задачу</Button>
				{isActiveModal && <AddTaskModal setActive={setActiveModal} />}
			</TaskManagerContainer>
		</TaskManagerSection>
	);
};

export default TaskManagerPage;