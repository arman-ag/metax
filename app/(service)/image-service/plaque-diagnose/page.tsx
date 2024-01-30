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
import { useState } from 'react';
import {
  Divider,
  FlexContainer,
  FluidGalleryButton,
  H1,
  H2,
} from '../../audio-service/denoiser/style';

const PlaqueDiagnose = () => {
  const { toast } = useToast();
  const [voice, setVoice] = useState();
  const [asrVoice, setAsrVoice] = useState('تست ویف تست ویف خسوه');
  const [voiceUrl, setVoiceUrl] = useState('/defaultVoice.wav');
  const [showResult, setShowResult] = useState(true);
  const [focusItem, setFocusItem] = useState({});
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
            <FlexContainer></FlexContainer>
            <div />
            <Divider />
            <H2>نتیجه نهایی</H2>
          </div>
        </TabsContent>
      </Tabs>
      <Toaster dir={'rtl'} />
    </div>
  );
};

export default PlaqueDiagnose;
