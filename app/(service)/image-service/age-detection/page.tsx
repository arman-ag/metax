'use client';
import { DialogContentContainer } from '@/app/(withoutSidebar)/dashboard/style';
import FileIcon from '@/app/_assets/icon/file';
import NextBreadcrumb from '@/app/_components/NextBreadcrumb';
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
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Divider, H1, H2 } from '../../audio-service/denoiser/style';
import {
  FlexImageContainer,
  FluidImageGalleryButton,
  ImageContainerUploader,
} from '../plaque-diagnose/style';
const Canvas = dynamic(() => import('@/canvas'), {
  ssr: false,
});

const AgeDetection = () => {
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
  // const canvasRef = useRef(null);
  // let context = null;

  // useEffect(() => {
  //   if (canvasRef.current) {
  //     context = canvasRef.current.getContext('2d');

  //     // Load your image (e.g., using Next.js Image component)
  //     const image = new Image();
  //     image.src = './download (3).jpg';

  //     // Wait for the image to load
  //     image.onload = () => {
  //       context.drawImage(image, 0, 0);
  //     };
  //   }
  // }, []);
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
                {/* <Image src={imageAi} width={346} height={150} /> */}
                <Button>پردازش تصویر</Button>
              </FlexImageContainer>
            </ImageContainerUploader>
            <Divider />
            <H2>نتیجه نهایی</H2>
            <FlexImageContainer>
              {/* <Image src={imageAi} width={346} height={150} /> */}
              <Canvas />
            </FlexImageContainer>
          </div>
        </TabsContent>
      </Tabs>
      <Toaster dir={'rtl'} />
    </div>
  );
};

export default AgeDetection;
