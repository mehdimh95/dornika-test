import FormController from '@/components/FormController';
import { User } from '@/components/icons/user';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
export default function Location() {
  return (
    <Layout>
      <div className='flex flex-col'>
        <div className='flex flex-col items-center justify-start '>
          <div className='flex flex-col gap-12 pt-16 max-w-2xl w-full'>
            <div className='flex gap-12 max-w-2xl w-full'>
              <FormController label={'استان'} placeholder={'مازندران'}>
                <User />
              </FormController>
              <FormController label={'شهر'} placeholder={'ساری'}>
                <User />
              </FormController>
            </div>
            <FormController label={'آدرس'} placeholder={'ایران مازندران ساری'}>
              <User />
            </FormController>
            <div className='flex gap-12 max-w-2xl w-full'>
              <FormController label={'طول جغرافیایی'} placeholder={'36.7589'}>
                <User />
              </FormController>
              <FormController label={'عرض جغرافیایی'} placeholder={'64.5691'}>
                <User />
              </FormController>
            </div>
          </div>
        </div>
        <div className='text-center mt-6 text-warm-blue'>
          <Link href='/'>انتخاب طول و عرض جغرافیایی از روی نقشه</Link>
        </div>
      </div>
    </Layout>
  );
}
