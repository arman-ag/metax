'use client';
import NextBreadcrumb from '@/app/_components/NextBreadcrumb';
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
import { getCorrectDictation } from './service';
import {
  CorrectDictationContainer,
  CustomTextarea,
  FlexBox,
  ShowResultBox,
  TextProcessingButton,
} from './style';
const CorrectDictation = () => {
  const { toast } = useToast();
  const form = useForm();
  const [normalizer, setNormalizer] = useState('صحیح نیست');

  const onSubmit = async (data) => {
    console.log(data);
    const formdata = new FormData();
    formdata.append('text', data.textfield);
    try {
      const response = await getCorrectDictation(formdata);
      setNormalizer(response.text);
    } catch (e) {
      toast({
        description: `${e}:خطا در شبکه`,
      });
      console.log('error------------>', e);
    }
  };
  return (
    <div>
      <Toaster dir={'rtl'} />
      <H1>غلط املایی</H1>
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
          <CorrectDictationContainer>
            <H2>وارد کردن متن</H2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FlexBox>
                  <FormField
                    defaultValue={'سحیح نیست'}
                    control={form.control}
                    name='textfield'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <CustomTextarea
                            onKeyDown={() => setNormalizer('')}
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
            <ShowResultBox className='flex ring-offset-8  ring-light-gray-inactivestates   text-dark-secondary-2 resize  outline-none min-h-[80px] w-full rounded-8  p-[.5rem]  m-[.5rem] border-input  px-3 py-2 text-sm  focus-visible:ring-primary100	 ring-1 '>
              {normalizer}
            </ShowResultBox>
            <div />
            <div />
          </CorrectDictationContainer>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CorrectDictation;
