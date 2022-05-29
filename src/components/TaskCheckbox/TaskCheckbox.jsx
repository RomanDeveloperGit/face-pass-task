import { useState } from "react";
import { useDispatch } from "react-redux";
import taskManagerActionCreators from "../../store/actionCreators/taskManager";
import Checkbox from "../UI/Checkbox/Checkbox";
import { TaskCheckboxLabel, TaskCheckboxText } from "./TaskCheckbox.styled";

const TaskCheckbox = ({ id, description, checked }) => {
	const [isChecked, setChecked] = useState(checked);
	const dispatch = useDispatch();

	const setCompleteStatusTask = () => {
		setChecked(!isChecked);
		dispatch(taskManagerActionCreators.setCompleteStatus(id));
	}
	
	return (
		<TaskCheckboxLabel>
			<Checkbox checked={isChecked} onChange={setCompleteStatusTask} />
			<TaskCheckboxText>{description}</TaskCheckboxText>
		</TaskCheckboxLabel>
	);
};

export default TaskCheckbox;