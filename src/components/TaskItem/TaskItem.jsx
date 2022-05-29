import TaskCheckbox from '../TaskCheckbox/TaskCheckbox';
import TaskList from '../TaskList/TaskList';
import TaskRemoveButton from '../TaskRemoveButton/TaskRemoveButton';
import { TaskItemContainer, TaskItemLabel, TaskItemText } from './TaskItem.styled';

const TaskItem = ({ task, currentNestingLevel }) => {
    return (
        <>
			<TaskItemContainer currentNestingLevel={currentNestingLevel}>
                <TaskItemLabel>
                    <TaskCheckbox id={task.id} checked={task.isCompleted} />
                    <TaskItemText>{task.text}</TaskItemText>
                </TaskItemLabel>
                <TaskRemoveButton id={task.id} disabled={!task.isCompleted} />
            </TaskItemContainer>
			{task.children && <TaskList tasks={task.children} currentNestingLevel={++currentNestingLevel} />}
		</>
    );
};

export default TaskItem;