'use client';

import { DialogContentContainer } from '@/app/(withoutSidebar)/dashboard/style';
import FileIcon from '@/app/_assets/icon/file';
import NextBreadcrumb from '@/app/_components/NextBreadcrumb';
import Gallery from '@/app/_components/gallery-modal/gallery';
import { translatorٍErrorMessage } from '@/app/_lib/translator';
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
  const dispatch = useDispatch();
  const { toast } = useToast();

  const [denoiseFileAddressUrl, setDenoiseFileAddressUrl] = useState('');
  const { selectedItemGallery } = useSelector((state) => state);
  const { serviceSliceReducer } = useSelector((state) => state);

  //send highDenoise result
  const submitFile = async () => {
    const formData = new FormData();
    formData.append('voice_path', selectedItemGallery.voice_file);
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

  //get highDenoise result
  useEffect(() => {
    const celeryTaskId = localStorage.getItem('denoiser');
    //check  result status to success
    const result = serviceSliceReducer?.data?.some((item) => {
      console.log(
        'denoiseFileAddressUrl===========>',
        item.celery_task_id === celeryTaskId && item.status === 'success'
      );
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
      }
    })();
  }, [serviceSliceReducer]);
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
