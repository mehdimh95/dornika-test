import Button from '@/components/Button/Button';
import Loading from '@/components/Button/Loading';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import useForceUpdate from 'use-force-update';
import AreaChart from './AreaChart';
import Header from './Header';
import { navItems } from './menuItems';

const Layout = ({
  children,
  isPrivate = false,
}: {
  children: React.ReactNode;
  isPrivate?: boolean;
}) => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const forceUpdate = useForceUpdate();
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    isPrivate && !token ? router.push('/login') : setIsLoading(false);
  }, []);

  React.useEffect(() => {
    forceUpdate();
  }, [isNavOpen]);

  return isLoading ? (
    <div className='flex w-screen h-screen justify-center items-center'>
      <div className='scale-[2.5]'>
        <Loading />
      </div>
    </div>
  ) : (
    <div className='flex'>
      <div
        className={classNames(
          'mr-8 rounded-lg w-1/5 duration-500 ease-in-out transition-all',
          !isNavOpen
            ? 'absolute -right-96 opacity-0'
            : 'flex static right-0 opacity-100'
        )}
      >
        <div className='flex flex-col items-stretch py-8 w-full'>
          <div className='w-full flex flex-col  justify-start items-center bg-white rounded-2xl h-full'>
            <Image
              src='https://mehdimh95.github.io/dornika-test/images/logo.svg'
              width={85}
              height={84}
              alt=' '
              className='py-4'
            />
            <div className=' text-black font-black  border-b border-b-fade-gray flex flex-row self-stretch justify-center pb-4 mx-7 mb-6'>
              نیوکوین اسپیس
            </div>
            {navItems.map((item, index) => (
              <Link href={item.link}>
                <Button
                  key={index}
                  className={`${item.bgcolor} ${item.textcolor} w-44 py-3 px-6 rounded-2xl flex flex-row items-center justify-start gap-4 mb-[10px]`}
                >
                  {item.icon}
                  <span className='font-bold leading-6'>{item.title}</span>
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className='min-h-screen p-8 w-full'>
        <Header setIsNavOpen={setIsNavOpen} />
        <div>
          <section className='flex flex-col gap-2'>
            <AreaChart {...{ isNavOpen, setIsNavOpen }} />
            <div className='flex gap-4'>{children}</div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Layout;
