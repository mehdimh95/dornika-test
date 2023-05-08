import Container from '@/components/Container';
import FormController from '@/components/FormController';
import BlueButton from '@/components/Button/Button';
import Image from 'next/image';
import Link from 'next/link';

export default function SingUp() {
  return (
    <Container>
      <div className='w-1/3 flex flex-col  justify-start items-center bg-warm-blue rounded-r-2xl'>
        <Image
          src='/images/logo.svg'
          width={151}
          height={94}
          alt=' '
          className='pt-20 pb-5'
        />
        <p className=' text-white font-black text-4xl'>ثبت نام</p>
      </div>
      <div className='w-full flex flex-col items-center justify-start bg-white rounded-l-2xl'>
        <p className='text-warm-blue font-bold pt-8 pb-2'>مرحله 1 از 3</p>
        <p className=' text-black  font-bold text-xl'>
          لطفا اطلاعات خود را با دقت وارد نمائید
        </p>
        <div className='flex flex-col gap-12 w-full px-52 pt-16 pb-[300px] border-b border-b-fade-gray'>
          <FormController
            label={'نام و نام خانوادگی'}
            placeholder={'محمد حسین رحمتی'}
            image={'/icons/user.png'}
          ></FormController>
          <FormController
            label={'کد ملی'}
            placeholder={'208-1235-456'}
            image={'/icons/card.png'}
          ></FormController>
          <FormController
            label={'تاریخ تولد'}
            placeholder={'1370/06/31'}
            image={'/icons/calendar.png'}
          ></FormController>
        </div>
        <div className='flex flex-col self-stretch items-end p-8'>
          <BlueButton image={'/icons/vector.png'}>
            <span className='font-bold leading-6'>ورود به حساب</span>
          </BlueButton>
        </div>
      </div>
    </Container>
  );
}
