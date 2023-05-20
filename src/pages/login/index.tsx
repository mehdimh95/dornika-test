import BlurImage from '@/components/BlurImage';
import Button from '@/components/Button/Button';
import FormController from '@/components/FormController';
import { Lock } from '@/components/icons/lock';
import Content from '@/components/layout/Content';
import { TLoginResponse } from '@/types/login.type';
import api from '@/utils/api';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { ArrowLeft } from '../../components/icons/arrowleft';
import { MessageText1 } from '../../components/icons/messge';

export interface FormValues {
  password: number;
  mail: string;
}

const SingUpSchema = yup.object({
  mail: yup
    .string()
    .email('ایمیل وارد شده صحیح نیست')
    .required('این فیلد اجباری است'),
  password: yup.string().min(6, 'حداقل 6 کاراکتر').max(20, 'حداکثر 20 کاراکتر'),
});

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onTouched',
    shouldFocusError: true,
    resolver: yupResolver(SingUpSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (fieldsData) => {
    setLoading(true);
    api<TLoginResponse>({
      url: '/login',
      method: 'POST',
      params: {
        email: fieldsData.mail,
        password: fieldsData.password,
      },
    })
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        toast.success('با موفقیت وارد شدید');
        router.push('/');
      })
      .catch((err) => {
        console.error(err);
        toast.error('مشخصات وارد شده نادرست است');
      })
      .finally(() => setLoading(false));
  };

  React.useEffect(() => {
    localStorage.removeItem('token');
  }, []);

  return (
    <Content>
      <div className='flex flex-row  min-h-screen items-stretch py-8 p-24'>
        <div className='w-1/2 flex flex-col  justify-center items-center bg-warm-blue rounded-r-2xl'>
          <h1 className='text-4xl mb-5  text-white font-black'>
            صرافی ارز دیجیتال نیوکوین اسپیس
          </h1>
          <p className='text-center text-white text-xl font-medium'>
            خرید و فروش امن بیت‌کوین و ارزهای دیجیتال
          </p>
          <p className='text-center text-white text-xl font-medium'>
            به بزرگترین بازار ارز دیجیتال ایران بپیوندید
          </p>
          <div className='flex justify-center items-center mt-20'>
            <BlurImage
              src='https://mehdimh95.github.io/dornika-test/images/astronaut.svg'
              width={246}
              height={441}
              alt='login image'
            />
          </div>
        </div>
        <div className='w-1/2 flex flex-col items-center justify-start bg-white rounded-l-2xl pb-36'>
          <BlurImage
            src='https://mehdimh95.github.io/dornika-test/images/logo.svg'
            width={151}
            height={94}
            alt='login image'
            className='pt-14 pb-14'
          />
          <div className='flex flex-col justify-center items-center mb-16'>
            <h1 className='text-4xl  font-black mb-2'>ورود به داشبورد</h1>
            <Link className='text-warm-blue' href='/signup'>
              هنوز ثبت نام نکرده‌اید؟
            </Link>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-12  self-stretch mx-14'
          >
            <FormController
              label={' ایمیل'}
              placeholder={' example@mail.com'}
              icon={<MessageText1 />}
              error={errors?.mail?.message}
              {...register('mail')}
            />
            <FormController
              label={' رمز عبور'}
              placeholder={'********'}
              type='password'
              icon={<Lock />}
              error={errors?.password?.message}
              {...register('password')}
            />
            <Button
              type='submit'
              loading={loading}
              className={
                ' bg-warm-blue w-44 text-white py-3 px-6 rounded-xl flex flex-row items-center justify-center gap-5'
              }
            >
              <span className='font-bold leading-6 whitespace-nowrap'>
                ورود به حساب
              </span>
              <ArrowLeft />
            </Button>
          </form>
        </div>
      </div>
    </Content>
  );
};

export default Login;
