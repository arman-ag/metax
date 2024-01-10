import { Button } from '@haip/design-system';
import { DateBox, FileContainer, StatusItemContainer } from './style';

const StatusMenuItem = () => {
  return (
    <StatusItemContainer>
      <h1>پردازش صوت</h1>
      <FileContainer>
        <span>نام فایل</span>
        <span>پردازش1</span>
      </FileContainer>
      <DateBox>
        <div>
          <span>تاریخ</span>
          <span>1402/09/08</span>
        </div>
        <div>
          <Button size='sm' variant='outline'>
            باز کردن
          </Button>
        </div>
      </DateBox>
    </StatusItemContainer>
  );
};

export default StatusMenuItem;
