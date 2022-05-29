import React from 'react';
import TaskList from '../../components/TaskList/TaskList';
import { TaskManagerContainer, TaskManagerSection, TaskManagerTitle } from './TaskManagerPage.styled';

const TaskManagerPage = () => {
    return (
        <TaskManagerSection>
            <TaskManagerContainer>
                <TaskManagerTitle>ToDo-лист</TaskManagerTitle>
                <TaskList />
            </TaskManagerContainer>
        </TaskManagerSection>
    );
};

export default TaskManagerPage;