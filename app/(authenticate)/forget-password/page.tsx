'use client';
import ArrowBackIcon from '@/app/_assets/icon/arrowBack';
import translatorٍErrorMessage from '@/app/_lib/translator';
import {
  Button,
  Form,
  FormField,
  FormItem,
  Input,
  Toaster,
  useToast,
} from '@haip/design-system';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import Container from './style';
const ForgetPassword = () => {
  const { toast } = useToast();

  const phoneRegExp = /^(\+98|0)?9\d{9}$/;
  const schema = Yup.object().shape({
    phone: Yup.string()
      .matches(phoneRegExp, 'فرمت وارد شده صحیح نمی باشد')
      .required('پر کردن این فیلد اجباریست'),
  });
  const form = useForm({
    resolver: yupResolver(schema),
  });
  const baseUrl = process.env.baseUrl;
  const router = useRouter();

  const onSubmit = async (data) => {
    const raw = await JSON.stringify({
      phone_number: data.phone,
    });
    try {
      const res = await fetch(`${baseUrl}/accounts/forget-password/`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: raw,
      });
      if (res.ok) {
        await localStorage.setItem('username', data.phone);
        router.push('/forget-otp-code');
      } else {
        toast({
          description: translatorٍErrorMessage(res.status),
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

      <h1>بازیابی کلمه عبور</h1>
      <div>
        <div className='login-container'>
          <p>
            شماره همراهی که با آن در سامانه ثبت نام کرده اید را جهت ارسال کد
            وارد کنید
          </p>
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
                      placeholder='* شماره همراه خود را وارد کنید'
                      {...field}
                      label='شماره همراه'
                    />
                  </FormItem>
                )}
              />
            </div>

            <Button size='xl' className='register-button' type='submit'>
              ورود
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

export default ForgetPassword;
