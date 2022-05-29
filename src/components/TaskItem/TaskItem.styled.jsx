import styledComponents from 'styled-components';

export const TaskItemContainer = styledComponents.div`
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;

    background-color: #1D2125;
    border-radius: 15px;

    padding: 30px 40px;
    margin-left: ${props => props.currentNestingLevel * 60}px;
`;