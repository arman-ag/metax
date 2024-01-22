'use client';
import CarbonContainerIcon from '@/app/_assets/icon/carbonContainer';
import CustomerServiceIcon from '@/app/_assets/icon/customerService';
import DashboardIcon from '@/app/_assets/icon/dashboard';
import HistoryoutlineIcon from '@/app/_assets/icon/historyoutline';
import ListIcon from '@/app/_assets/icon/list';
import PersonIcon from '@/app/_assets/icon/person';
import WalletIcon from '@/app/_assets/icon/wallet';
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
          <ListIcon className=' icon' />
          <div>فایل ها</div>
        </MenuItem>
      </Link>
      <Link href='#'>
        <MenuItem>
          <WalletIcon className=' icon' />
          <div>مدیریت مالی </div>
        </MenuItem>
      </Link>
      <Link href='#'>
        <MenuItem>
          <CarbonContainerIcon className=' icon' />
          <div> سرویس های من</div>
        </MenuItem>
      </Link>
      <Link href='#'>
        <MenuItem>
          <HistoryoutlineIcon className=' icon' />
          <div>تاریخچه پردازش ها</div>
        </MenuItem>
      </Link>
      <Link href='/profile'>
        <MenuItem path={paths.search('profile') > 0}>
          <PersonIcon className=' icon' />

          <div>حساب کاربری</div>
        </MenuItem>
      </Link>
      <Link href='#'>
        <MenuItem>
          <CustomerServiceIcon className=' icon' />
          <div>پشتیبانی</div>
        </MenuItem>
      </Link>
    </MenuSection>
  );
};

export default Menu;
