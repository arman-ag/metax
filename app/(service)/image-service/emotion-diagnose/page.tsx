'use client';
import FileIcon from '@/app/_assets/icon/file';
import NextBreadcrumb from '@/app/_components/NextBreadcrumb';
import { ChoseImageGalleryFile } from '@/app/_components/choseGalleryFile';
import Gallery from '@/app/_components/gallery-modal/gallery';
import ResultNotReady from '@/app/_components/resultNotReady';
import { translatorٍErrorMessage } from '@/app/_lib/translator';
import { DialogContentContainer } from '@/app/dashboard/dashboard/style';
import {
  Button,
  Dialog,
  DialogTrigger,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Toaster,
  useToast,
} from '@haip/design-system';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Divider, H1, H2 } from '../../audio-service/denoiser/style';
import { ChoseImageGalleryFileContainer } from '../age-detection/style';
import {
  FlexImageContainer,
  FluidImageGalleryButton,
  ImageContainerUploader,
} from '../plaque-diagnose/style';
import { getEmotionDetection } from './service';
const Canvas = dynamic(() => import('./canvas'), {
  ssr: false,
});

const EmotionDiagnose = () => {
  const { toast } = useToast();
  const [detectionResult, setDetectionResult] = useState();
  const [readyToShow, setReadyToShow] = useState({
    entryData: false,
    response: false,
  });
  const { selectedItemGallery } = useSelector((state) => state);

  const submitFile = async () => {
    const formData = new FormData();
    formData.append(
      'image_path',
      selectedItemGallery['emotion-diagnose']?.image_file
    );

    const res = await getEmotionDetection(formData);
    console.log('ress====', res);
    if (res.status !== 200) {
      toast({
        description: translatorٍErrorMessage(res.status),
        variant: 'destructive',
      });
    }
    const response = res.data;
    setDetectionResult(response);
    setReadyToShow({ response: true, entryData: true });
  };
  useEffect(() => {
    selectedItemGallery['emotion-diagnose'] &&
      setReadyToShow({ response: false, entryData: true });
  }, [selectedItemGallery]);
  return (
    <div>
      <H1>تشخیص احساسات</H1>
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
          <div>
            <H2>بارگذاری فایل</H2>
            {readyToShow.entryData ? (
              <ImageContainerUploader>
                <Dialog>
                  <DialogTrigger asChild>
                    <FluidImageGalleryButton size={'sm'} variant={'outline'}>
                      <FileIcon />
                      <span>فایل ها</span>
                    </FluidImageGalleryButton>
                  </DialogTrigger>
                  <DialogContentContainer dir={'rtl'}>
                    <Gallery defaultTab={'user-image'} />
                  </DialogContentContainer>
                </Dialog>
                <FlexImageContainer>
                  <Canvas
                    imageUrl={
                      selectedItemGallery['emotion-diagnose']?.image_file
                    }
                  />
                  <Button onClick={() => submitFile()}>پردازش تصویر</Button>
                </FlexImageContainer>
              </ImageContainerUploader>
            ) : (
              <Dialog>
                <DialogTrigger asChild>
                  <ChoseImageGalleryFileContainer>
                    <ChoseImageGalleryFile />
                  </ChoseImageGalleryFileContainer>
                </DialogTrigger>
                <DialogContentContainer dir={'rtl'}>
                  <Gallery defaultTab={'user-image'} />
                </DialogContentContainer>
              </Dialog>
            )}

            <Divider />
            <H2>نتیجه نهایی</H2>
            <FlexImageContainer>
              {readyToShow.response ? (
                <Canvas
                  detectionResult={detectionResult}
                  imageUrl={selectedItemGallery['emotion-diagnose']?.image_file}
                />
              ) : (
                <ResultNotReady />
              )}
            </FlexImageContainer>
          </div>
        </TabsContent>
      </Tabs>
      <Toaster dir={'rtl'} />
    </div>
  );
};

export default EmotionDiagnose;