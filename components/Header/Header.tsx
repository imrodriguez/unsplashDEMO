import { HeaderWrapper, HeaderDistribution, HamburguerToggle, HeaderSearch, HeaderActions } from './styles';
import { SearchInput } from '../SearchInput';
import { Button } from '../Button';
import { GiHamburgerMenu } from 'react-icons/gi';

interface Props {
    toggleMenu: () => void;
}

const Header = ({ toggleMenu }:Props) => {
    return (
        <HeaderWrapper>
            <HeaderDistribution>
                <HamburguerToggle onClick={toggleMenu}><GiHamburgerMenu/></HamburguerToggle>
                <HeaderSearch>
                    <SearchInput />
                </HeaderSearch>
                <HeaderActions>
                    <p>Get Pro</p>
                    <Button text="Upload" />
                </HeaderActions>
            </HeaderDistribution>
        </HeaderWrapper>
    );
};

export { Header };