import Image from 'next/image';
import Chart, { Props } from 'react-apexcharts';

const SliderItem = (props: Props) => {
  return (
    <div className='bg-white rounded-xl p-3 font-bold my-[18px] flex flex-1 flex-col gap-3'>
      <div className='flex justify-between '>
        <div className='flex justify-between gap-3'>
          <Image
            src='./images/bitcoin.svg'
            width={46}
            height={46}
            alt='Bitcoin-logo'
          />
          <div>
            <p>بیتکوین</p>
            <p className='text-fade-gray text-xs'>BTC</p>
          </div>
        </div>
        <div>
          <p className='text-light-green'>+1.68%</p>
          <p>16,876 دلار</p>
        </div>
      </div>
      <div>
        <Chart {...props} type='area' height={180} />
      </div>
    </div>
  );
};
export default SliderItem;
