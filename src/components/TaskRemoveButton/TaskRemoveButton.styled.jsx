import styledComponents from 'styled-components';

export const RemoveButton = styledComponents.button`
    background-color: #CB4041;
    border-radius: 10px;

    opacity: ${props => props.disabled ? 0.7 : 1};

    padding: 8px;
`;