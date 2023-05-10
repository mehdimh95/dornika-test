import BlueButton from '@/components/Button/Button';
import { ArrowLeft } from '@/components/icons/arrowleft';

export default function Footer() {
  return (
    <div className='flex flex-col self-stretch items-end pt-8 bg-white border-t border-b-fade-gray rounded-bl-2xl'>
      <BlueButton>
        <span className='font-bold leading-6'>ورود به حساب</span>
        <ArrowLeft />
      </BlueButton>
    </div>
  );
}
