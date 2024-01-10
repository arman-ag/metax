'use client';
import { DialogContentContainer } from '@/app/(withoutSidebar)/dashboard/style';
import FileIcon from '@/app/_assets/icon/file';
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
  AudioContainer,
  AudioPlayer,
  AudioPlayerContainer,
  AudioProcessingButton,
  Divider,
  FlexAudioPlayerContainer,
  FlexContainer,
  FluidDownloadButton,
  FluidGalleryButton,
  H1,
  H2,
} from '../denoiser/style';
import { MusicSeparatorContainer } from './style';
const MusicSeparator = () => {
  const { toast } = useToast();
  const [voice, setVoice] = useState();
  const [blobVocalFileUrl, setBlobVocalFileUrl] = useState('/metVocalRes.wav');
  const [blobMusicFileUrl, setBlobMusicFileUrl] = useState('/metaMusicRes.wav');
  const [responseId, setResponseId] = useState();
  const [voiceUrl, setVoiceUrl] = useState('/metamusic.wav');
  const [focusItem, setFocusItem] = useState({});

  const submitFile = async () => {
    const formData = new FormData();
    formData.append('title', 'test8');
    formData.append('description', 'test2');
    formData.append('voice_file', voice);
    try {
      const getId = await fetch(
        'http://172.16.60.151:8000/voice-gallery/crud-voice/',
        {
          method: 'POST',
          body: formData,
        }
      );
      const responseGetId = await getId.json();
      setResponseId(responseGetId.id);
    } catch (e) {
      toast({
        description: `${e}:خطا در شبکه`,
      });
      console.log('error', e);
    }
  };
  const sendVoiceId = async () => {
    if (responseId) {
      try {
        //send id
        console.log(responseId);

        const formData = new FormData();
        formData.append('voice_id', responseId.toString());
        formData.append('file_extension', 'wav');
        formData.append('sr', '44100');
        formData.append('n_fft', '2048');
        formData.append('crop_size', '256');
        formData.append('batch_size', '4');
        formData.append('hop_length', '1024');
        console.log('formData==>', formData);
        const getFileAddress = await fetch(
          'http://172.16.60.151:8000/denoise/low-denoise-process/',
          {
            method: 'POST',
            body: formData,
          }
        );
        const response = await getFileAddress.json();
        //file address
        const { vocal_file: vocalFileAddress } = await response;
        const { instrument_file: instrumentFileAddress } = await response;
        // get vocal file  address
        const vocalFileAddressFormData = await new FormData();
        await vocalFileAddressFormData.append(
          'low_denoise_result_link',
          vocalFileAddress
        );
        await vocalFileAddressFormData.append(
          'low_denoise_result_file_extension',
          'wav'
        );

        const getVocalFileAddress = await fetch(
          'http://172.16.60.151:8000/denoise/low-denoise-result/',
          {
            method: 'POST',
            body: vocalFileAddressFormData,
          }
        );
        //get music file
        const musicFileAddressFormData = await new FormData();
        await musicFileAddressFormData.append(
          'low_denoise_result_link',
          instrumentFileAddress
        );
        await musicFileAddressFormData.append(
          'low_denoise_result_file_extension',
          'wav'
        );
        const getMusicFileAddress = await fetch(
          'http://172.16.60.151:8000/denoise/low-denoise-result/',
          {
            method: 'POST',
            body: musicFileAddressFormData,
          }
        );
        //blob vocal file
        const blobVocalFile = await getVocalFileAddress.blob();
        setBlobVocalFileUrl(URL.createObjectURL(blobVocalFile));
        //blob music file
        const blobMusicFile = await getMusicFileAddress.blob();
        setBlobMusicFileUrl(URL.createObjectURL(blobMusicFile));
      } catch (e) {
        toast({
          description: `${e}:خطا در شبکه`,
        });
        console.log('error============>', e);
      }
    }
  };
  // pause another audio player

  useEffect(() => {
    document.addEventListener(
      'play',
      function (e) {
        var audios = document.getElementsByTagName('audio');
        for (var i = 0, len = audios.length; i < len; i++) {
          if (audios[i] != e.target) {
            audios[i].pause();
          }
        }
      },
      true
    );
  }, []);
  return (
    <div>
      <Toaster dir={'rtl'} />
      <H1>جداسازی صدای خواننده از موسیقی</H1>
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
          <MusicSeparatorContainer>
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

                <AudioProcessingButton onClick={submitFile} size='sm'>
                  پردازش صوت
                </AudioProcessingButton>
              </FlexContainer>
            </AudioContainer>
            <Divider />

            <div />
            <H2>نتیجه نهایی</H2>
            <FlexAudioPlayerContainer>
              <p>صدای خواننده</p>
              <AudioPlayerContainer>
                <AudioPlayer src={blobVocalFileUrl} controls />

                <FluidDownloadButton size='sm' href={blobVocalFileUrl} />
              </AudioPlayerContainer>
            </FlexAudioPlayerContainer>
            <FlexAudioPlayerContainer>
              <p>صدای موسیقی</p>
              <AudioPlayerContainer>
                <AudioPlayer src={blobMusicFileUrl} controls />

                <FluidDownloadButton size='sm' href={blobMusicFileUrl} />
              </AudioPlayerContainer>
            </FlexAudioPlayerContainer>
          </MusicSeparatorContainer>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MusicSeparator;
