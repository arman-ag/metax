import { provinces } from '@/app/_assets/rawData';
import translatorٍErrorMessage from '@/app/_lib/translator';
import {
  Button,
  DropDown,
  Form,
  FormControl,
  FormField,
  FormItem,
  Input,
  useToast,
} from '@haip/design-system';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { posteUserDetail } from './service';
import { EditProfileContainer } from './style';

type EditProfileProps = {
  setEditProfile: React.Dispatch<React.SetStateAction<boolean>>;
  path: any;
};
const EditProfile = ({
  setEditProfile,
  entryImage,
  profileInfo,
}: EditProfileProps) => {
  const { toast } = useToast();
  const [imageFile, setImageFile] = useState(null);
  const schema = Yup.object().shape({
    name: Yup.string().min(2, 'نام نباید کمتر از 2 کارکتر باشد'),
    family: Yup.string().min(2, 'نام خانوادگی نباید کمتر از 2 کارکتر باشد'),
    email: Yup.string().email('فرمت وارد شده صحیح نمی باشد'),
  });
  const form = useForm({
    resolver: yupResolver(schema),
  });
  // useEffect(() => {
  //   (async function () {
  //     const file = await convertImageLinkToFile(image);
  //     setImageFile(file);
  //   })();
  // }, []);
  const onSubmit = async (data) => {
    console.log(!entryImage);
    const userDetails = {
      first_name: data.name || '',
      last_name: data.family || '',
      email: data.email || '',
      province: data.province.value || '',
    };
    if (!entryImage) {
      userDetails.profile_picture = null;
      var responseUserDetail = await posteUserDetail(userDetails);
    } else {
      const formData = new FormData();
      for (const key in userDetails) {
        formData.append(key, userDetails[key]);
      }

      formData.append('profile_picture', entryImage);
      var responseUserDetail = await posteUserDetail(formData);
    }

    if (responseUserDetail.status === 204) {
      setEditProfile(false);
    } else {
      toast({
        description: translatorٍErrorMessage(` ${responseUserDetail?.status}`),
        variant: 'destructive',
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <EditProfileContainer>
          <FormField
            defaultValue={profileInfo.first_name}
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className='items'>
                <Input label={'نام'} type='text' placeholder='نام' {...field} />
              </FormItem>
            )}
          />

          <FormField
            defaultValue={profileInfo.last_name}
            control={form.control}
            name='family'
            render={({ field }) => (
              <FormItem className='items'>
                <Input
                  label={'نام خانوادگی'}
                  type='text'
                  placeholder=' نام خانوادگی'
                  {...field}
                />
              </FormItem>
            )}
          />

          <FormField
            defaultValue={profileInfo.email}
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='items'>
                <Input
                  label={'ایمیل'}
                  type='text'
                  placeholder='ایمیل'
                  {...field}
                />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            defaultValue={{
              value: profileInfo.province,
              label: profileInfo.province,
            }}
            name='province'
            render={({ field }) => {
              return (
                <FormItem className='items'>
                  <FormControl>
                    <DropDown
                      placeholder='استان'
                      label='استان'
                      options={provinces}
                      noOptionsMessage=' نام استان مورد نظر یافت نشد'
                      searchable={true}
                      id={'57'}
                      name={field.name}
                      value={field.value}
                      onChange={field.onChange}
                      ref={field.ref}
                      onBlur={field.onBlur}
                    />
                  </FormControl>
                </FormItem>
              );
            }}
          />
          <div className='button-container'>
            <Button size='md' type='submit'>
              ذخیره اطلاعات
            </Button>
            <Button
              onClick={() => setEditProfile(false)}
              size='md'
              variant='outline'
            >
              انصراف
            </Button>
          </div>
        </EditProfileContainer>
      </form>
    </Form>
  );
};

export default EditProfile;
