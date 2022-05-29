import { useState } from 'react';
import { useSelector } from 'react-redux';
import TaskList from '../../components/TaskList/TaskList';
import Button from '../../components/UI/Button/Button';
import AddTaskModal from '../../components/AddTaskModal/AddTaskModal';
import { TaskListContainer, TaskManagerContainer, TaskManagerDescription, TaskManagerSection, TaskManagerTitle } from './TaskManagerPage.styled';

const TaskManagerPage = () => {
	const tasks = useSelector(state => state.taskManager);
	const [isActiveModal, setActiveModal] = useState(true);

	const addTask = () => {
		setActiveModal(true);
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
				{isActiveModal && <AddTaskModal setActive={setActiveModal} />}
			</TaskManagerContainer>
		</TaskManagerSection>
	);
};

export default TaskManagerPage;