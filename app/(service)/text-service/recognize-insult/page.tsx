'use client';

import HappyIcon from '@/app/_assets/icon/happy';
import SadIcon from '@/app/_assets/icon/sad';
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
  const [showResult, setShowResult] = useState(true);
  const onSubmit = async (data) => {
    console.log(data);
    const formdata = new FormData();
    formdata.append('text', data.textfield);
    try {
      const response = await insultResult(formdata);
      setSensation(response);

      setShowResult(false);
    } catch (e) {
      toast({
        description: `${e}:خطا در شبکه`,
      });
      console.log('error------------>', e);
    }
    sensation;
  };
  return (
    <div>
      <Toaster dir={'rtl'} />
      <H1>تشخیص توهین</H1>
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
            <H2 className=' font-semibold text-[1.2rem]'>گذاشتن متن</H2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FlexBox>
                  <FormField
                    control={form.control}
                    defaultValue={'زیبا'}
                    name='textfield'
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
              <InsultResultBox sensation={sensation}>
                {/* {!showResult && <LoadingContainer />} */}
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
