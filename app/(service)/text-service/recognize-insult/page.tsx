'use client';

import HappyIcon from '@/app/_assets/icon/happy';
import SadIcon from '@/app/_assets/icon/sad';
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
      const res = await fetch('http://hirax.com:2005/get_text_hate', {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
      });
      const response = await res.text();
      setSensation(response);
      setShowResult(true);
    } catch (e) {
      toast({
        description: `${e}:خطا در شبکه`,
      });
      console.log('error------------>', e);
    }
  };
  return (
    <div className='relative'>
      <Toaster dir={'rtl'} />
      <div className='flex flex-col  justify-center items-center'>
        <div className='w-[68.125rem] h-[38.5rem] rounded overflow-hidden shadow-lg p-6'>
          <h2 className=' font-semibold text-[1.2rem]'>گذاشتن متن</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                defaultValue={'زیبا'}
                name='textfield'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        onKeyDown={() => setShowResult(false)}
                        label=''
                        {...field}
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
          <div className='flex justify-center'>
            <div
              className={`relative h-[4.1rem] w-[20.375rem] ${
                sensation === 'Neutral' ? 'bg-[#306A04]' : 'bg-[#EC4A5E]'
              }  rounded-[0.5rem] flex  items-center  justify-center text-[#EFEFEF]`}
            >
              {!showResult && (
                <div className='h-[4.1rem] w-[20.375rem] bg-white absolute top-0 left-0  opacity-90 text-black flex justify-center  items-center z-30'>
                  درحال پردازش
                </div>
              )}
              {sensation === 'Neutral' ? (
                <div className='flex  items-center  '>
                  <HappyIcon />
                  <span className='mr-[1.5rem]'>این متن توهین آمیز نیست</span>
                </div>
              ) : (
                <div className='flex  items-center '>
                  <SadIcon />
                  <span className='mr-[1.5rem]'>این متن توهین آمیز است</span>
                </div>
              )}
            </div>
          </div>
          <div />
          <div />
        </div>
      </div>
    </div>
  );
};

export default RecognizeInsult;
