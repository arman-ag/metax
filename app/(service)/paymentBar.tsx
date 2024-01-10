import { Button } from '@haip/design-system';
import PaperIcon from '../_assets/icon/paper';

const PaymentBar = () => {
  return (
    <div>
      <div>
        <span>
          <PaperIcon />
        </span>
        <span>اعتبار سرویس صوت</span>
      </div>
      <span>تعداد دفعات قابل استفاده :</span>
      <span>5</span>
      <div>
        <span>تعداد دفعات باقی مانده:</span>

        <span>3</span>
        <Button size='sm' variant='outline'>
          درخواست مشاوره
        </Button>
      </div>
    </div>
  );
};

export default PaymentBar;
