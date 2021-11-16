import { UserInfo } from './UserInfo';
import { config } from './config';
import { Wrapper, CloseButton, MenuWrapper, MenuItem } from './styles';
import { RiCloseFill } from 'react-icons/ri';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface Props {
    toggleMenu: () => void;
    user: User;
}

const Menu = ({ toggleMenu, user }:Props) => {
    const router = useRouter();

    return (
        <Wrapper>
            <CloseButton onClick={toggleMenu}><RiCloseFill/></CloseButton>
            <UserInfo user={user}/>
            <MenuWrapper>
                {config.map((element, index) => (
                    <Link key={`menu-item-${index}`} href={element.url}>
                        <MenuItem onClick={toggleMenu} selected={element.url === router.route}>
                            {element.icon}
                            {element.title}
                        </MenuItem>
                    </Link>
                ))}
            </MenuWrapper>
        </Wrapper>
    );
};

export { Menu };