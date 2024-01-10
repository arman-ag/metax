'use client';
import ArrowDownIcon from '@/app/_assets/icon/arrowdown';
import ExitIcon from '@/app/_assets/icon/exit';
import Person2Icon from '@/app/_assets/icon/person2';
import userImage from '@/app/_assets/image/user.png';
import { Search } from '@/app/_components/search';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { DropdownMenuContent, DropdownMenuItem } from './dropDownStyles';
import {
  BellIconElement,
  DividerProfileItem,
  HeaderElement,
  HeaderProfileContainer,
  HeadingContainer,
  UserAccountContainer,
} from './style';
const Header = () => {
  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/login' });
  };
  const [buttonFocus, setButtonFocus] = useState(true);
  console.log(buttonFocus);
  return (
    <HeaderElement>
      <HeadingContainer>
        <h1>داشبورد متاکس</h1>

        <Search />
      </HeadingContainer>
      <div className='flex justify-between items-center '>
        <BellIconElement />
        <div className='flex items-center'>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <HeaderProfileContainer onClick={() => setButtonFocus(false)}>
                <Image
                  alt='user image'
                  src={userImage}
                  width={48}
                  height={48}
                />
                <UserAccountContainer>
                  حساب کاربری
                  <ArrowDownIcon className='Arrow-Down-Icon' />
                </UserAccountContainer>
              </HeaderProfileContainer>
            </DropdownMenu.Trigger>
            <DropdownMenuContent sideOffset={0}>
              <Link href='/profile'>
                <DropdownMenuItem>
                  <span style={{ marginRight: '0.5rem' }}>
                    مشاهده حساب کاربری
                  </span>

                  <Person2Icon />
                </DropdownMenuItem>
              </Link>
              <DividerProfileItem />
              <DropdownMenuItem onClick={handleSignOut}>
                <span style={{ marginRight: '0.5rem' }}>
                  خروج از حساب کاربری
                </span>
                <ExitIcon />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu.Root>
        </div>
      </div>
    </HeaderElement>
  );
};

export default Header;
