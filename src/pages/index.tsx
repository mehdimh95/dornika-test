import BlurImage from '@/components/BlurImage';
import TradingView from '@/components/Dashboard/Charts/TradingView';
import Layout from '@/components/Dashboard/Layout/Layout';
import { TTrendItem } from '@/types/dashboard.types';
import axios from 'axios';
import dynamic from 'next/dynamic';
import React from 'react';
import { toast } from 'react-toastify';

const CircleChart = dynamic(
  () => import('../components/Dashboard/Charts/Circle'),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

const BarsChart = dynamic(() => import('../components/Dashboard/Charts/Bars'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const Dashboard = () => {
  const [trendingList, setTrendingList] = React.useState<TTrendItem[]>([]);

  React.useEffect(() => {
    axios
      .get<{ coins: TTrendItem[]; exchanges: [] }>(
        'https://api.coingecko.com/api/v3/search/trending'
      )
      .then((res) => {
        setTrendingList(res.data.coins);
      })
      .catch((err) => {
        console.error(err);
        toast.error('خطایی در دریافت لیست محبوب‌ترین‌ها پیش آمد');
      });
  }, []);

  return (
    <Layout isPrivate>
      <div className='md:w-3/4 w-full'>
        <div className='flex flex-col lg:flex-row justify-between gap-4'>
          <div className='flex flex-col bg-white rounded-xl gap-7 p-5 flex-1'>
            <div className='flex justify-between items-center'>
              <div>
                <p className='font-bold mb-5'>دارایی‌های کیف پول</p>
                <div className='flex flex-row md:flex-col gap-2 flex-1'>
                  <div className='flex gap-2 items-center'>
                    <div className='w-2 h-2 rounded-md bg-orange-500' />
                    <strong className='text-base font-bold'>بیتکوین</strong>
                    <span className='text-xs text-gray-400 font-bold'>
                      ۴۵ درصد
                    </span>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <div className='w-2 h-2 rounded-md bg-sky-500' />
                    <strong className='text-base font-bold'>اتریوم</strong>
                    <span className='text-xs text-gray-400 font-bold'>
                      ۴۵ درصد
                    </span>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <div className='w-2 h-2 rounded-md bg-slate-800' />
                    <strong className='text-base font-bold'>ترون</strong>
                    <span className='text-xs text-gray-400 font-bold'>
                      ۴۵ درصد
                    </span>
                  </div>
                </div>
              </div>
              <CircleChart />
            </div>
          </div>
          <div className='flex flex-col  bg-white rounded-xl gap-7 p-5 flex-1'>
            <p className='font-bold'>ارزش معاملات هفته گذشته</p>
            <BarsChart />
          </div>
        </div>
        <div className='flex flex-col bg-white rounded-xl gap-7 p-5 flex-1 my-4'>
          <TradingView />
        </div>
      </div>
      <div className='bg-white flex flex-col p-5 gap-6 w-full md:w-1/3 lg:w-1/4 rounded-xl'>
        <div className='flex justify-between'>
          <div>محبوب‌ترین کوین‌ها</div>
          <div className='border-fade-gray border text-sm  px-4 py-2 rounded-xl'>
            هفته
          </div>
        </div>
        <div className='flex justify-between'>
          <div>نام</div>
          <div>24 ساعت گذشته</div>
        </div>

        <div className='font-bold flex flex-col gap-3'>
          {trendingList.map(({ item }) => (
            <div
              key={item.coin_id}
              className='flex justify-between pb-3 border-b border-b-fade-gray '
            >
              <div className='flex justify-between items-center gap-3'>
                <BlurImage
                  src={item.thumb}
                  width={24}
                  height={24}
                  alt={item.name}
                />
                <p>{item.name}</p>
                <p className='text-fade-gray text-xs'>{item.slug}</p>
              </div>
              <p className='text-light-green'>{item.score}%</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
export default Dashboard;
