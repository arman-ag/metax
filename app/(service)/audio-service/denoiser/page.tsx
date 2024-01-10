'use client';

import { DialogContentContainer } from '@/app/(withoutSidebar)/dashboard/style';
import FileIcon from '@/app/_assets/icon/file';
import NextBreadcrumb from '@/app/_components/NextBreadcrumb';
import Gallery from '@/app/_components/gallery-modal/gallery';
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
import { useEffect, useState } from 'react';
import {
  callDenoiseService,
  getDownloadFileLink,
  getHighDenoiseResult,
} from './service';
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
  const [denoiseFileAddressUrl, setDenoiseFileAddressUrl] = useState();
  const [focusItem, setFocusItem] = useState({});
  console.log('focusItem', focusItem);
  const submitFile = async () => {
    const formData = new FormData();
    formData.append('voice_path', 'media/hey_holoo.wav');

    try {
      const response = await callDenoiseService(formData);
      setResponseId('f08514ed-1c06-4331-88ac-ea1735aa65fc');
    } catch (e) {
      toast({
        description: `${e}:خطا در شبکه`,
      });
      console.log('error', e);
    }
  };
  const getFile = async () => {
    try {
      const response = await getHighDenoiseResult();
      console.log(response);
      // const { output_file: outputFileAddress } = await response;
      // const denoiseFormData = await new FormData();
      // await denoiseFormData.append(
      //   'high_denoise_result_link',
      //   outputFileAddress
      // );
      // await denoiseFormData.append('high_denoise_result_file_extension', 'wav');
      // const getDenoiseFileAddress = await fetch(
      //   'http://172.16.60.151:8000/denoise/high-denoise-result/',
      //   {
      //     method: 'POST',
      //     body: denoiseFormData,
      //   }
      // );
      // const DenoiseFileAddress = await getDenoiseFileAddress.blob();
      // setDenoiseFileAddressUrl(URL.createObjectURL(DenoiseFileAddress));
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
  useEffect(() => {
    (async function () {
      const response = await getHighDenoiseResult();
      const addressFile = response[0].output_file;
      const formData = new FormData();
      formData.append('result_link', addressFile);
      const resultAudio = await getDownloadFileLink(formData);
      console.log(resultAudio);
      setDenoiseFileAddressUrl(URL.createObjectURL(resultAudio));
    })();
  }, []);

  return (
    <div>
      <H1>دینویزر</H1>
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
          <DenoiserContainer>
            <H2>بارگذاری فایل</H2>
            <AudioContainer>
              <Dialog>
                <DialogTrigger asChild>
                  <FluidGalleryButton size={'sm'} variant={'outline'}>
                    <FileIcon />
                    <span>فایل ها</span>
                  </FluidGalleryButton>
                </DialogTrigger>

                <DialogContentContainer dir={'rtl'}>
                  <Gallery setFocusItem={setFocusItem} />
                </DialogContentContainer>
              </Dialog>

              <FlexContainer>
                <AudioPlayer src={focusItem.voice_file} controls />
                <AudioProcessingButton onClick={getFile} size='sm'>
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
