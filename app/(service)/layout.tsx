'use client';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  Toaster,
} from '@haip/design-system';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import PajamasIcon from '../_assets/icon/pajamas';
import Layout from '../_components/layout/index';
import StatusMenuItem from '../_components/statusMenuItem';
import { getServiceStatusList } from '../redux/features/serviceStatus/statusSlice';
import PaymentBar from './paymentBar';
import {
  DayProcessContainer,
  DropDownStatusMenuFilter,
  HeaderStatusMenu,
  MainContainer,
  PaymentBarContainer,
  StatusContainer,
  ViewService,
} from './style';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const form = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
  };
  const options = [
    { label: 'موفق', value: 1 },
    { label: 'ناموق', value: '4عنوان' },
    { label: 'در حال پردازش', value: '5عنوان' },
    { label: 'لغو شده', value: '6عنوان' },
    { label: 'همه', value: '6عنوان' },
  ];
  const { serviceSliceReducer } = useSelector((state) => state);

  //pooling request
  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(getServiceStatusList());
    }, 3000);
    if (serviceSliceReducer?.data?.length !== 0) {
      const isPendedService = serviceSliceReducer?.data?.some((item) => {
        return item.status === 'started' || item.status === 'pending';
      });
      if (!isPendedService) {
        clearInterval(intervalId);
      }
    } else {
      clearInterval(intervalId);
    }
    console.log('isPendedService++++', serviceSliceReducer?.data);
    return () => clearInterval(intervalId);
  }, [serviceSliceReducer]);

  //firstreques
  useEffect(() => {
    dispatch(getServiceStatusList());
  }, []);
  // pause another audio player
  useEffect(() => {
    document.addEventListener(
      'play',
      function (e) {
        var audios = document.getElementsByTagName('audio');
        for (var i = 0, len = audios.length; i < len; i++) {
          if (audios[i] != e.target) {
            audios[i].pause();
          }
        }
      },
      true
    );
  }, []);
  console.log('serviceSliceReducer', serviceSliceReducer);
  return (
    <Layout>
      <Toaster dir={'rtl'} />
      <MainContainer>
        <PaymentBarContainer>
          <PaymentBar />
        </PaymentBarContainer>
        <StatusContainer>
          {serviceSliceReducer.isloading ? (
            <div>loading</div>
          ) : (
            <>
              <HeaderStatusMenu>
                <DayProcessContainer>
                  <PajamasIcon />
                  <h1>وضعیت پردازش های روز </h1>
                </DayProcessContainer>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className=' space-y-6'
                  >
                    <FormField
                      control={form.control}
                      name='sex'
                      render={({ field }) => {
                        return (
                          <FormItem className='basis-[20rem]'>
                            <FormControl>
                              <div
                                style={{
                                  margin: '0.63rem 0.75rem 1.5rem 0.75rem',
                                }}
                              >
                                <DropDownStatusMenuFilter
                                  placeholder='همه'
                                  options={options}
                                  searchable={true}
                                  noOptionsMessage={'آیتم مورد نظر یافت نشد'}
                                  id={'56'}
                                  label='نوع سرویس'
                                  name={field.name}
                                  value={field.value}
                                  onChange={field.onChange}
                                  ref={field.ref}
                                  onBlur={field.onBlur}
                                />
                              </div>
                            </FormControl>
                          </FormItem>
                        );
                      }}
                    />
                  </form>
                </Form>
              </HeaderStatusMenu>
              <div>
                {serviceSliceReducer?.data?.map((item, key) => {
                  return <StatusMenuItem item={item} key={key} />;
                })}
              </div>
            </>
          )}
        </StatusContainer>

        <ViewService>{children}</ViewService>
      </MainContainer>
    </Layout>
  );
}
