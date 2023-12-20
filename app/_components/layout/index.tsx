'use client';
import Header from './header';
import Menu from './menu';
import {
  GridContainer,
  HeaderContainer,
  MainContainer,
  MenuContainer,
} from './style';
import { layoutTypeProps } from './types';

const Layout = ({ children }: layoutTypeProps) => {
  return (
    <GridContainer className='mostly-customized-scrollbar'>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <MenuContainer>
        <Menu />
      </MenuContainer>
      <MainContainer>{children}</MainContainer>
    </GridContainer>
  );
};

export default Layout;
