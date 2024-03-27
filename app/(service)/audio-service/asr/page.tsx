'use client';
import FileIcon from '@/app/_assets/icon/file';
import NextBreadcrumb from '@/app/_components/NextBreadcrumb';
import ResultNotReady from '@/app/_components/resultNotReady';
import UploadButton from '@/app/_components/uploadButton';
import Waveform from '@/app/_components/waveform';
import { translatorٍErrorMessage } from '@/app/_lib/translator';
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
  AudioPlayerContainer,
  AudioProcessingButton,
  Divider,
  FlexContainer,
  H1,
  H2,
} from '../denoiser/style';
import { AsrContainer, ResultContainer, UploadButtonContainer } from './style';
const ASR = () => {
  const { toast } = useToast();
  const [voice, setVoice] = useState();
  const [asrVoice, setAsrVoice] = useState();
  const [voiceUrl, setVoiceUrl] = useState();
  const [readyToShow, setReadyToShow] = useState(false);

  const browseFile = (e) => {
    setVoice(e.target.files[0]);
    setVoiceUrl(URL.createObjectURL(e.target.files[0]));
    setReadyToShow(false);
  };
  const submitFile = async () => {
    const formData = new FormData();
    formData.append('file', voice);

    const res = await fetch('http://hirax.com:2003/', {
      method: 'POST',
      body: formData,
      redirect: 'follow',
    });
    if (res.status !== 200) {
      toast({
        description: translatorٍErrorMessage(res.status),
        variant: 'destructive',
      });

      setReadyToShow(false);
    }
    const response = await res.json();
    setAsrVoice(response.text);
    setReadyToShow(true);
  };

  return (
    <div>
      <H1>تبدیل گفتار به نوشتار</H1>
      <NextBreadcrumb />
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
            <UploadButtonContainer>
              <H2>بارگذاری فایل</H2>
              <UploadButton send={browseFile} variant='outline'>
                <FileIcon />
                <span
                  style={{
                    color: '#8C43C9',

                    margin: '0 .3rem 0 0',
                    fontSize: '.9rem',
                  }}
                >
                  فایل ها
                </span>
              </UploadButton>
            </UploadButtonContainer>
            <AudioContainer>
              {/* <Dialog>
                <DialogTrigger asChild></DialogTrigger>

                <DialogContentContainer dir={'rtl'}>
                  <Gallery defaultTab={'user-voice'} />
                </DialogContentContainer>
              </Dialog> */}

              <FlexContainer>
                <AudioPlayerContainer>
                  <Waveform audio={voiceUrl} />
                </AudioPlayerContainer>
                <AudioProcessingButton onClick={() => submitFile()}>
                  پردازش صوت
                </AudioProcessingButton>
              </FlexContainer>
            </AudioContainer>
            <div />
            <Divider />
            <H2>نتیجه نهایی</H2>
            {readyToShow ? (
              <ResultContainer className='flex ring-offset-8  ring-light-gray-inactivestates   text-dark-secondary-2 resize  outline-none min-h-[80px] w-full rounded-8  p-[.5rem]  m-[.5rem] border-input  px-3 py-2 text-sm  focus-visible:ring-primary100	 ring-1 '>
                {asrVoice}
              </ResultContainer>
            ) : (
              <ResultNotReady />
            )}
          </AsrContainer>
        </TabsContent>
      </Tabs>
      <Toaster dir={'rtl'} />
    </div>
  );
};
export default ASR;
