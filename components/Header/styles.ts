import styled from "styled-components";

const HeaderWrapper = styled.header`
    padding: 1em 0;
`;

const HeaderDistribution = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
`;

const HamburguerToggle = styled.div`
    display: none;

    @media only screen and (max-width: ${props => props.theme.sizes.tablet}px) {
        display: block;
        flex-grow: 1;
        color: ${props => props.theme.colors.textPrimary};
        font-size: ${props => props.theme.fontSizes.small};
    }
`;

const HeaderSearch = styled.div`
    flex-grow: 1;

    @media only screen and (max-width: ${props => props.theme.sizes.tablet}px) {
        flex-grow: initial;
    }
`;

const HeaderActions = styled.div`
    display: flex;
    align-items: center;

    p {
        color: ${props => props.theme.colors.textPrimary};
        margin-right: 1em;
    }

    @media only screen and (max-width: ${props => props.theme.sizes.tablet}px) {
        display: none;
    }
`;

export {
    HeaderWrapper,
    HeaderDistribution,
    HamburguerToggle,
    HeaderSearch,
    HeaderActions
};