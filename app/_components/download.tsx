import DownloadIcon from '@/app/_assets/icon/download';
import { Button } from '@haip/design-system';
import Link from 'next/link';
type props = {
  href: string;
};
const DownloadFile = ({ href }: props) => {
  return (
    <Link className='mr-5 w-28' download={true} href={href}>
      <Button variant={'outline'}>
        <div className='flex items-center'>
          <span className='text-[0.75rem] text-[#924dcc]'>دانلود </span>
          <DownloadIcon className={'mr-2 text-primary100'} />
        </div>
      </Button>
    </Link>
  );
};

export default DownloadFile;
