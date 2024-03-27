'use client';

import FileIcon from '@/app/_assets/icon/file';
import NextBreadcrumb from '@/app/_components/NextBreadcrumb';
import { ChoseAudioGalleryFile } from '@/app/_components/choseGalleryFile';
import Gallery from '@/app/_components/gallery-modal/gallery';
import ResultNotReady from '@/app/_components/resultNotReady';
import Waveform from '@/app/_components/waveform';
import { translatorٍErrorMessage } from '@/app/_lib/translator';
import { DialogContentContainer } from '@/app/dashboard/style';
import { getServiceStatusList } from '@/app/redux/features/serviceStatus/statusSlice';
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
import { useDispatch, useSelector } from 'react-redux';
import { ChoseImageGalleryFileContainer } from '../../image-service/age-detection/style';
import {
  callDenoiseService,
  getDownloadFileLink,
  getHighDenoiseResult,
} from './service';
import {
  AudioContainer,
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
  const dispatch = useDispatch();
  const { toast } = useToast();
  const [denoiseFileAddressUrl, setDenoiseFileAddressUrl] = useState('');
  const { selectedItemGallery } = useSelector((state) => state);
  const { serviceSliceReducer } = useSelector((state) => state);
  const [readyToShow, setReadyToShow] = useState({
    entryData: false,
    response: false,
  });

  //send highDenoise result
  const submitFile = async () => {
    const formData = new FormData();
    formData.append('file_path', selectedItemGallery['denoiser']?.voice_file);
    try {
      const response = await callDenoiseService(formData);
      localStorage.setItem('denoiser', response.celery_task_id);
      dispatch(getServiceStatusList());
    } catch (e) {
      toast({
        description: translatorٍErrorMessage(e),
        variant: 'destructive',
      });
      console.log('error', e);
    }
  };

  // get highDenoise result
  useEffect(() => {
    const celeryTaskId = localStorage.getItem('denoiser');
    //check  result status to success
    const result = serviceSliceReducer?.data?.some((item) => {
      return item.celery_task_id === celeryTaskId && item.status === 'success';
    });

    //get audio link
    (async function () {
      if (result) {
        const celeryFormData = new FormData();
        celeryFormData.append('celery_task_id', celeryTaskId);
        const response = await getHighDenoiseResult(celeryFormData);
        const addressFile = response.output_file;
        const addressFormData = new FormData();
        addressFormData.append('result_link', addressFile);
        const resultAudio = await getDownloadFileLink(addressFormData);
        setDenoiseFileAddressUrl(URL.createObjectURL(resultAudio));
        setReadyToShow({
          entryData: true,
          response: true,
        });
      }
    })();
    console.log('result', result);
  }, [serviceSliceReducer]);
  //show music player when chose audio from gallery
  useEffect(() => {
    selectedItemGallery['denoiser'] &&
      setReadyToShow({ response: false, entryData: true });
  }, [selectedItemGallery]);
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
            {readyToShow.entryData ? (
              <AudioContainer>
                <Dialog>
                  <DialogTrigger asChild>
                    <FluidGalleryButton size={'sm'} variant={'outline'}>
                      <FileIcon />
                      <span>فایل ها</span>
                    </FluidGalleryButton>
                  </DialogTrigger>

                  <DialogContentContainer dir={'rtl'}>
                    <Gallery defaultTab={'user-voice'} />
                  </DialogContentContainer>
                </Dialog>
                <FlexContainer>
                  <Waveform
                    audio={selectedItemGallery['denoiser']?.voice_file}
                  />
                  <AudioProcessingButton onClick={submitFile} size='sm'>
                    پردازش صوت
                  </AudioProcessingButton>
                </FlexContainer>
              </AudioContainer>
            ) : (
              <Dialog>
                <DialogTrigger asChild>
                  <ChoseImageGalleryFileContainer>
                    <ChoseAudioGalleryFile />
                  </ChoseImageGalleryFileContainer>
                </DialogTrigger>
                <DialogContentContainer dir={'rtl'}>
                  <Gallery defaultTab={'user-voice'} />
                </DialogContentContainer>
              </Dialog>
            )}

            <Divider />
            <H2>نتیجه نهایی</H2>
            <FlexAudioPlayerContainer>
              {readyToShow.response ? (
                <div>
                  <p>صدای بدون نویز</p>
                  <AudioPlayerContainer>
                    <Waveform audio={denoiseFileAddressUrl} />
                    <FluidDownloadButton
                      size='sm'
                      href={denoiseFileAddressUrl}
                    />
                  </AudioPlayerContainer>
                </div>
              ) : (
                <ResultNotReady />
              )}
            </FlexAudioPlayerContainer>
          </DenoiserContainer>
        </TabsContent>
      </Tabs>
      <Toaster dir={'rtl'} />
    </div>
  );
};

export default Denoiser;
