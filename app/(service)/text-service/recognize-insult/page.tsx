'use client';

import HappyIcon from '@/app/_assets/icon/happy';
import SadIcon from '@/app/_assets/icon/sad';
import NextBreadcrumb from '@/app/_components/NextBreadcrumb';
import ResultNotReady from '@/app/_components/resultNotReady';
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
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Divider, H1, H2 } from '../../audio-service/denoiser/style';
import {
  CustomTextarea,
  FlexBox,
  TextProcessingButton,
} from '../correct-dictation/style';
import insultResult from './service';
import { InsultResultBox, RecognizeInsultContainer } from './style';
const RecognizeInsult = () => {
  const form = useForm();
  const { toast } = useToast();
  const [sensation, setSensation] = useState('Neutral');
  const [readyToShow, setReadyToShow] = useState(false);
  const onSubmit = async (data) => {
    console.log(data);
    const formdata = new FormData();
    formdata.append('text', data.textfield);
    try {
      const response = await insultResult(formdata);
      setSensation(response);

      setReadyToShow(true);
    } catch (e) {
      toast({
        description: translatorٍErrorMessage(e),
        variant: 'destructive',
      });
      console.log('error------------>', e);
    }
    sensation;
  };
  return (
    <div>
      <Toaster dir={'rtl'} />
      <H1>تشخیص توهین</H1>
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
            <H2 className=' font-semibold text-[1.2rem]'>وارد کردن متن</H2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FlexBox>
                  <FormField
                    control={form.control}
                    name='textfield'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <CustomTextarea
                            onKeyDown={() => setReadyToShow(false)}
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
              {readyToShow ? (
                <InsultResultBox sensation={sensation}>
                  {sensation === 'Neutral' ? (
                    <div>
                      <HappyIcon />
                      <span>این متن توهین آمیز نیست</span>
                    </div>
                  ) : (
                    <div>
                      <SadIcon />
                      <span>این متن توهین آمیز است</span>
                    </div>
                  )}
                </InsultResultBox>
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

export default RecognizeInsult;
