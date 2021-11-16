import { StyledTitle } from './styles';

interface Props {
    text: string;
}

const Title = ({ text }:Props) => (
    <StyledTitle>{text}</StyledTitle>
);

export { Title };