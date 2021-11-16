import styled from "styled-components";

const Background = styled.div`
    background-color: ${(props) => props.theme.colors.background};
`;

const SectionsWrapper = styled.div<{openMobile:boolean}>`
    display: grid;
    grid-template-columns: 1fr 4fr;

    @media only screen and (max-width: ${props => props.theme.sizes.tablet}px) {
        display: block;

        > div:first-child {
            display: ${props => props.openMobile ? 'block' : 'none'};
        }
    }
`;

const MainSection = styled.div`
    padding: 0 5em;

    @media only screen and (max-width: ${props => props.theme.sizes.tablet}px) {
        padding: 0 1em;
    }
`;

const Content = styled.div`
    padding-top: 3em;

    @media only screen and (max-width: ${props => props.theme.sizes.tablet}px) {
        padding-top: 1em;
    }
`;

export {
    Background,
    SectionsWrapper,
    MainSection,
    Content
};