import styledComponents from 'styled-components';

export const TaskItemContainer = styledComponents.div`
    display: flex;
    align-items: center;

    column-gap: 20px;

    background-color: #1D2125;
    border-radius: 15px;

    padding: 30px 40px;
    margin-left: ${props => props.currentNestingLevel * 60}px;
`;

export const TaskItemLabel = styledComponents.label`
    display: flex;
    align-items: center;

    column-gap: 20px;

    margin-right: auto;
`;

export const TaskItemText = styledComponents.span`
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
`;