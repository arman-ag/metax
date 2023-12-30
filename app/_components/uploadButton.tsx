import { ReactNode } from 'react';
import { UploadButtonContainer } from './style';

type props = {
  send?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  children: ReactNode;
  acceptType: string;
};
const UploadButton = ({ send, children, className, acceptType }: props) => {
  return (
    <UploadButtonContainer className={className}>
      <input
        type='file'
        accept={acceptType}
        required
        onChange={(e) => {
          send(e);
        }}
      />
      <div className=' child-container'>{children}</div>
    </UploadButtonContainer>
  );
};

export default UploadButton;
