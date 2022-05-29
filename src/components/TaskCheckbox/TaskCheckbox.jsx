import { useState } from "react";
import { useDispatch } from "react-redux";
import taskManagerActionCreators from "../../store/actionCreators/taskManager";
import Checkbox from "../UI/Checkbox/Checkbox";

const TaskCheckbox = ({ id, checked }) => {
    const [isChecked, setChecked] = useState(checked);
    const dispatch = useDispatch();

	const setCompleteStatusTask = () => {
        setChecked(!isChecked);
        dispatch(taskManagerActionCreators.setCompleteStatus(id));
    }
    
    return (
        <Checkbox checked={isChecked} onChange={setCompleteStatusTask} />
    );
};

export default TaskCheckbox;