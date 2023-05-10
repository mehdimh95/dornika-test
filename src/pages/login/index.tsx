import BlueButton from '@/components/Button/Button';
import FormController from '@/components/FormController';
import Content from '@/components/layout/Content';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from '../../components/icons/arrowleft';
import { Lock } from '../../components/icons/lock';
import { MessageText1 } from '../../components/icons/messge';
export default function Login() {
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
            <Link className='text-warm-blue' href='/'>
              هنوز ثبت نام نکرده‌اید؟
            </Link>
          </div>
          <div className='flex flex-col gap-12  self-stretch mx-14'>
            <FormController label={' ایمیل'} placeholder={' example@mail.com'}>
              <MessageText1 />
            </FormController>
            <FormController label={'رمز عبور'} placeholder={'حداقل 8 کاراکتر'}>
              <Lock />
            </FormController>
            <BlueButton>
              <span className='font-bold leading-6'> ورود به حساب</span>
              <ArrowLeft />
            </BlueButton>
          </div>
        </div>
      </div>
    </Content>
  );
}
