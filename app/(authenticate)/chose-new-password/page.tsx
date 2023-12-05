'use client';
import ArrowBackIcon from '@/app/_assets/icon/arrowBack';
import { Button, Form, FormField, FormItem, Input } from '@haip/design-system';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as Yup from 'yup';
const page = () => {
  const schema = Yup.object().shape({
    password: Yup.string()
      .min(6, 'پسورد نباید کمتر از 6 کارکتر باشد')
      //   .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
      .max(8, 'پسورد نباید بیشتر  از 8 کارکتر باشد')
      .required('پر کردن این فیلد اجباریست '),
    confirmPassword: Yup.string()
      //   .email('فرمت وارد شده صحیح نمی باشد')
      .required('پر کردن این فیلد اجباریست')
      .oneOf([Yup.ref('password')], 'پسورد وارد شده یکسان نیست'),
  });
  const form = useForm({
    resolver: yupResolver(schema),
  });
  const Container = styled.section`
    width: 23.31rem;
    h1 {
      margin-bottom: 1rem;
      font-size: 2rem;
      font-weight: 600;
      line-height: 1.5rem;
    }
    .password-description {
      margin-bottom: 2.5rem;
      color: #52575c;
      font-size: 0.875rem;
    }
    .login-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #52575c;
    }
    .login-container Button span {
      font-size: 1.07rem;
      font-weight: 680;
    }
    .input-margin {
      margin-top: 1rem;
    }

    .register-button {
      margin: 1rem 0 2.5rem 0;
      width: 100%;
    }
    .arrow-back-container {
      display: flex;
      align-items: center;
      font-size: 0.75rem;
    }
    .arrow-back-icon {
      width: 2rem;
      height: 2rem;
      fill: #8c43c9;
    }
  `;
  const onSubmit = async (data) => {
    try {
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Container>
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
                      placeholder='کلمه عبور جدید را وارد نمایید'
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
                      placeholder='کلمه عبور جدید را مجدد وارد نمایید'
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

export default page;
