'use client';
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
import { CorrectDictationContainer } from './style';
const CorrectDictation = () => {
  const { toast } = useToast();
  const form = useForm();
  const [normalizer, setNormalizer] = useState('صحیح نیست');

  const onSubmit = async (data) => {
    console.log(data);
    const formdata = new FormData();
    formdata.append('text', data.textfield);
    try {
      const res = await fetch('http://10.82.82.100:2001/chat', {
        method: 'POST',

        body: formdata,
        redirect: 'follow',
      });
      const response = await res.json();
      setNormalizer(response.text);
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
      <CorrectDictationContainer>
        <div>
          <h2 className='text-[1.2rem] font-semibold '>گذاشتن متن</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                defaultValue={'سحیح نیست'}
                control={form.control}
                name='textfield'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        onKeyDown={() => setNormalizer('')}
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
          <h2 className='text-[1.2rem] font-semibold mb-8'>نتیجه نهایی</h2>
          <div className='flex ring-offset-8  ring-light-gray-inactivestates   text-dark-secondary-2 resize  outline-none min-h-[80px] w-full rounded-8  p-[.5rem]  m-[.5rem] border-input  px-3 py-2 text-sm  focus-visible:ring-primary100	 ring-1 '>
            {normalizer}
          </div>
          <div />
          <div />
        </div>
      </CorrectDictationContainer>
    </div>
  );
};

export default CorrectDictation;
