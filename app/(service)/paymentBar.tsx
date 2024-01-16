import { Button } from '@haip/design-system';
import PaperIcon from '../_assets/icon/paper';
import {
  PaymentContainer,
  PaymentHeaderContainer,
  PaymentRemainigDay,
  PeymentCallApiRemainig,
} from './style';

const PaymentBar = () => {
  return (
    <PaymentContainer>
      <PaymentHeaderContainer>
        <span style={{ marginLeft: '.5rem' }}>
          <PaperIcon />
        </span>
        <span>اعتبار سرویس صوت</span>
      </PaymentHeaderContainer>
      <PaymentRemainigDay>
        <span>تعداد دفعات قابل استفاده :</span>
        <span>5</span>
      </PaymentRemainigDay>
      <PeymentCallApiRemainig>
        <div>
          <span>تعداد دفعات باقی مانده:</span>

          <span>3</span>
        </div>
        <Button size='sm' variant='outline'>
          درخواست مشاوره
        </Button>
      </PeymentCallApiRemainig>
    </PaymentContainer>
  );
};

export default PaymentBar;
