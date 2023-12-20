'use client';
import registerImage from '@/app/_assets/image/registerImage.png';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 8.75rem 0 0 4.5rem;
  padding-left: 5rem;
  .img-container {
    margin-right: 9.37rem;
  }
`;
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      {children}
      <div className='img-container'>
        <Image src={registerImage} alt='register image' />
      </div>
    </Container>
  );
};

export default Layout;
