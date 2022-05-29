import TaskCheckbox from '../TaskCheckbox/TaskCheckbox';
import TaskList from '../TaskList/TaskList';
import TaskRemoveButton from '../TaskRemoveButton/TaskRemoveButton';
import { TaskItemContainer } from './TaskItem.styled';

const TaskItem = ({ task, currentNestingLevel }) => {
	return (
		<>
			<TaskItemContainer currentNestingLevel={currentNestingLevel}>
				<TaskCheckbox task={task} />
				<TaskRemoveButton task={task} />
			</TaskItemContainer>
			{task.children && <TaskList tasks={task.children} currentNestingLevel={++currentNestingLevel} />}
		</>
	);
};

export default TaskItem;