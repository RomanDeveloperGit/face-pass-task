import TaskCheckbox from '../TaskCheckbox/TaskCheckbox';
import TaskList from '../TaskList/TaskList';
import RemoveTaskButton from '../RemoveTaskButton/RemoveTaskButton';
import { TaskItemContainer } from './TaskItem.styled';

const TaskItem = ({ task, currentNestingLevel }) => {
	return (
		<>
			<TaskItemContainer currentNestingLevel={currentNestingLevel}>
				<TaskCheckbox task={task} />
				<RemoveTaskButton task={task} />
			</TaskItemContainer>
			{task.children && <TaskList tasks={task.children} currentNestingLevel={++currentNestingLevel} />}
		</>
	);
};

export default TaskItem;