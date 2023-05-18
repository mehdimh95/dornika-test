import Layout from '@/components/Dashboard/Layout/Layout';
import axios from 'axios';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { toast } from 'react-toastify';

const CircleChart = dynamic(
  () => import('../components/Dashboard/Charts/Circle'),
  {
    ssr: false,
  }
);

const BarsChart = dynamic(() => import('../components/Dashboard/Charts/Bars'), {
  ssr: false,
});

const AdvancedRealTimeChartNoSSR = dynamic(
  () =>
    import('react-ts-tradingview-widgets').then((w) => w.AdvancedRealTimeChart),
  {
    ssr: false,
  }
);

type TTrendItem = {
  item: {
    id: string;
    coin_id: 4128;
    name: string;
    symbol: string;
    market_cap_rank: 10;
    thumb: string;
    small: string;
    large: string;
    slug: string;
    price_btc: 0.0007640637388540485;
    score: 0;
  };
};
const Dashboard = () => {
  const [trendingList, setTrendingList] = React.useState<TTrendItem[]>([]);

  React.useEffect(() => {
    axios
      .get<{ coins: TTrendItem[]; exchanges: [] }>(
        'https://api.coingecko.com/api/v3/search/trending'
      )
      .then((res) => {
        setTrendingList(res.data.coins);
        console.log(res.data.coins);
      })
      .catch((err) => {
        console.error(err);
        toast.error('خطایی در دریافت لیست محبوب‌ترین‌ها پیش آمد');
      });
  }, []);
  return (
    <Layout>
      <div className='w-3/4'>
        <div className='flex justify-between gap-4'>
          <div className='flex flex-col bg-white rounded-xl gap-7 p-5 flex-1'>
            <div className='flex justify-between items-center'>
              <div>
                <p className='font-bold mb-5'>دارایی‌های کیف پول</p>
                <div className='flex flex-col gap-2 flex-1'>
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
        <div className='flex flex-col  bg-white rounded-xl gap-7 p-5 flex-1 my-4'>
          <AdvancedRealTimeChartNoSSR
            width='100%'
            theme='light'
            height={400}
            hide_side_toolbar
            hide_legend
            symbol='BTC'
            allow_symbol_change={false}
            locale='fa_IR'
          />
        </div>
      </div>
      <div className='bg-white flex flex-col p-5 gap-6 w-1/4 rounded-xl'>
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
          <div className='flex justify-between pb-3 border-b border-b-fade-gray '>
            <div className='flex justify-between items-center gap-3'>
              <Image
                src='/images/bitcoin.svg'
                width={24}
                height={24}
                alt='Bitcoin-logo'
              />
              <p>بیتکوین</p>
              <p className='text-fade-gray text-xs'>BTC</p>
            </div>

            <p className='text-light-green'>+1.68%</p>
          </div>
          <div className='flex justify-between pb-3 border-b border-b-fade-gray '>
            <div className='flex justify-between items-center gap-3'>
              <Image
                src='/images/bitcoin.svg'
                width={24}
                height={24}
                alt='Bitcoin-logo'
              />
              <p>بیتکوین</p>
              <p className='text-fade-gray text-xs'>BTC</p>
            </div>

            <p className='text-light-green'>+1.68%</p>
          </div>
          <div className='flex justify-between pb-3 border-b border-b-fade-gray '>
            <div className='flex justify-between items-center gap-3'>
              <Image
                src='/images/bitcoin.svg'
                width={24}
                height={24}
                alt='Bitcoin-logo'
              />
              <p>بیتکوین</p>
              <p className='text-fade-gray text-xs'>BTC</p>
            </div>

            <p className='text-light-green'>+1.68%</p>
          </div>
          <div className='flex justify-between pb-3 border-b border-b-fade-gray '>
            <div className='flex justify-between items-center gap-3'>
              <Image
                src='/images/bitcoin.svg'
                width={24}
                height={24}
                alt='Bitcoin-logo'
              />
              <p>بیتکوین</p>
              <p className='text-fade-gray text-xs'>BTC</p>
            </div>

            <p className='text-light-green'>+1.68%</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Dashboard;
