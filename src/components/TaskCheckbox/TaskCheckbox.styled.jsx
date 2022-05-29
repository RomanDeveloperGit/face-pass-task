import styledComponents from "styled-components";

export const TaskCheckboxLabel = styledComponents.label`
    width: 100%;
    
    display: flex;
    align-items: center;

    column-gap: 20px;
`;

export const TaskCheckboxText = styledComponents.span`
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
`;