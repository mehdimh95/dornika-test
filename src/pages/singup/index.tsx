import FormController from '@/components/FormController';
import Layout from '@/components/layout/Layout';
import { Calendar } from '../../components/icons/calender';
import { Card } from '../../components/icons/card';
import { User } from '../../components/icons/user';

export default function SingUp() {
  return (
    <Layout>
      <div className='flex flex-col'>
        <div className='flex flex-col items-center justify-start '>
          <div className='flex flex-col gap-12 pt-16 max-w-xl w-full'>
            <FormController
              label={'نام و نام خانوادگی'}
              placeholder={'محمد حسین رحمتی'}
            >
              <User />
            </FormController>
            <FormController label={'کد ملی'} placeholder={'208-1235-456'}>
              <Card />
            </FormController>
            <FormController label={'تاریخ تولد'} placeholder={'1370/06/31'}>
              <Calendar />
            </FormController>
          </div>
        </div>
      </div>
    </Layout>
  );
}
