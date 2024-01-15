'use client';
import { DialogContentContainer } from '@/app/(withoutSidebar)/dashboard/style';
import FileIcon from '@/app/_assets/icon/file';
import NextBreadcrumb from '@/app/_components/NextBreadcrumb';
import Gallery from '@/app/_components/gallery-modal/gallery';
import UploadButton from '@/app/_components/uploadButton';
import {
  Dialog,
  DialogTrigger,
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
  H1,
  H2,
} from '../denoiser/style';
import { AsrContainer, ResultContainer } from './style';
const ASR = () => {
  const { toast } = useToast();
  const [voice, setVoice] = useState();
  const [asrVoice, setAsrVoice] = useState('تست ویف تست ویف خسوه');
  const [voiceUrl, setVoiceUrl] = useState('/defaultVoice.wav');
  const [showResult, setShowResult] = useState(true);
  const [focusItem, setFocusItem] = useState({});
  const browseFile = (e) => {
    setVoice(e.target.files[0]);
    setVoiceUrl(URL.createObjectURL(e.target.files[0]));
    setShowResult(false);
  };
  const submitFile = async () => {
    // const response = await axios.get(focusItem.voice_file, {
    //   headers: {
    //     'Content-Type': 'audio/wav',
    //   },
    //   responseType: 'arraybuffer',
    // });

    // console.log('res', response);
    // const blobResponse = await res.body.blob();
    // const newBlob = new Blob([blobResponse]);
    // console.log('audioBinary', audioBinary);
    // const blobAudio = await audioBinary.blob();
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
            <H2>بارگذاری فایل</H2>
            <AudioContainer>
              <Dialog>
                <DialogTrigger asChild>
                  <UploadButton send={browseFile} variant='outline'>
                    <FileIcon />
                    <span
                      style={{
                        color: 'black',
                        margin: '1.2rem .5rem',
                        fontSize: '.9rem',
                      }}
                    >
                      فایل ها
                    </span>
                  </UploadButton>
                </DialogTrigger>

                <DialogContentContainer dir={'rtl'}>
                  <Gallery setFocusItem={setFocusItem} />
                </DialogContentContainer>
              </Dialog>

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
export default ASR;
