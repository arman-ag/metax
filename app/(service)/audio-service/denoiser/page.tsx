'use client';
import DownloadFile from '@/app/_components/download';

import UploadButton from '@/app/_components/uploadButton';
import { Button, Toaster, useToast } from '@haip/design-system';
import { useEffect, useState } from 'react';
import {
  AudioPlayer,
  AudioPlayerContainer,
  DenoiserContainer,
  Divider,
  H2,
} from './style';
const Denoiser = () => {
  const { toast } = useToast();
  const [voice, setVoice] = useState(null);
  const [voiceUrl, setVoiceUrl] = useState('./metVocalRes.wav');
  const [responseId, setResponseId] = useState('');
  const [denoiseFileAddressUrl, setDenoiseFileAddressUrl] =
    useState('./metVocalRes.wav');
  const browseFile = (e) => {
    setVoice(e.target.files[0]);
    setVoiceUrl(URL.createObjectURL(e.target.files[0]));
    setDenoiseFileAddressUrl('');
  };
  const submitFile = async () => {
    const formData = new FormData();
    formData.append('title', 'test8');
    formData.append('description', 'test2');
    formData.append('voice_file', voice);
    try {
      const res = await fetch(
        'http://172.16.60.151:8000/voice-gallery/crud-voice/',
        {
          method: 'POST',
          body: formData,
        }
      );
      const responseId = await res.json();
      setResponseId(responseId.id.toString());
    } catch (e) {
      toast({
        description: `${e}:خطا در شبکه`,
      });
      console.log('error', e);
    }
  };
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
  setTimeout(sendVoiceId, 3 * 60 * 1000);
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
      <DenoiserContainer>
        <H2>بارگذاری فایل</H2>
        <AudioPlayer src={voiceUrl} controls />
        <div className='flex mt-[1.56rem]'>
          <UploadButton send={browseFile} />

          <Button
            className='mr-2'
            variant={'outline'}
            onClick={() => submitFile()}
          >
            فرستادن صوت
          </Button>
        </div>
        <div dir='ltr'>
          <Button onClick={sendVoiceId} size='lg'>
            پردازش صوت
          </Button>
        </div>
        <Divider />
        <H2>نتیجه نهایی</H2>
        <p className='mb-4'>صدا بدون نویز</p>
        <div>
          <AudioPlayerContainer>
            <AudioPlayer src={denoiseFileAddressUrl} controls />
            <DownloadFile href={denoiseFileAddressUrl} />
          </AudioPlayerContainer>
        </div>
      </DenoiserContainer>
      <Toaster dir={'rtl'} />
    </div>
  );
};

export default Denoiser;
