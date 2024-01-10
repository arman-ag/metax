import BellIcon from '@/app/_assets/icon/bell';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-areas:
    'header header header header header header'
    '  menu main main main main main ';
  background-color: #ededed;
  grid-template-rows: 4.68rem auto;
  grid-template-columns: 13.4rem auto auto auto auto 18.6rem;
  height: 100vh;
`;

const MainContainer = styled.div`
  grid-area: main;
  padding: 1.31rem 1.5rem;
`;
const HeaderContainer = styled.div`
  grid-area: header;
  background-color: white;
  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.04);
`;
const MenuContainer = styled.div`
  grid-area: menu;
  overflow: auto;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: white;
`;

const HeaderElement = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.06rem;
  height: 100%;
`;
const HeadingContainer = styled.div`
  display: flex;
  h1 {
    margin: 0 0.87rem 0 4.13rem;
    font-size: 1.25rem;
    font-weight: 400;
  }
`;
const BellIconElement = styled(BellIcon)({
  marginLeft: '1.81rem',
});
const UserAccountContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.5rem;
  .Arrow-Down-Icon {
    margin-right: 0.5rem;
  }
`;
const MenuItem = styled.div`
  &:hover {
    background-color: #f3ecfa;
  }
  display: flex;
  cursor: pointer;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.25rem;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  border-right: ${({ path }) => (path ? '0.35rem solid #8c43c9' : '0')};
  background-color: ${({ path }) => (path ? '#F3ECFA' : 'white')};
  height: 4.062rem;
  .icon {
    margin-left: 0.5rem;
  }
  .title-container {
    display: flex;
  }
`;
const InternalWrapper = styled.div`
  width: 100%;
  max-height: ${({ open }) => (open ? '100px' : '0')};
  transition: all 0.4s ease-in-out;
  overflow: hidden;
`;
const MenuSection = styled.div``;
const ChildMenuItem = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.25rem;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
`;
const GrandChildMenuItem = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.25rem;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  background-color: '#f3ecfa';
`;
const HeaderProfileContainer = styled.button`
  /* &:focus {
    background-color: #fbf7fd;
  }
  &:active {
    background-color: #fbf7fd;
  } */
  /* background-color: ${({ focus }) => (focus ? '#fbf7fd' : 'white')}; */
  outline: none;
  width: 12.5rem;
  height: 4.68rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    margin-left: 1.25rem;
  }
`;
const DividerProfileItem = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: #efefef;
`;

export {
  BellIconElement,
  ChildMenuItem,
  DividerProfileItem,
  GrandChildMenuItem,
  GridContainer,
  HeaderContainer,
  HeaderElement,
  HeaderProfileContainer,
  HeadingContainer,
  InternalWrapper,
  MainContainer,
  MenuContainer,
  MenuItem,
  MenuSection,
  UserAccountContainer,
};
