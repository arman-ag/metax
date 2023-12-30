'use client';
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
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { postNewPassword } from './service';
import { ChoseNewPasswordContainer } from './style';
const CreateNewPassword = () => {
  const router = useRouter();
  const { toast } = useToast();
  const schema = Yup.object().shape({
    oldPassword: Yup.string().required('پر کردن این فیلد اجباریست '),
    newPassword: Yup.string()
      .min(6, 'پسورد نباید کمتر از 6 کارکتر باشد')
      //   .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
      .required('پر کردن این فیلد اجباریست '),
    retypeNewPassword: Yup.string()
      .required('پر کردن این فیلد اجباریست')
      .oneOf([Yup.ref('newPassword')], 'پسورد وارد شده یکسان نیست'),
  });
  const form = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const choseNewPassword = {
      password: data.oldPassword,
      new_password: data.newPassword,
      repeat_new_password: data.retypeNewPassword,
    };
    const responsePostNewPassword = await postNewPassword(choseNewPassword);
    if (responsePostNewPassword !== 204) {
      toast({
        description: translatorٍErrorMessage(
          ` ${responsePostNewPassword?.error!}`
        ),
      });
    }
  };

  return (
    <ChoseNewPasswordContainer>
      <Toaster dir={'rtl'} />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name='oldPassword'
            render={({ field }) => (
              <FormItem>
                <Input
                  inputSize='lg'
                  type='password'
                  placeholder='کلمه عبور فعلی را وارد کنید'
                  {...field}
                  label=' کلمه عبور فعلی'
                />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='newPassword'
            render={({ field }) => (
              <FormItem>
                <Input
                  inputSize='lg'
                  type='password'
                  placeholder='کلمه عبور جدید را وارد کنید'
                  {...field}
                  label=' کلمه عبور جدید'
                />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='retypeNewPassword'
            render={({ field }) => (
              <FormItem>
                <Input
                  inputSize='lg'
                  type='password'
                  placeholder='  کلمه عبور جدید خود را مجدد وارد کنید '
                  {...field}
                  label=' تکرار کلمه عبور جدید'
                />
              </FormItem>
            )}
          />
          <Button className='register-button' type='submit'>
            ذخیره اطلاعات
          </Button>
        </form>
      </Form>
    </ChoseNewPasswordContainer>
  );
};

export default CreateNewPassword;
