'use client';
import Layout from '../_components/layout/index';
import PaymentBar from './paymentBar';
import {
  MainContainer,
  PaymentBarContainer,
  StatusContainer,
  ViewService,
} from './style';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <MainContainer>
        <PaymentBarContainer>
          <PaymentBar />
        </PaymentBarContainer>
        <StatusContainer>
          <div>status menu</div>
        </StatusContainer>
        <ViewService>{children}</ViewService>
      </MainContainer>
    </Layout>
  );
}
