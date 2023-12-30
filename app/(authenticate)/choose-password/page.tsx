'use client';
import LoadingContainer from '@/app/_components/loadingContainer';
import translatorٍErrorMessage from '@/app/_lib/translator';
import {
  Button,
  Form,
  FormField,
  FormItem,
  Input,
  useToast,
} from '@haip/design-system';
import { yupResolver } from '@hookform/resolvers/yup';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import Container from './style';
const ChoosePassword = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const schema = Yup.object().shape({
    userPassword: Yup.string()
      .min(6, 'پسورد نباید کمتر از 6 کارکتر باشد')
      //   .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')

      .required('پر کردن این فیلد اجباریست '),
    retypePassword: Yup.string()
      .required('پر کردن این فیلد اجباریست')
      .oneOf([Yup.ref('userPassword')], 'پسورد وارد شده یکسان نیست'),
  });
  const form = useForm({
    resolver: yupResolver(schema), // yup, joi and even your own.
  });
  const baseUrl = process.env.baseUrl;

  const onSubmit = async (data) => {
    setLoading(true);

    const phone = await localStorage.getItem('username');

    const raw = await JSON.stringify({
      phone_number: phone,
      new_password: data.userPassword,
      repeat_new_password: data.retypePassword,
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
          password: data.userPassword,
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
      {loading && <LoadingContainer />}

      <h1>تعیین کلمه عبور</h1>
      <div>
        <div className='login-container'>
          <p className='password-description'>
            رمز عبور میتواند بین 6 تا 8 کاراکتر باشد و علایم @ # = - $ % & را هم
            داشته باشد
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='input-margin'>
              <FormField
                control={form.control}
                name='userPassword'
                render={({ field }) => (
                  <FormItem>
                    <Input
                      inputSize='lg'
                      type='password'
                      placeholder='* کلمه عبور خود را وارد کنید'
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
                name='retypePassword'
                render={({ field }) => (
                  <FormItem>
                    <Input
                      inputSize='lg'
                      type='password'
                      placeholder='* کلمه عبور خود را تکرار کنید'
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
      </div>
    </Container>
  );
};

export default ChoosePassword;
