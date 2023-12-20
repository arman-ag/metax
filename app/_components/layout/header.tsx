'use client';
import ArrowDownIcon from '@/app/_assets/icon/arrowdown';
import userImage from '@/app/_assets/images/user.png';
import { Search } from '@/app/_components/search';
import Image from 'next/image';
import {
  BellIconElement,
  HeaderElement,
  HeadingContainer,
  UserAccountContainer,
} from './style';
const Header = () => {
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
        </div>
      </div>
    </HeaderElement>
  );
};

export default Header;
