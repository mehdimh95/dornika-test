import FormController from '@/components/FormController';
import { Calendar } from '@/components/icons/calender';
import { Card } from '@/components/icons/card';
import { User } from '@/components/icons/user';
import Layout from '@/components/layout/Layout';
import { yupResolver } from '@hookform/resolvers/yup';
import Router from 'next/router';
import jalali_calendar from 'react-date-object/calendars/jalali';
import persian_fa from 'react-date-object/locales/persian_fa';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import * as yup from 'yup';
export interface FormValuesSignUp {
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

    birth: yup.string().required('تاریخ تولد را وارد کنید'),
  })
  .required();

export default function SingUp() {
  // const {
  //   register,
  //   handleSubmit,
  //   control,
  //   setValue,
  //   formState: { errors },
  // } = useForm<FormValuesSignUp>({
  //   mode: 'onTouched',
  //   shouldFocusError: true,
  //   resolver: yupResolver(SingUpSchema),
  // });

  // const onSubmit: SubmitHandler<FormValuesSignUp> = async (fieldsData) => {
  //   const register: Partial<FormValuesRegister> = JSON.parse(
  //     localStorage.getItem('login-personal') || '{}'
  //   );
  //   api<TLoginResponse>({
  //     url: '/register',
  //     method: 'POST',
  //     data: {
  //       name: 'fieldsData.name',
  //       ...register,
  //       password: '123456',
  //       password_confirmation: '1234567',
  //       // id: fieldsData.id,
  //       // birth: fieldsData.birth,
  //     },
  //   })
  //     .then((res) => {
  //       console.log({ res });
  //       // localStorage.setItem('token', res.data.token);
  //       // toast.success('با موفقیت وارد شدید');
  //       // router.push('/register');
  //     })
  //     .catch((err) => {
  //       // console.error(err);
  //       // toast.error('مشخصات وارد شده نادرست است');
  //     })
  //     .finally(() => {});
  // };

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormValuesSignUp>({
    mode: 'onTouched',
    shouldFocusError: true,
    resolver: yupResolver(SingUpSchema),
  });

  const onSubmit: SubmitHandler<FormValuesSignUp> = async (fieldsData) => {
    localStorage.setItem('singUp', JSON.stringify(fieldsData));
    Router.push('/singup/register');

    // const register: Partial<FormValuesRegister> = JSON.parse(
    //   localStorage.getItem('login-personal') || '{}'
    // );
    // try {
    //   const response = await axios({
    //     method: 'post',
    //     url: 'https://apingweb.com/api/user/create',
    //     data: {
    //       ...fieldsData,
    //       ...register,
    //     },
    //     validateStatus: (status) => status == 200,
    //   });
    //   console.log(response);
    //   // Router.push('/');
    // } catch (error) {
    //   console.log(error);
    // }
  };

  // useEffect(() => {
  //   const cachedInfo: Partial<FormValuesSignUp> = JSON.parse(
  //     localStorage.getItem('singUp') || '{}'
  //   );

  //   if (cachedInfo.name) {
  //     setValue('name', cachedInfo.name);
  //   }
  //   if (cachedInfo.id) {
  //     setValue('id', cachedInfo.id);
  //   }
  //   if (cachedInfo.birth) {
  //     setValue('birth', cachedInfo.birth);
  //   }
  // }, []);

  return (
    <Layout isPrevDisabled isNextDisabled={false} stepId={1}>
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
              <Controller
                control={control}
                name='birth'
                rules={{ required: true }} //optional
                render={({
                  field: { onChange, name, value },
                  fieldState: { invalid, isDirty }, //optional
                  formState: { errors }, //optional, but necessary if you want to show an error message
                }) => (
                  <>
                    <DatePicker
                      calendar={jalali_calendar}
                      locale={persian_fa}
                      value={value || ''}
                      onChange={(date: DateObject) => {
                        onChange(date?.isValid ? date.format() : '');
                      }}
                      currentDate={new DateObject().subtract(10, 'year')}
                      maxDate={new DateObject().subtract(10, 'year')}
                      render={
                        <FormController
                          readOnly
                          label={'تاریخ تولد'}
                          placeholder={'1370/06/31'}
                          icon={<Calendar />}
                          error={errors?.birth?.message}
                        />
                      }
                    />
                  </>
                )}
              />
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
}
