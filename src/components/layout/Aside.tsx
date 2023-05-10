import Image from 'next/image';
const Aside = () => {
  return (
    <div className='w-1/4 flex flex-col  justify-start items-center bg-warm-blue rounded-r-2xl'>
      <Image
        src='/images/logo.svg'
        width={151}
        height={94}
        alt=' '
        className='pt-20 pb-5'
      />
      <p className=' text-white font-black text-4xl'>ثبت نام</p>
    </div>
  );
};

export default Aside;
