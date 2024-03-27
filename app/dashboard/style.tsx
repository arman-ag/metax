import { DialogContent, DropDown } from '@haip/design-system';
import styled from 'styled-components';

const DialogContentContainer = styled(DialogContent)`
  width: 95%;
`;
const DashboardContainer = styled.div`
  display: grid;
  grid-template-areas:
    'favorite-service-container favorite-service-container favorite-service-container '
    ' circle-border-container bar-border-container  line-border-container'
    'banner-container banner-container banner-container';
  grid-template-rows: auto 55% auto;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100%;
  gap: 0.5rem;
  background-color: #ededed;
`;
const FavoriteServiceContainer = styled.div`
  grid-area: favorite-service-container;

  border-radius: 0.5rem;
  background-color: white;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
`;
const LineBorderContainer = styled.div`
  grid-area: line-border-container;
  border-radius: 0.5rem;
  background-color: white;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
`;
const BarBorderContainer = styled.div`
  grid-area: bar-border-container;
  border-radius: 0.5rem;
  background-color: white;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
`;
const CircleBorderContainer = styled.div`
  grid-area: circle-border-container;
  border-radius: 0.5rem;
  background-color: white;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
`;
const BannerContainer = styled.div`
  grid-area: banner-container;
  border-radius: 0.5rem;
  background-color: white;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
`;
const MainSection = styled.div`
  height: 100%;
`;
const H1 = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #000000;
`;
const HeaderContainer = styled.div`
  justify-content: space-between;
  align-items: center;
  padding: 4% 3%;
  display: flex;
  border-bottom: solid #e0e0e0 0.1rem;
`;
const Drop = styled(DropDown)`
  height: 5rem;
  width: 40%;
`;

export {
  BannerContainer,
  BarBorderContainer,
  CircleBorderContainer,
  DashboardContainer,
  DialogContentContainer,
  Drop,
  FavoriteServiceContainer,
  H1,
  HeaderContainer,
  LineBorderContainer,
  MainSection,
};
