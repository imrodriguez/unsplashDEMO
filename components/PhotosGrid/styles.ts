import styled from "styled-components";

const Grid = styled.div<{layout:'grid' | 'list'}>`
    display: grid;
    grid-template-columns: ${props => props.layout === 'grid' ? 'repeat(auto-fill, minmax(20rem, 1fr))' : '1fr'};
    grid-gap: 1em;
    height: 80vh;
    overflow-x: hidden;
    overflow-y: scroll;
    padding-right: 2em;
    
    &::-webkit-scrollbar {
        width: 3px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.textSecondary};
    }

    @media only screen and (max-width: ${props => props.theme.sizes.tablet}px) {
        height: 100%;
        overflow-x: auto;
        overflow-y: auto;
        padding-right: 0;
    }
`;

const PhotoWrapper = styled.div`
    position: relative;
    width: 100%;
    min-height: 35em;

    img {
        object-fit: cover;
    }
`;

const UserInfo = styled.div`
    position: absolute;
    bottom: 1em;
    left: 1em;
    display: flex;
    align-items: center;
`;

const UserImage = styled.div`
    position: relative;
    width: 2em;
    height: 2em;

    img {
        object-fit: cover;
        border-radius: 5px;
    }
`;

const UserName = styled.p`
    padding-left: 1em;
    color: ${props => props.theme.colors.textPrimary};
`;

export {
    Grid,
    PhotoWrapper,
    UserInfo,
    UserImage,
    UserName
};