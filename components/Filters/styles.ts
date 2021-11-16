import styled from "styled-components";

const FiltersWrapper = styled.div`
    display: flex;
    padding: 1em 0;
`;

const FilterButton = styled.span<{selected:boolean}>`
    color: ${props => props.selected ? props.theme.colors.textPrimary : props.theme.colors.textSecondary};
    margin-right: 1em;
    cursor: pointer;

    &:hover {
        color: ${props => props.theme.colors.textPrimary};
    }

    @media only screen and (max-width: ${props => props.theme.sizes.tablet}px) {
        margin-bottom: .5em;
    }
`;

const FiltersLinks = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const LayoutButtons = styled.div`
    margin-left: auto;
    color: ${props => props.theme.colors.textPrimary};
    display: flex;

    svg {
        font-size: ${props => props.theme.fontSizes.small};
        margin-left: .7em;
        cursor: pointer;
    }

    @media only screen and (max-width: ${props => props.theme.sizes.tablet}px) {
        display: none;
    }
`;

export {
    FiltersWrapper,
    FilterButton,
    LayoutButtons,
    FiltersLinks
};