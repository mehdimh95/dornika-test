import BlueButton from '@/components/Button/Button';
import FormController from '@/components/FormController';
import Content from '@/components/layout/Content';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
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
export default function Login() {
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
    localStorage.setItem('login', JSON.stringify(fieldsData));
    console.log(fieldsData);
  };
  console.log(errors);

  console.log(getValues());

  return (
    <Content>
      <div className='flex flex-row  h-screen items-stretch py-8 p-24'>
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
            <Image
              src='/images/astronaut.svg'
              width={246}
              height={441}
              alt='Picture of the author'
            />
          </div>
        </div>
        <div className='w-1/2 flex flex-col items-center justify-start bg-white rounded-l-2xl'>
          <Image
            src='/images/logo.svg'
            width={151}
            height={94}
            alt='Picture of the author'
            className='pt-14 pb-14'
          />

          <div className='flex flex-col justify-center items-center mb-16'>
            <h1 className='text-4xl  font-black mb-2'>ورود به داشبورد</h1>
            <Link className='text-warm-blue' href='/singup'>
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
              {...register('mail')}
              error={errors?.mail?.message}
            />
            <FormController
              label={' رمز عبور'}
              placeholder={'********'}
              icon={<MessageText1 />}
              error={errors?.password?.message}
              {...register('password')}
            />
            <BlueButton>
              <span className='font-bold leading-6'> ورود به حساب</span>
              <ArrowLeft />
            </BlueButton>
          </form>
        </div>
      </div>
    </Content>
  );
}
