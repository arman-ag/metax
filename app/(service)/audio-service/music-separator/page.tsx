'use client';
import { DialogContentContainer } from '@/app/(withoutSidebar)/dashboard/style';
import FileIcon from '@/app/_assets/icon/file';
import NextBreadcrumb from '@/app/_components/NextBreadcrumb';
import Gallery from '@/app/_components/gallery-modal/gallery';
import { translatorٍErrorMessage } from '@/app/_lib/translator';
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
import { useSelector } from 'react-redux';
import { getDownloadFileLink } from '../denoiser/service';
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
import { callLowDenoiseService, getLowDenoiseResult } from './service';
import { MusicSeparatorContainer } from './style';
const MusicSeparator = () => {
  const { toast } = useToast();
  const [voice, setVoice] = useState();
  const [blobVocalFileUrl, setBlobVocalFileUrl] = useState('/metVocalRes.wav');
  const [blobMusicFileUrl, setBlobMusicFileUrl] = useState('/metaMusicRes.wav');
  const [responseId, setResponseId] = useState();
  const { selectedItemGallery } = useSelector((state) => state);
  const { serviceSliceReducer } = useSelector((state) => state);

  const submitFile = async () => {
    try {
      const formData = new FormData();
      formData.append('voice_path', selectedItemGallery.voice_file);
      const response = await callLowDenoiseService(formData);
      localStorage.setItem('music', response.celery_task_id);
    } catch (e) {
      toast({
        description: translatorٍErrorMessage(e),
      });
      console.log('error============>', e);
    }
  };
  //get lowDenoise result
  useEffect(() => {
    const celeryTaskId = localStorage.getItem('music');
    //check  result status to success
    const result = serviceSliceReducer?.data?.results?.some((item) => {
      return item.celery_task_id === celeryTaskId && item.status === 'success';
    });
    //get audio link
    (async function () {
      if (result) {
        const celeryFormData = new FormData();
        celeryFormData.append('celery_task_id', celeryTaskId);
        const response = await getLowDenoiseResult(celeryFormData);
        const addressFile = response.output_file;
        const addressFormData = new FormData();
        addressFormData.append('result_link', addressFile);
        const resultAudio = await getDownloadFileLink(addressFormData);
        console.log(resultAudio);
        // setDenoiseFileAddressUrl(URL.createObjectURL(resultAudio));
      }
    })();
  }, [serviceSliceReducer]);

  //       //file address
  //       const { vocal_file: vocalFileAddress } = await response;
  //       const { instrument_file: instrumentFileAddress } = await response;
  //       // get vocal file  address
  //       const vocalFileAddressFormData = await new FormData();
  //       await vocalFileAddressFormData.append(
  //         'low_denoise_result_link',
  //         vocalFileAddress
  //       );
  //       await vocalFileAddressFormData.append(
  //         'low_denoise_result_file_extension',
  //         'wav'
  //       );

  //       const getVocalFileAddress = await fetch(
  //         'http://172.16.60.151:8000/denoise/low-denoise-result/',
  //         {
  //           method: 'POST',
  //           body: vocalFileAddressFormData,
  //         }
  //       );
  //       //get music file
  //       const musicFileAddressFormData = await new FormData();
  //       await musicFileAddressFormData.append(
  //         'low_denoise_result_link',
  //         instrumentFileAddress
  //       );
  //       await musicFileAddressFormData.append(
  //         'low_denoise_result_file_extension',
  //         'wav'
  //       );
  //       const getMusicFileAddress = await fetch(
  //         'http://172.16.60.151:8000/denoise/low-denoise-result/',
  //         {
  //           method: 'POST',
  //           body: musicFileAddressFormData,
  //         }
  //       );
  //       //blob vocal file
  //       const blobVocalFile = await getVocalFileAddress.blob();
  //       setBlobVocalFileUFluidGalleryButtonActionle = await getMusicFileAddress.blob();
  //       setBlobMusicFileUrl(URL.createObjectURL(blobMusicFile));
  //     } catch (e) {
  //       toast({
  //         description: `${e}:خطا در شبکه`,
  //       });
  //       console.log('error============>', e);
  //     }
  //   }
  // };
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
          <MusicSeparatorContainer>
            <H2>بارگذاری فایل</H2>
            <AudioContainer>
              <Dialog>
                <DialogTrigger asChild>
                  <FluidGalleryButton
                    onClick={fluidGalleryButtonAction}
                    size={'sm'}
                    variant={'outline'}
                  >
                    <FileIcon />
                    <span>فایل ها</span>
                  </FluidGalleryButton>
                </DialogTrigger>

                <DialogContentContainer dir={'rtl'}>
                  <Gallery />
                </DialogContentContainer>
              </Dialog>
              <FlexContainer>
                <AudioPlayer src={selectedItemGallery?.voice_file} controls />

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
