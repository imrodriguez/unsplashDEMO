import styled from "styled-components";

const StyledButton = styled.button`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.textPrimary};
    border: none;
    border-radius: ${props => props.theme.borderRadius};
    padding: 1em 2em;
    cursor: pointer;
`;

export {
    StyledButton
};