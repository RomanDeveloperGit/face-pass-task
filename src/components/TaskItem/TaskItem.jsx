import TaskCheckbox from '../TaskCheckbox/TaskCheckbox';
import TaskList from '../TaskList/TaskList';
import TaskRemoveButton from '../TaskRemoveButton/TaskRemoveButton';
import { TaskItemContainer, TaskItemLabel, TaskItemText } from './TaskItem.styled';

const TaskItem = ({ task, currentNestingLevel }) => {
	return (
		<>
			<TaskItemContainer currentNestingLevel={currentNestingLevel}>
				<TaskCheckbox id={task.id} description={task.text} checked={task.isCompleted} />
				<TaskRemoveButton id={task.id} disabled={!task.isCompleted} />
			</TaskItemContainer>
			{task.children && <TaskList tasks={task.children} currentNestingLevel={++currentNestingLevel} />}
		</>
	);
};

export default TaskItem;