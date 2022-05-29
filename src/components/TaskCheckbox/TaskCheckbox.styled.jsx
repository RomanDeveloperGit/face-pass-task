import styledComponents from "styled-components";

export const TaskCheckboxLabel = styledComponents.label`
    width: 100%;

    cursor: pointer;
    
    display: flex;
    align-items: center;

    column-gap: 20px;
`;

export const TaskCheckboxText = styledComponents.span`
    font-size: 16px;
    line-height: 1.5;

    font-weight: 600;
    color: #ffffff;
`;