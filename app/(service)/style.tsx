import styled from 'styled-components';

const MainContainer = styled.div`
  display: grid;
  grid-template-areas:
    ' viewService viewService viewService paymentBar'
    ' viewService viewService viewService serviceStatus ';
  grid-template-rows: 6.4rem auto;
  grid-template-columns: 18.6rem auto auto auto;
  height: 100%;
  gap: 1.5rem;
`;
const StatusContainer = styled.div`
  grid-area: serviceStatus;
  overflow: auto;
  height: 100%;
  background-color: white;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
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
export { MainContainer, PaymentBarContainer, StatusContainer, ViewService };
