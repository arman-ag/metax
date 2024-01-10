'use client';
import LoadingContainer from '@/app/_components/loadingContainer';
import { translatorٍErrorMessage } from '@/app/_lib/translator';
import {
  Button,
  Checkbox,
  Form,
  FormField,
  FormItem,
  Input,
  Label,
  Toaster,
  useToast,
} from '@haip/design-system';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import Container from './style';
const baseUrl = process.env.baseUrl;
const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const phoneRegExp = /^(\+98|0)?9\d{9}$/;
  const { toast } = useToast();
  const schema = Yup.object().shape({
    phone: Yup.string()
      .matches(phoneRegExp, 'فرمت وارد شده صحیح نمی باشد')
      .required('پر کردن این فیلد اجباریست'),
    email: Yup.string().email('فرمت وارد شده صحیح نمی باشد'),
    family: Yup.string(),
  });
  const form = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    const raw = await JSON.stringify({
      phone_number: data.phone,
      email: data.email ? data.email : null,
    });
    try {
      const res = await fetch(`${baseUrl}/accounts/check-user-exist/`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: raw,
      });
      const response = await res.json();

      if (res.ok) {
        setLoading(false);
        await localStorage.setItem('username', data.phone);
        router.push('/otp-code');
      } else {
        toast({
          description: translatorٍErrorMessage(response.explanation),
        });
        setLoading(false);
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
      <h1>متاکس</h1>
      <div>
        <div className='login-container'>
          <p>به سامانه متاکس خوش آمدید</p>
          <Link href='/login'>
            <Button size='md' variant='text'>
              <span>ورود</span>
            </Button>
          </Link>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='register-container'
          >
            <div className='input-margin'>
              <FormField
                control={form.control}
                name='phone'
                render={({ field }) => (
                  <FormItem>
                    <Input
                      inputSize='lg'
                      placeholder='شماره همراه خود را وارد کنید'
                      {...field}
                      label='شماره همراه *'
                    />
                  </FormItem>
                )}
              />
            </div>
            <div className='input-margin'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <Input
                      inputSize='lg'
                      placeholder='ایمیل خود را وارد کنید'
                      {...field}
                      label='ایمیل'
                    />
                  </FormItem>
                )}
              />
            </div>

            <div className='checkbox-container'>
              <Checkbox />
              <Label>ذخیره اطلاعات</Label>
            </div>
            <Button size='xl' className='register-button' type='submit'>
              ثبت نام
            </Button>
          </form>
        </Form>
      </div>
      <div className='arrangementInfo-container'>
        <p>توسعه یافته توسط شرکت مهندسی نرم افزار هلو</p>
        <p>www.holoo.com</p>
      </div>
    </Container>
  );
};

export default SignUp;
