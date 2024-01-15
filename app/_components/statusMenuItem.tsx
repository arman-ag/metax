import { Button } from '@haip/design-system';
import moment from 'jalali-moment';
import Link from 'next/link';
import { translateService } from '../_lib/translator';
import { DateBox, FileContainer, StatusItemContainer } from './style';
const StatusMenuItem = ({ item }) => {
  return (
    <StatusItemContainer>
      <h1>{translateService(item.service_name).serviceName}</h1>
      <FileContainer>
        <span> نام فایل </span>
        <span>پردازش1</span>
      </FileContainer>
      <DateBox>
        <div>
          <span> تاریخ : &nbsp;</span>
          <span>
            {moment(item.publish_date).locale('fa').format('YYYY/MM/DD')}
          </span>
        </div>
        <div>
          <span>{item.status}</span>
          <Link href={translateService(item.service_name).address}>
            <Button size='sm' variant='outline'>
              باز کردن
            </Button>
          </Link>
        </div>
      </DateBox>
    </StatusItemContainer>
  );
};

export default StatusMenuItem;
