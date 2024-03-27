'use client';
import NextBreadcrumb from '@/app/_components/NextBreadcrumb';
import DownloadFile from '@/app/_components/download';
import ResultNotReady from '@/app/_components/resultNotReady';
import Waveform from '@/app/_components/waveform';
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
import {
  AudioPlayerContainer,
  Divider,
  FlexAudioPlayerContainer,
  H1,
  H2,
} from '../../audio-service/denoiser/style';
import {
  CustomTextarea,
  FlexBox,
  TextProcessingButton,
} from '../correct-dictation/style';
import getAudioFile from './service';
import { TTSContainer } from './style';
const TTS = () => {
  const { toast } = useToast();

  const form = useForm();
  const [tts, setTTS] = useState();
  const [readyToShow, setReadyToShow] = useState(false);

  const onSubmit = async (data) => {
    try {
      const blobRes = await getAudioFile(data.textfield);
      setTTS(URL.createObjectURL(blobRes));
      setReadyToShow(true);
    } catch (e) {
      toast({
        description: translatorٍErrorMessage(e.response.status),
        variant: 'destructive',
      });
      console.log('error------------>', e);
    }
  };
  return (
    <div>
      <Toaster dir={'rtl'} />
      <H1>تبدیل متن به گفتار</H1>
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
          <TTSContainer>
            <H2>وارد کردن متن</H2>
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
                            onKeyDown={() => setTTS('')}
                            {...field}
                            label=''
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
            <FlexAudioPlayerContainer>
              {readyToShow ? (
                <div>
                  <p>متن خوانده شده</p>
                  <AudioPlayerContainer>
                    <Waveform audio={tts} />
                    <DownloadFile size='sm' href={tts} />
                  </AudioPlayerContainer>
                </div>
              ) : (
                <ResultNotReady />
              )}
            </FlexAudioPlayerContainer>

            <div />
            <div />
          </TTSContainer>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TTS;
