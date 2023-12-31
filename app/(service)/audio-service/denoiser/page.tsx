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
  AudioPlayerContainer,
  AudioProcessingButton,
  DenoiserContainer,
  Divider,
  FlexAudioPlayerContainer,
  FlexContainer,
  FluidDownloadButton,
  FluidGalleryButton,
  H1,
  H2,
} from './style';
const Denoiser = () => {
  const { toast } = useToast();
  const [voice, setVoice] = useState(null);
  const [voiceUrl, setVoiceUrl] = useState('./metVocalRes.wav');
  const [responseId, setResponseId] = useState('');
  const [denoiseFileAddressUrl, setDenoiseFileAddressUrl] =
    useState('./metVocalRes.wav');
  // const browseFile = (e) => {
  //   setVoice(e.target.files[0]);
  //   setVoiceUrl(URL.createObjectURL(e.target.files[0]));
  //   setDenoiseFileAddressUrl('');
  // };
  // const submitFile = async () => {
  //   const formData = new FormData();
  //   formData.append('title', 'test8');
  //   formData.append('description', 'test2');
  //   formData.append('voice_file', voice);
  //   try {
  //     const res = await fetch(
  //       'http://172.16.60.151:8000/voice-gallery/crud-voice/',
  //       {
  //         method: 'POST',
  //         body: formData,
  //       }
  //     );
  //     const responseId = await res.json();
  //     setResponseId(responseId.id.toString());
  //   } catch (e) {
  //     toast({
  //       description: `${e}:خطا در شبکه`,
  //     });
  //     console.log('error', e);
  //   }
  // };
  const sendVoiceId = async () => {
    try {
      const formData = new FormData();
      formData.append('voice_id', responseId.toString());
      formData.append('file_extension', 'wav');
      const getFileAddress = await fetch(
        'http://172.16.60.151:8000/denoise/high-denoise-process/',
        {
          method: 'POST',
          body: formData,
        }
      );
      const response = await getFileAddress.json();
      const { output_file: outputFileAddress } = await response;
      const denoiseFormData = await new FormData();
      await denoiseFormData.append(
        'high_denoise_result_link',
        outputFileAddress
      );
      await denoiseFormData.append('high_denoise_result_file_extension', 'wav');
      const getDenoiseFileAddress = await fetch(
        'http://172.16.60.151:8000/denoise/high-denoise-result/',
        {
          method: 'POST',
          body: denoiseFormData,
        }
      );
      const DenoiseFileAddress = await getDenoiseFileAddress.blob();
      setDenoiseFileAddressUrl(URL.createObjectURL(DenoiseFileAddress));
    } catch (e) {
      toast({
        description: `${e}:خطا در شبکه`,
      });
      console.log(e);
    }
  };
  // setTimeout(sendVoiceId, 3 * 60 * 1000);
  // // pause another audio player
  // useEffect(() => {
  //   document.addEventListener(
  //     'play',
  //     function (e) {
  //       var audios = document.getElementsByTagName('audio');
  //       for (var i = 0, len = audios.length; i < len; i++) {
  //         if (audios[i] != e.target) {
  //           audios[i].pause();
  //         }
  //       }
  //     },
  //     true
  //   );
  // }, []);
  return (
    <div>
      <H1>دینویزر</H1>
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
          <DenoiserContainer>
            <H2>بارگذاری فایل</H2>
            <AudioContainer>
              <FluidGalleryButton size={'sm'} variant={'outline'}>
                <FileIcon />
                <span>فایل ها</span>
              </FluidGalleryButton>
              <FlexContainer>
                <AudioPlayer src={voiceUrl} controls />
                <AudioProcessingButton onClick={sendVoiceId} size='sm'>
                  پردازش صوت
                </AudioProcessingButton>
              </FlexContainer>
            </AudioContainer>
            <Divider />
            <H2>نتیجه نهایی</H2>
            <FlexAudioPlayerContainer>
              <p>صدای بدون نویز</p>
              <AudioPlayerContainer>
                <AudioPlayer src={denoiseFileAddressUrl} controls />
                <FluidDownloadButton size='sm' href={denoiseFileAddressUrl} />
              </AudioPlayerContainer>
            </FlexAudioPlayerContainer>
          </DenoiserContainer>
        </TabsContent>
      </Tabs>
      <Toaster dir={'rtl'} />
    </div>
  );
};

export default Denoiser;
