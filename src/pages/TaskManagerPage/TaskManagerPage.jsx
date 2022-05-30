import { useState } from 'react';
import { useSelector } from 'react-redux';
import TaskList from '../../components/TaskList/TaskList';
import Button from '../../components/UI/Button/Button';
import AddTaskModal from '../../components/AddTaskModal/AddTaskModal';
import { TaskListContainer, TaskManagerContainer, TaskManagerDescription, TaskManagerSection, TaskManagerTitle } from './TaskManagerPage.styled';
import tasksTree from '../../utils/tasksTree';

const TaskManagerPage = () => {
	const tasks = useSelector(state => state.tasks);
	const [isActiveModal, setActiveModal] = useState(false);

	const addTask = () => setActiveModal(true);

	return (
		<TaskManagerSection>
			<TaskManagerContainer>
				<TaskManagerTitle>ToDo-лист</TaskManagerTitle>
				{tasks.length ?
					<TaskListContainer><TaskList tasks={tasksTree.doubleSort(tasks)} currentNestingLevel={1} /></TaskListContainer>
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