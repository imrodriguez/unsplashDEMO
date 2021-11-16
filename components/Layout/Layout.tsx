import { useState } from 'react';
import { Theme } from '../../styles/theme';
import { Background, SectionsWrapper, MainSection, Content } from './styles';
import { Header } from '../Header';
import { Menu } from '../Menu';

interface Props {
    children: JSX.Element;
    user: User;
}

const Layout = ({ children, user }: Props) => {
    const [openMobile, setOpenMobile] = useState(false);

    const toggleMenu = () => {
        setOpenMobile(!openMobile);
    };

    return (
        <Theme>
            <Background>
                <SectionsWrapper openMobile={openMobile}>
                    <div>
                        <Menu toggleMenu={toggleMenu} user={user} />
                    </div>
                    <MainSection>
                        <Header toggleMenu={toggleMenu} />
                        <Content>
                            {children}
                        </Content>
                    </MainSection>
                </SectionsWrapper>
            </Background>
        </Theme>
    )
};

export { Layout };