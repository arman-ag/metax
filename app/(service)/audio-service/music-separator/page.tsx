'use client';
import DownloadFile from '@/app/_components/download';
import UploadButton from '@/app/_components/uploadButton';
import { Button, Toaster, useToast } from '@haip/design-system';
import { useEffect, useState } from 'react';
const MusicSeparator = () => {
  const { toast } = useToast();
  const [voice, setVoice] = useState();
  const [blobVocalFileUrl, setBlobVocalFileUrl] = useState('/metVocalRes.wav');
  const [blobMusicFileUrl, setBlobMusicFileUrl] = useState('/metaMusicRes.wav');
  const [responseId, setResponseId] = useState();
  const [voiceUrl, setVoiceUrl] = useState('/metamusic.wav');
  const browseFile = (e) => {
    setVoice(e.target.files[0]);
    setVoiceUrl(URL.createObjectURL(e.target.files[0]));
    setBlobVocalFileUrl('');
    setBlobMusicFileUrl('');
  };
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
    <div className='relative'>
      <Toaster dir={'rtl'} />

      <div className='flex flex-col  justify-center items-center'>
        <div className='w-[68.125rem] h-[38.5rem] rounded overflow-hidden shadow-lg p-6'>
          <h2 className='text-[1.2rem] font-semibold mb-[2.44rem]'>
            گذاشتن صوت
          </h2>
          <audio src={voiceUrl} controls className='w-full' />
          <div className='flex mt-[1.56rem]'>
            <UploadButton send={browseFile} />
            <Button
              size='md'
              className='mr-2'
              variant={'outline'}
              onClick={() => submitFile()}
            >
              فرستادن موزیک
            </Button>
          </div>
          <div dir='ltr'>
            <Button onClick={() => sendVoiceId()} size='lg'>
              {/* <Countdown minutes={5} seconds={0} /> */}
              پردازش صوت
            </Button>
          </div>
          <div className='w-full  h-[.01rem] bg-gray-400 my-7' />
          <h2 className='text-[1.2rem] font-semibold mb-[2.44rem]'>
            نتیجه نهایی
          </h2>
          <p className='my-4'>صدا خواننده</p>
          <div>
            <div className='flex items-center mr-[1.5rem]'>
              <audio src={blobVocalFileUrl} controls className='w-full' />

              <DownloadFile href={blobVocalFileUrl} />
            </div>
          </div>
          <p className='my-4'>صدا موزیک</p>
          <div>
            <div className='flex items-center mr-[1.5rem]'>
              <audio src={blobMusicFileUrl} controls className='w-full' />

              <DownloadFile href={blobMusicFileUrl} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicSeparator;
