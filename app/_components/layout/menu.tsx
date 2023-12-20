'use client';
import DashboardIcon from '@/app/_assets/icon/dashboard';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AccordionService from './accordionService';
import { MenuItem, MenuSection } from './style';

const Menu = () => {
  const paths = usePathname();

  return (
    <MenuSection>
      <Link href='/dashboard'>
        <MenuItem path={paths.search('dashboard') > 0}>
          <DashboardIcon className=' icon' />
          <div>داشبورد</div>
        </MenuItem>
      </Link>
      <AccordionService />
      <Link href='#'>
        <MenuItem>
          <div>فایل ها</div>
        </MenuItem>
      </Link>
      <Link href='#'>
        <MenuItem>
          <div>مدیریت مالی </div>
        </MenuItem>
      </Link>
      <Link href='#'>
        <MenuItem>
          <div> سرویس های من</div>
        </MenuItem>
      </Link>
      <Link href='#'>
        <MenuItem>
          <div>تاریخچه پردازش ها</div>
        </MenuItem>
      </Link>
      <Link href='#'>
        <MenuItem>
          <div>حساب کاربری</div>
        </MenuItem>
      </Link>
      <Link href='#'>
        <MenuItem>
          <div>پشتیبانی</div>
        </MenuItem>
      </Link>
    </MenuSection>
  );
};

export default Menu;
