import { StyledButton } from "./styles";

interface Props {
    text: string;
}

const Button = ({ text }:Props) => (
    <StyledButton>{text}</StyledButton>
);

export { Button };