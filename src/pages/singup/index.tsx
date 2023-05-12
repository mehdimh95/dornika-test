import FormController from '@/components/FormController';
import { Calendar } from '@/components/icons/calender';
import { Card } from '@/components/icons/card';
import { User } from '@/components/icons/user';
import Layout from '@/components/layout/Layout';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

export interface FormValues {
  name: string;
  id: number;
  birth: string;
}

const SingUpSchema = yup
  .object({
    id: yup
      .string()
      .required('این فیلد اجباری است')
      .length(10, ' شماره صحیح نیست')
      .matches(/[0-9]{10}/, ' شماره صحیح نیست'),

    name: yup
      .string()
      .required('نام خود را وارد کنید')
      .min(2, 'حداقل دو کاراکتر')
      .max(30, 'حداکثر 30 کاراکتر'),

    birth: yup
      .string()
      .required('تاریخ تولد را وارد کنید')
      .max(10)
      .min(10, ' تاریخ تولد کامل نیست')
      .matches(/^\d{4}\/\d{2}\/\d{2}$/, 'تاریخ تولد را درست وارد کنید'),
  })
  .required();

export default function SingUp() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onTouched',
    shouldFocusError: true,
    resolver: yupResolver(SingUpSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (fieldsData) => {
    localStorage.setItem('login-1', JSON.stringify(fieldsData));
    console.log(fieldsData);
  };
  console.log(errors);

  console.log(getValues());

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)} id='step1'>
        <div className='flex flex-col'>
          <div className='flex flex-col items-center justify-start '>
            <div className='flex flex-col gap-12 pt-16 max-w-xl w-full'>
              <FormController
                label='نام و نام خانوادگی'
                placeholder='محمد حسین رحمتی'
                icon={<User />}
                error={errors?.name?.message}
                {...register('name')}
              />

              <FormController
                label='کد ملی'
                placeholder='208-1235-456'
                icon={<Card />}
                error={errors?.id?.message}
                {...register('id')}
              />

              <FormController
                label={'تاریخ تولد'}
                placeholder={'1370/06/31'}
                icon={<Calendar />}
                error={errors?.birth?.message}
                {...register('birth')}
              />
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
}
