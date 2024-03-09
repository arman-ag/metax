'use client';
import imageAi from '@/app/_assets/image/imageAi.png';
import NextBreadcrumb from '@/app/_components/NextBreadcrumb';
import { H1 } from '@/app/_components/gallery-modal/style';
import { translatorٍErrorMessage } from '@/app/_lib/translator';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Toaster,
  useToast,
} from '@haip/design-system';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Divider } from '../../audio-service/denoiser/style';
import {
  CustomTextarea,
  FlexBox,
  TextProcessingButton,
} from '../correct-dictation/style';

import ResultNotReady from '@/app/_components/resultNotReady';
import { getServiceStatusList } from '@/app/redux/features/serviceStatus/statusSlice';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { RecognizeInsultContainer } from '../recognize-insult/style';
import { CallTTI } from './service';
import { H2 } from './style';

const TextToImage = () => {
  const form = useForm();
  const dispatch = useDispatch();
  const { serviceSliceReducer } = useSelector((state) => state);
  const { toast } = useToast();
  const [detectionResult, setDetectionResult] = useState(false);
  const onSubmit = async (data) => {
    const formdata = new FormData();
    formdata.append('text', data.requestText);

    try {
      const response = await CallTTI(formdata);
      localStorage.setItem('TTI', response.celery_task_id);
      dispatch(getServiceStatusList());
      console.log(response);
    } catch (e) {
      toast({
        description: translatorٍErrorMessage(e),
        variant: 'destructive',
      });
      console.log('error------------>', e);
    }
  };
  //get result
  useEffect(() => {
    const celeryTaskId = localStorage.getItem('TTI');
    //check  result status to success
    const result = serviceSliceReducer?.data?.some((item) => {
      return item.celery_task_id === celeryTaskId && item.status === 'success';
    });
    //get audio link
    // (async function () {
    //   if (result) {
    //     const celeryFormData = new FormData();
    //     celeryFormData.append('celery_task_id', celeryTaskId);
    //     const response = await getHighDenoiseResult(celeryFormData);
    //     const addressFile = response.output_file;
    //     const addressFormData = new FormData();
    //     addressFormData.append('result_link', addressFile);
    //     const resultAudio = await getDownloadFileLink(addressFormData);
    //     setDenoiseFileAddressUrl(URL.createObjectURL(resultAudio));
    //     setReadyToShow({
    //       entryData: true,
    //       response: true,
    //     });
    //   }
    // })();
  }, [serviceSliceReducer]);
  return (
    <div>
      <Toaster dir={'rtl'} />
      <H1>تبدیل متن به تصویر</H1>
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
          <RecognizeInsultContainer>
            <H2>بارگذاری فایل</H2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FlexBox>
                  <FormField
                    control={form.control}
                    name='requestText'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <CustomTextarea
                            onKeyDown={() => setShowResult(false)}
                            label=''
                            {...field}
                            dir='rtl'
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <TextProcessingButton size='sm' type='submit'>
                    پردازش متن
                  </TextProcessingButton>
                </FlexBox>
              </form>
            </Form>
            <Divider />
            <H2>نتیجه نهایی</H2>
            <div className='flex justify-center'>
              {detectionResult ? (
                <Image src={imageAi} width={346} height={150} />
              ) : (
                <ResultNotReady />
              )}
            </div>
            <div />
            <div />
          </RecognizeInsultContainer>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TextToImage;
