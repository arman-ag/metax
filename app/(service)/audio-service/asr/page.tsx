'use client';
import FileIcon from '@/app/_assets/icon/file';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Toaster,
  useToast,
} from '@haip/design-system';
import { useState } from 'react';
import {
  AudioContainer,
  AudioPlayer,
  AudioProcessingButton,
  Divider,
  FlexContainer,
  GalleryButton,
  H1,
  H2,
} from '../denoiser/style';
import { AsrContainer, ResultContainer } from './style';
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
      <H1>تبدیل گفتار به نوشتار</H1>
      <Tabs dir='rtl' defaultValue='process'>
        <TabsList>
          <TabsTrigger halfBorder={false} value='process'>
            پردازش
          </TabsTrigger>
          <TabsTrigger halfBorder={false} value='documentation'>
            مستندات
          </TabsTrigger>
          <TabsTrigger halfBorder={false} value='server-result'>
            پاسخ سرور
          </TabsTrigger>
          <TabsTrigger halfBorder={false} value='log'>
            گزارشات
          </TabsTrigger>
          <TabsTrigger halfBorder={false} value='price'>
            قیمت
          </TabsTrigger>
        </TabsList>
        <Divider />
        <TabsContent value='process'>
          <AsrContainer>
            <H2>بارگذاری فایل</H2>
            <AudioContainer>
              <GalleryButton size={'sm'} variant={'outline'}>
                <FileIcon />
                <span>فایل ها</span>
              </GalleryButton>
              <FlexContainer>
                <AudioPlayer src={voiceUrl} controls />
                <AudioProcessingButton onClick={() => submitFile()} size='sm'>
                  پردازش صوت
                </AudioProcessingButton>
              </FlexContainer>
            </AudioContainer>
            <div />
            <Divider />
            <H2>نتیجه نهایی</H2>
            <ResultContainer className='flex ring-offset-8  ring-light-gray-inactivestates   text-dark-secondary-2 resize  outline-none min-h-[80px] w-full rounded-8  p-[.5rem]  m-[.5rem] border-input  px-3 py-2 text-sm  focus-visible:ring-primary100	 ring-1 '>
              {showResult && asrVoice}
            </ResultContainer>
          </AsrContainer>
        </TabsContent>
      </Tabs>
      <Toaster dir={'rtl'} />
    </div>
  );
};
export default SST;
