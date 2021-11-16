import styled from "styled-components";

const Search = styled.div`
    display: flex;
    max-width: 20em;
    background-color: #25242A;
    border-radius: ${props => props.theme.borderRadius};
    color: ${props => props.theme.colors.textSecondary};

    input {
        background: none;
        border: none;
        outline: none;
        color: ${props => props.theme.colors.textPrimary};
        width: 100%;
        font-size: 16px;
    }

    svg {
        padding-left: .5em;
        padding-right: .3em;
        width: 1.3em;
        fill: ${props => props.theme.colors.textSecondary};
    }
`;

export { Search };