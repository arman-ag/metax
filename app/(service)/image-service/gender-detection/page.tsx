'use client';
import { DialogContentContainer } from '@/app/(withoutSidebar)/dashboard/style';
import FileIcon from '@/app/_assets/icon/file';
import imageAi from '@/app/_assets/image/imageAi.png';
import NextBreadcrumb from '@/app/_components/NextBreadcrumb';
import { ChoseImageGalleryFile } from '@/app/_components/choseGalleryFile';
import Gallery from '@/app/_components/gallery-modal/gallery';
import { translatorٍErrorMessage } from '@/app/_lib/translator';
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
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Divider, H1, H2 } from '../../audio-service/denoiser/style';
import Canvas from '../age-detection/canvas';
import { ChoseImageGalleryFileContainer } from '../age-detection/style';
import {
  FlexImageContainer,
  FluidImageGalleryButton,
  ImageContainerUploader,
} from '../plaque-diagnose/style';

const genderDetection = () => {
  const { toast } = useToast();
  const [voice, setVoice] = useState();
  const [asrVoice, setAsrVoice] = useState('تست ویف تست ویف خسوه');
  const [voiceUrl, setVoiceUrl] = useState('/defaultVoice.wav');
  const [showResult, setShowResult] = useState(true);
  const [focusItem, setFocusItem] = useState({});
  const [enterImage, setEnterImage] = useState(false);

  const browseFile = (e) => {
    setVoice(e.target.files[0]);
    setVoiceUrl(URL.createObjectURL(e.target.files[0]));
    setShowResult(false);
  };
  const submitFile = async () => {
    const formData = new FormData();
    formData.append('file', voice);

    const res = await fetch('http://hirax.com:2003/', {
      method: 'POST',
      body: formData,
      redirect: 'follow',
    });
    if (res.status !== 200) {
      toast({
        description: translatorٍErrorMessage(res.status),
        variant: 'destructive',
      });
      setShowResult(false);
    }
    const response = await res.json();
    setAsrVoice(response.text);
    setShowResult(true);
  };
  const { selectedItemGallery } = useSelector((state) => state);
  const { serviceSliceReducer } = useSelector((state) => state);
  console.log('selectedItemGallery', selectedItemGallery);
  useEffect(() => {
    selectedItemGallery['gender-detection'] && setEnterImage(true);
  }, [selectedItemGallery]);
  console.log('enterImage', selectedItemGallery);
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
          <div>
            <H2>بارگذاری فایل</H2>

            {enterImage ? (
              <ImageContainerUploader>
                <Dialog>
                  <DialogTrigger asChild>
                    <FluidImageGalleryButton size={'sm'} variant={'outline'}>
                      <FileIcon />
                      <span>فایل ها</span>
                    </FluidImageGalleryButton>
                  </DialogTrigger>
                  <DialogContentContainer dir={'rtl'}>
                    <Gallery />
                  </DialogContentContainer>
                </Dialog>
                <FlexImageContainer>
                  <Canvas
                    imageUrl={
                      selectedItemGallery['gender-detection'].image_file
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
                  <Gallery />
                </DialogContentContainer>
              </Dialog>
            )}

            <Divider />
            <H2>نتیجه نهایی</H2>
            <FlexImageContainer>
              <Image src={imageAi} width={346} height={150} />
            </FlexImageContainer>
          </div>
        </TabsContent>
      </Tabs>
      <Toaster dir={'rtl'} />
    </div>
  );
};

export default genderDetection;
