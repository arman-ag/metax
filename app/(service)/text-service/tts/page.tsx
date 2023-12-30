'use client';
import DownloadFile from '@/app/_components/download';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  Textarea,
  Toaster,
  useToast,
} from '@haip/design-system';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
const TTS = () => {
  const { toast } = useToast();

  const form = useForm();
  const [tts, setTTS] = useState('./ttsAudio.wav');
  const onSubmit = async (data) => {
    const formdata = new FormData();
    formdata.append('text', data.textfield);
    try {
      const res = await fetch(
        `http://10.82.82.100:2008/api/tts?text=${data.textfield}&voice=fa/haaniye_low&noiseScale=0.667&noiseW=0.8&lengthScale=1&ssml=false&audioTarget=client`,
        {
          method: 'GET',
          redirect: 'follow',
        }
      );
      const blob = await res.blob();

      setTTS(URL.createObjectURL(blob));
    } catch (e) {
      toast({
        description: `${e}:خطا در شبکه`,
      });
      console.log('error------------>', e);
    }
  };
  return (
    <div className='relative'>
      <div className='flex flex-col  justify-center items-center'>
        <Toaster dir={'rtl'} />
        <div className='w-[68.125rem] h-[38.5rem] rounded overflow-hidden shadow-lg p-6'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                defaultValue={'سلام چطوری'}
                name='textfield'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        onKeyDown={() => setTTS('')}
                        {...field}
                        label=''
                        dir='rtl'
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div dir='ltr'>
                <Button className='mt-[2.25rem]' type='submit'>
                  پردازش متن
                </Button>
              </div>
            </form>
          </Form>
          <div className='w-full  h-[.01rem] bg-gray-400 my-7' />
          <h2 className='text-[1.2rem] font-semibold mb-[2.44rem]'>
            نتیجه نهایی
          </h2>
          <p className='mb-4'>متن خوانده شده</p>
          <div className='flex items-center mt-[.56rem]'>
            <audio src={tts} controls className='w-[33.21rem]' />

            <DownloadFile href={tts} />
          </div>
          <div />
          <div />
        </div>
      </div>
    </div>
  );
};

export default TTS;
