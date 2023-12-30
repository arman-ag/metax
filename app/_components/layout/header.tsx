'use client';
import ArrowDownIcon from '@/app/_assets/icon/arrowdown';
import userImage from '@/app/_assets/image/user.png';
import { Search } from '@/app/_components/search';

import { signOut } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  BellIconElement,
  HeaderElement,
  HeadingContainer,
  UserAccountContainer,
} from './style';
const Header = () => {
  const router = useRouter();
  const handleSignOut = () => {
    signOut();
  };

  return (
    <HeaderElement>
      <HeadingContainer>
        <h1>داشبورد متاکس</h1>

        <Search />
      </HeadingContainer>
      <div className='flex justify-between items-center '>
        <BellIconElement />
        <div className='flex items-center'>
          <Image alt='user image' src={userImage} width={48} height={48} />
          <button style={{ marginRight: '1.25rem' }}>
            <UserAccountContainer>
              حساب کاربری
              <ArrowDownIcon className='Arrow-Down-Icon' />
            </UserAccountContainer>
          </button>

          <button onClick={() => handleSignOut()}>Sign out</button>
        </div>
      </div>
    </HeaderElement>
  );
};

export default Header;
