'use client';
import { Button, Form, FormField, FormItem, Input } from '@haip/design-system';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import Container from './style';
const page = () => {
  const schema = Yup.object().shape({
    password: Yup.string()
      .min(6, 'پسورد نباید کمتر از 6 کارکتر باشد')
      //   .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
      .max(8, 'پسورد نباید بیشتر  از 8 کارکتر باشد')
      .required('پر کردن این فیلد اجباریست '),
    retypePassword: Yup.string()
      //   .email('فرمت وارد شده صحیح نمی باشد')
      .required('پر کردن این فیلد اجباریست')
      .oneOf([Yup.ref('password')], 'پسورد وارد شده یکسان نیست'),
  });
  const form = useForm({
    resolver: yupResolver(schema), // yup, joi and even your own.
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
            <div className='input-margin'>
              <FormField
                control={form.control}
                name='retypePassword'
                render={({ field }) => (
                  <FormItem>
                    <Input
                      type='password'
                      placeholder='کلمه عبور خود را تکرار کنید'
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
    </Container>
  );
};

export default page;
