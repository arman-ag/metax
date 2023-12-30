'use client';
import UploadButton from '@/app/_components/uploadButton';
import { Button, Toaster, useToast } from '@haip/design-system';
import { useState } from 'react';
import { AsrContainer } from './style';
const SST = () => {
  const { toast } = useToast();
  const [voice, setVoice] = useState();
  const [asrVoice, setAsrVoice] = useState('تست ویف تست ویف خسوه');
  const [voiceUrl, setVoiceUrl] = useState('/defaultVoice.wav');
  const [showResult, setShowResult] = useState(true);
  const browseFile = (e) => {
    setVoice(e.target.files[0]);
    setVoiceUrl(URL.createObjectURL(e.target.files[0]));
    setShowResult(false);
  };
  const submitFile = async () => {
    const formData = new FormData();
    formData.append('file', voice);

    try {
      const res = await fetch('http://hirax.com:2003/', {
        method: 'POST',
        body: formData,
        redirect: 'follow',
      });
      const response = await res.json();
      setAsrVoice(response.text);
      setShowResult(true);
    } catch (e) {
      console.log('error', e);
      toast({
        description: `${e}:خطا در شبکه`,
      });
      setShowResult(false);
    }
  };
  return (
    <div>
      <AsrContainer>
        <div>
          <h2 className='my-4 font-semibold text-[1.2rem] '>گذاشتن صوت</h2>
          <audio src={voiceUrl} controls className='w-full' />
          <div className='flex mt-[1.56rem]'>
            <UploadButton send={browseFile} />
          </div>
          <div dir='ltr'>
            <Button onClick={() => submitFile()} size='lg'>
              پردازش صوت
            </Button>
          </div>
          <div className='w-full h-[.01rem] bg-gray-400 my-7' />
          <h2 className=' mb-[2.44rem] font-semibold text-[1.2rem]'>
            نتیجه نهایی
          </h2>
          <div className='flex ring-offset-8  ring-light-gray-inactivestates   text-dark-secondary-2 resize  outline-none min-h-[80px] w-full rounded-8  p-[.5rem]  m-[.5rem] border-input  px-3 py-2 text-sm  focus-visible:ring-primary100	 ring-1 '>
            {showResult && asrVoice}
          </div>
        </div>
      </AsrContainer>
      <Toaster dir={'rtl'} />
    </div>
  );
};
export default SST;
