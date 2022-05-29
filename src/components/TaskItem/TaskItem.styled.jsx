import styledComponents from 'styled-components';

export const TaskItemContainer = styledComponents.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    column-gap: 20px;

    background-color: #1D2125;
    border-radius: 15px;

    padding: 20px 40px;
    margin-left: ${props => props.currentNestingLevel * 60}px;
`;