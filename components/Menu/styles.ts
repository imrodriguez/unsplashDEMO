import styled from "styled-components";

const Wrapper = styled.div`
    padding: 5em;
    border-right: 1px solid ${props => props.theme.colors.textSecondary};
    height: 100vh;

    @media only screen and (max-width: ${props => props.theme.sizes.tablet}px) {
        padding: 1em;
    }
`;

const CloseButton = styled.button`
    display: none;

    @media only screen and (max-width: ${props => props.theme.sizes.tablet}px) {
        background: none;
        border: none;
        display: block;
        padding: 0;
        padding-top: 1em;
        
        svg {
            font-size: ${props => props.theme.fontSizes.medium};
            fill: ${props => props.theme.colors.textPrimary};
        }
    }
`;

const UserInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.colors.textSecondary};
`;

const Avatar = styled.div`
    position: relative;
    width: 5em;
    height: 5em;

    img {
        object-fit: cover;
        border-radius: ${props => props.theme.borderRadius};
    }
`;

const Name = styled.p`
    margin-bottom: .3em;
    color: ${props => props.theme.colors.textPrimary};
`;

const UserName = styled.p`
    margin-top: 0;
    color: ${props => props.theme.colors.textSecondary};
`;

const Statistics = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2em;

    > div {
        text-align: center;

        > p:last-child {
            margin-top: .3em;
            color: ${props => props.theme.colors.textSecondary}; 
        }

        > p:first-child {
            color: ${props => props.theme.colors.textPrimary};
            margin-bottom: 0;
        }
    }
`;

const MenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 1em;
`;

const MenuItem = styled.div<{selected:boolean}>`
    display: flex;
    align-items: center;
    color: ${props => props.selected ? props.theme.colors.textPrimary : props.theme.colors.textSecondary};
    padding: .5em 0;
    cursor: pointer;

    &:hover {
        color: ${props => props.theme.colors.textPrimary};
    }

    svg {
        margin-right: .5em;
        font-size: ${props => props.theme.fontSizes.small};
    }
`;

export {
    Wrapper,
    UserInfoWrapper,
    CloseButton,
    Avatar,
    Name,
    UserName,
    Statistics,
    MenuWrapper,
    MenuItem
};