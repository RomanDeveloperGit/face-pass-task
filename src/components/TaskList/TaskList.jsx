import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({ parentTask, tasks, currentNestingLevel }) => {
	return (
		<>
			{tasks.map(task => <TaskItem parentTask={parentTask} task={task} currentNestingLevel={currentNestingLevel} key={task.id} />)}
		</>
	);
};

export default TaskList;