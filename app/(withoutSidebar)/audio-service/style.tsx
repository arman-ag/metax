import styled from 'styled-components';

const CardServiceContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  align-items: start;
  margin-top: 1rem;
  gap: 1rem 1rem;
  padding: 0 2%;
  margin-top: 3%;
`;
const H1 = styled.h1`
  font-size: 1rem;
  color: #191919;
  margin: 0 2.3rem 0.9rem 0;
`;
const HeaderWrapper = styled.div`
  padding: 0.81rem 0 0.8rem 0;
`;
const MainWrapper = styled.div`
  margin: 0.81rem 0;
`;
const SearchContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-left: 1.5rem;
`;
export {
  CardServiceContainer,
  H1,
  HeaderWrapper,
  MainWrapper,
  SearchContainer,
};
