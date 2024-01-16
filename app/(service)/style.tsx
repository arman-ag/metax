import { DropDown } from '@haip/design-system';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: grid;
  grid-template-areas:
    ' viewService viewService viewService paymentBar'
    ' viewService viewService viewService serviceStatus ';
  grid-template-rows: 6.37rem auto;
  grid-template-columns: auto auto auto 21rem;
  height: 100%;
  row-gap: 0.69rem;
  column-gap: 1.5rem;
`;
const StatusContainer = styled.div`
  grid-area: serviceStatus;
  overflow: auto;
  height: 100%;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
`;
const ViewService = styled.div`
  grid-area: viewService;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  height: 100%;
`;
const PaymentBarContainer = styled.div`
  grid-area: paymentBar;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  background-color: white;
  border-radius: 0.5rem;
  height: 100%;
`;
const DropDownStatusMenuFilter = styled(DropDown)`
  width: 9rem;
`;
const HeaderStatusMenu = styled.div`
  padding: 1.13rem 1.75rem;
  h1 {
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 600;
  }
`;
const DayProcessContainer = styled.div`
  display: flex;
  align-items: center;
  h1 {
    margin-right: 0.5rem;
  }
`;
const PaymentContainer = styled.div`
  padding: 0.81rem 0.75rem;
`;
const PaymentHeaderContainer = styled.div`
  display: flex;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 0.3rem;
`;
const PaymentRemainigDay = styled.div`
  color: #52575c;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 0.3rem;
`;
const PeymentCallApiRemainig = styled.div`
  font-size: 0.75rem;
  align-items: flex-end;
  font-style: normal;
  font-weight: 400;
  color: #07955e;
  display: flex;
  justify-content: space-between;
  button {
    width: 6.18rem;
    border-color: #07955e;
    color: #07955e;
    &:hover {
      background-color: inherit;
    }
    &:active {
      background-color: inherit;
      color: #07955e;
    }
    &:focus {
      background-color: inherit;
      color: #07955e;
    }
  }
`;
export {
  DayProcessContainer,
  DropDownStatusMenuFilter,
  HeaderStatusMenu,
  MainContainer,
  PaymentBarContainer,
  PaymentContainer,
  PaymentHeaderContainer,
  PaymentRemainigDay,
  PeymentCallApiRemainig,
  StatusContainer,
  ViewService,
};
