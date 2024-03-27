'use client';
import { getTokenWithUserPassService } from '@/app/redux/features/userAuth/authSlice';
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
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import Container from './style';

const Login = () => {
  const { userPassAuthentication } = useSelector((state) => state);
  console.log(useSelector((state) => state));
  const router = useRouter();
  const dispatch = useDispatch();

  const { toast } = useToast();
  const phoneRegExp = /^(\+98|0)?9\d{9}$/;
  const schema = Yup.object().shape({
    username: Yup.string()
      .matches(phoneRegExp, 'فرمت وارد شده صحیح نمی باشد')
      .required('پر کردن این فیلد اجباریست'),
    password: Yup.string().required('پر کردن این فیلد اجباریست'),
  });
  const form = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    await dispatch(getTokenWithUserPassService(data));
  };
  useEffect(() => {
    if (userPassAuthentication.isAuthenticate) {
      router.push('/dashboard');
    } else if (userPassAuthentication.error) {
      toast({
        description: ` کاربری با این مشخصات وجود ندارد`,
        variant: 'destructive',
      });
    }
  }, [userPassAuthentication]);

  return (
    <Container>
      <Toaster dir={'rtl'} />

      <h1>متاکس</h1>
      <div>
        <div className='login-container'>
          <p>به سامانه متاکس خوش آمدید</p>
          <Link href='/signup'>
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
                name='username'
                render={({ field }) => (
                  <FormItem>
                    <Input
                      inputSize='lg'
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
                      inputSize='lg'
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
        <p>
          گروه مهندسی نرم افزار هوشمند هلو <b>(HAIP)</b>
        </p>

        <p>www.holoo.co.ir</p>
      </div>
    </Container>
  );
};
export default Login;
