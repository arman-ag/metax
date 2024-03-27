'use client';
import { getUserDetail } from '@/app/(withoutSidebar)/profile/service';
import ArrowDownIcon from '@/app/_assets/icon/arrowdown';
import ExitIcon from '@/app/_assets/icon/exit';
import Person2Icon from '@/app/_assets/icon/person2';
import { storeUserImage } from '@/app/redux/features/userImage/imageSlice';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DropdownMenuContent, DropdownMenuItem } from './dropDownStyles';
import {
  BellIconElement,
  DividerProfileItem,
  HeaderElement,
  HeaderImgContainer,
  HeaderProfileContainer,
  HeadingContainer,
  UserAccountContainer,
} from './style';
const Header = () => {
  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/login' });
  };
  const dispatch = useDispatch();
  const [buttonFocus, setButtonFocus] = useState(true);
  const baseUrl = process.env.baseUrl;
  const { userImage } = useSelector((state) => state);

  useEffect(() => {
    (async function () {
      const rawData = await getUserDetail();
      if (rawData?.profile_picture) {
        dispatch(storeUserImage(baseUrl + rawData?.profile_picture));
      }
    })();
  }, []);

  return (
    <HeaderElement>
      <HeadingContainer>
        <h1>داشبورد متاکس</h1>
      </HeadingContainer>
      <div className='flex justify-between items-center  h-full'>
        <BellIconElement />
        <div className='flex items-center h-full'>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <HeaderProfileContainer onClick={() => setButtonFocus(false)}>
                <HeaderImgContainer alt='user image' src={userImage.link} />
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
