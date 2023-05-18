import { Activity } from '@/components/icons/activity/Activity';
import { Walet } from '@/components/icons/emptywallet/Walet';
import { HomeIcone } from '@/components/icons/homeicon/HomeIcone';
import { LogOut } from '@/components/icons/logout/LogOut';
import { Sale } from '@/components/icons/sale/Sale';

export const navItems = [
  {
    title: 'داشبورد',
    link: '#',
    icon: <HomeIcone />,
    bgcolor: 'bg-warm-blue',
    textcolor: 'text-white',
  },
  {
    title: ' خرید و فروش',
    link: '#',
    icon: <Sale />,
    bgcolor: 'bg-white',
    textcolor: 'text-black',
  },
  {
    title: 'گزارش بازار',
    link: '#',
    icon: <Activity />,
    bgcolor: 'bg-white',
    textcolor: 'text-black',
  },
  {
    title: 'کیف پول',
    link: '#',
    icon: <Walet />,
    bgcolor: 'bg-white',
    textcolor: 'text-black',
  },
  {
    title: 'خروج',
    link: '/login',
    icon: <LogOut />,
    bgcolor: 'bg-white',
    textcolor: 'text-black',
  },
];
