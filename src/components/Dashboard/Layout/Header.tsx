import { Notification } from '@/components/icons/notfition/Nonfiction';
import Image from 'next/image';

const Header = ({
  setIsNavOpen,
}: {
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <header>
      <div className='flex justify-between bg-white p-4 rounded-lg'>
        <div className='flex justify-center items-center'>
          <div
            className='space-y-2 cursor-pointer'
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
            <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
            <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
          </div>
        </div>
        <div className='flex justify-center items-center gap-5 relative '>
          <div className='z-0'>
            <Notification />
            <div className='badge badge-xs border-green-300 bg-green-300 absolute top-[10px] right-[-3px]'></div>
          </div>
          <Image
            width={47}
            height={47}
            src='https://picsum.photos/47/47'
            alt='user'
            className='rounded-full'
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
