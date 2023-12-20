'use client';
import notFound from '@/app/_assets/image/notFound.png';
import { Button } from '@haip/design-system';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
const H1 = styled.h1`
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 1.5rem;
  text-align: center;
  color: #191919;
`;
const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #52575c;
  font-size: 1.5rem;
  Button {
    margin-top: 1.5rem;
    background-color: #8c43c9 !important;
  }
  Button:focus {
    background-color: #8c43c9 !important;
  }
`;

const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export default function Custom404() {
  const router = useRouter();
  return (
    <MainContainer>
      <div>
        <Image
          style={{ marginBottom: '3.39rem' }}
          src={notFound}
          alt='not found '
          width={400}
          height={400}
        />
        <H1>404</H1>
        <DescriptionContainer>
          <p>صفحه مورد نظر یافت نشد</p>
          <Button onClick={() => router.back()} size='md'>
            بازگشت
          </Button>
        </DescriptionContainer>
      </div>
    </MainContainer>
  );
}
