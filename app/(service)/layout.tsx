'use client';
import { Form, FormControl, FormField, FormItem } from '@haip/design-system';
import { useForm } from 'react-hook-form';
import Layout from '../_components/layout/index';
import StatusMenuItem from '../_components/statusMenuItem';
import PaymentBar from './paymentBar';
import {
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

  const onSubmit = (data) => {
    console.log(data);
  };
  const options = [
    { label: 'موفق', value: 1 },
    { label: 'ناموق', value: '4عنوان' },
    { label: 'در حال پردازش', value: '5عنوان' },
    { label: 'همه', value: '6عنوان' },
  ];
  return (
    <Layout>
      <MainContainer>
        <PaymentBarContainer>
          <PaymentBar />
        </PaymentBarContainer>
        <StatusContainer>
          <HeaderStatusMenu>
            <h1>وضعیت پردازش های روز </h1>
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
                            style={{ margin: '0.63rem 0.75rem 1.5rem 0.75rem' }}
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
            {[...new Array(6)].map((item, key) => {
              return <StatusMenuItem key={key} />;
            })}
          </div>
        </StatusContainer>
        <ViewService>{children}</ViewService>
      </MainContainer>
    </Layout>
  );
}
