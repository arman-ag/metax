'use client';
import {
  Button,
  Checkbox,
  Form,
  FormField,
  FormItem,
  Input,
  Label,
} from '@haip/design-system';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import Container from './style';

const Login = () => {
  const phoneRegExp = /^(\+98|0)?9\d{9}$/;
  const schema = Yup.object().shape({
    phone: Yup.string()
      .matches(phoneRegExp, 'فرمت وارد شده صحیح نمی باشد')
      .required('پر کردن این فیلد اجباریست'),
    password: Yup.string().required('پر کردن این فیلد اجباریست'),
  });
  const form = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Container>
      <h1>متاکس</h1>
      <div>
        <div className='login-container'>
          <p>به سامانه متاکس خوش آمدید</p>
          <Link href='/sign-up'>
            <Button size='md' variant='text'>
              <span>ثبت نام</span>
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
                      placeholder='شماره همراه خود را وارد کنید'
                      {...field}
                      label='شماره همراه '
                    />
                  </FormItem>
                )}
              />
            </div>

            <div className='input-margin'>
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <Input
                      type='password'
                      placeholder='کلمه عبور خود را وارد کنید'
                      {...field}
                      label='کلمه عبور'
                    />
                  </FormItem>
                )}
              />
            </div>
            <Link href='/forget-password'>
              <p className=' forget-password-container'>
                کلمه عبور خود را فراموش کرده ام
              </p>
            </Link>
            <div className='checkbox-container'>
              <Checkbox />
              <Label>ذخیره اطلاعات</Label>
            </div>
            <Button size='xl' className='register-button' type='submit'>
              ورود
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
export default Login;
