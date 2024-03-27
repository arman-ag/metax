'use client';
import Layout from '../_components/layout/index';
import { MainSection } from './style';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <MainSection>{children}</MainSection>
    </Layout>
  );
}
