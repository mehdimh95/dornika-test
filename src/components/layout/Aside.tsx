import Image from 'next/image';
import Steps, { IStep } from '../Steps';

const stepItems: IStep[] = [
  { id: 1, label: 'اطلاعات فردی' },
  { id: 2, label: 'اطلاعات ارتباطی' },
  { id: 3, label: 'اطلاعات مکانی' },
];

const Aside = ({ stepId }: { stepId: number }) => {
  return (
    <div className='w-1/4 flex flex-col  justify-start items-center bg-warm-blue rounded-r-2xl'>
      <Image
        src='./images/logo.svg'
        width={151}
        height={94}
        alt=' '
        className='pt-20 pb-5'
      />
      <p className=' text-white font-black text-4xl'>ثبت نام</p>
      <Steps currentStepId={stepId} steps={stepItems} />
    </div>
  );
};

export default Aside;
