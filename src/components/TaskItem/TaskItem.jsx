import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import taskManagerActionCreators from '../../store/actionCreators/taskManager';
import tasksTree from '../../utils/tasksTree';
import TaskCheckbox from '../TaskCheckbox/TaskCheckbox';
import RemoveTaskButton from '../RemoveTaskButton/RemoveTaskButton';
import TaskList from '../TaskList/TaskList';
import { TaskItemContainer } from './TaskItem.styled';

const TaskItem = ({ parentTask, task, currentNestingLevel }) => {
	const dispatch = useDispatch();
	const sortedTaskChildren = useMemo(() => tasksTree.sort(task.children || []));

	useEffect(() => {
		if (!parentTask || !parentTask.children || !parentTask.children.length) return;

		if (parentTask.isCompleted && parentTask.children.some(child => !child.isCompleted)) {
			dispatch(taskManagerActionCreators.setCompleteStatus(parentTask.id, false));
		}
	}, []);
	
	return (
		<>
			<TaskItemContainer currentNestingLevel={currentNestingLevel}>
				<TaskCheckbox parentTask={parentTask} task={task} children={sortedTaskChildren} />
				<RemoveTaskButton task={task} />
			</TaskItemContainer>
			{task.children && <TaskList parentTask={task} tasks={sortedTaskChildren} currentNestingLevel={++currentNestingLevel} />}
		</>
	);
};

export default TaskItem;