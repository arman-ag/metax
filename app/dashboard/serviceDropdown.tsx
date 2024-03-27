'use client';

import { Form, FormControl, FormField, FormItem } from '@haip/design-system';
import { useForm } from 'react-hook-form';
import { Drop } from './style';

const ServiceDropdown = () => {
  const options = [
    { label: 'دینویزر', value: '6عنوان' },
    { label: 'جداسازی موسیقی', value: 1 },
    { label: 'تشخیص توهین', value: '4عنوان' },
    { label: 'تشخیص چهره', value: '5عنوان' },
  ];
  const form = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='type'
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Drop
                    placeholder={''}
                    options={options}
                    searchable={true}
                    noOptionsMessage={'آیتم مورد نظر یافت نشد'}
                    id={'56'}
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
      </form>
    </Form>
  );
};

export default ServiceDropdown;
