'use client';
import registerImage from '@/app/_assets/image/registerImage.png';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
const layout = ({ children }: { children: React.ReactNode }) => {
  const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 8.75rem 4.56rem 1.63rem 4.5rem;
  `;
  return (
    <Container>
      {children}
      <div>
        <Image src={registerImage} alt='register image' />
      </div>
    </Container>
  );
};

export default layout;
