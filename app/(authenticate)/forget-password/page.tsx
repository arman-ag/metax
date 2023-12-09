'use client';
import ArrowBackIcon from '@/app/_assets/icon/arrowBack';
import { Button, Form, FormField, FormItem, Input } from '@haip/design-system';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import Container from './style';
const ForgetPassword = () => {
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
                name='confirmPassword'
                render={({ field }) => (
                  <FormItem>
                    <Input
                      placeholder='شماره همراه خود را وارد کنید'
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
