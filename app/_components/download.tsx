import DownloadIcon from '@/app/_assets/icon/download';
import Link from 'next/link';
import { ChildDownloadButton } from './style';
type props = {
  href: string;
  size?: string;
  className?: string;
};
const DownloadFile = ({ href, size, className }: props) => {
  return (
    <Link className={className} download={true} href={href}>
      <ChildDownloadButton size={size} variant={'text'}>
        <div className='flex items-center'>
          <span className='text-[0.75rem] text-[#924dcc]'>دانلود </span>
          <DownloadIcon className={'mr-2 text-primary100'} />
        </div>
      </ChildDownloadButton>
    </Link>
  );
};

export default DownloadFile;
