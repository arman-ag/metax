import plusButton from '@/app/_assets/icon/plusButton.png';
import Image from 'next/image';
import { GalleryFileContainer } from '../(service)/style';
const ChoseImageGalleryFile = () => {
  return (
    <GalleryFileContainer width={'21.65rem'} height={'9.37rem'}>
      <button>
        <Image src={plusButton} style={{ width: '3rem', height: '3rem' }} />
      </button>
      <span>برای پردازش تصویر کلیک کنید</span>
    </GalleryFileContainer>
  );
};

const ChoseAudioGalleryFile = () => {
  return (
    <GalleryFileContainer width={'25.125rem'} height={'5.81rem'}>
      <button>
        <Image src={plusButton} style={{ width: '3rem', height: '3rem' }} />
      </button>

      <span>برای پردازش صوت کلیک کنید</span>
    </GalleryFileContainer>
  );
};
export { ChoseAudioGalleryFile, ChoseImageGalleryFile };
