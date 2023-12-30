'use client';
import ArrowBackIcon from '@/app/_assets/icon/arrowBack';
import LoadingContainer from '@/app/_components/loadingContainer';
import translatorٍErrorMessage from '@/app/_lib/translator';
import {
  Button,
  Form,
  FormField,
  FormItem,
  Input,
  Toaster,
  toast,
} from '@haip/design-system';
import { yupResolver } from '@hookform/resolvers/yup';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import Container from './style';
const ChooseNewPassword = () => {
  const [loading, setLoading] = useState(false);
  const baseUrl = process.env.baseUrl;

  const schema = Yup.object().shape({
    password: Yup.string()
      .min(6, 'پسورد نباید کمتر از 6 کارکتر باشد')
      //   .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
      .required('پر کردن این فیلد اجباریست '),
    confirmPassword: Yup.string()
      .required('پر کردن این فیلد اجباریست')
      .oneOf([Yup.ref('password')], 'پسورد وارد شده یکسان نیست'),
  });
  const form = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    const phone = await localStorage.getItem('username');

    const raw = await JSON.stringify({
      phone_number: phone,
      new_password: data.password,
      repeat_new_password: data.confirmPassword,
    });
    try {
      const res = await fetch(`${baseUrl}/accounts/set-password/`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: raw,
      });
      const response = res.json();
      console.log('response', response);
      if (res.ok) {
        await signIn('credentials', {
          phone_number: phone,
          password: data.password,
          redirect: true,
          callbackUrl: '/dashboard',
        });
      } else {
        toast({
          description: translatorٍErrorMessage(response?.explanation),
        });
      }
    } catch {
      toast({
        description: translatorٍErrorMessage('TypeError: Failed to fetch'),
      });
    }
  };
  return (
    <Container>
      <Toaster dir={'rtl'} />
      {loading && <LoadingContainer />}
      <h1>بازیابی کلمه عبور</h1>
      <div>
        <div className='login-container'>
          <p>یک رمز عبور که متفاوت از رمز عبور قبلی شما باشد انتخاب کنید</p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='register-container'
          >
            <div className='input-margin'>
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <Input
                      type='password'
                      inputSize='lg'
                      placeholder='* کلمه عبور جدید را وارد نمایید'
                      {...field}
                      label='کلمه عبور'
                    />
                  </FormItem>
                )}
              />
            </div>
            <div className='input-margin'>
              <FormField
                control={form.control}
                name='confirmPassword'
                render={({ field }) => (
                  <FormItem>
                    <Input
                      type='password'
                      inputSize='lg'
                      placeholder='* کلمه عبور جدید را مجدد وارد نمایید'
                      {...field}
                      label='تکرار کلمه عبور'
                    />
                  </FormItem>
                )}
              />
            </div>

            <Button size='xl' className='register-button' type='submit'>
              ثبت نام
            </Button>
          </form>
        </Form>
        <div className='arrangementInfo-container'></div>
      </div>
      <Link className='arrow-back-container' href={'/login'}>
        <span>بازگشت به صفحه ورود</span>
        <ArrowBackIcon className='' />
      </Link>
    </Container>
  );
};

export default ChooseNewPassword;
