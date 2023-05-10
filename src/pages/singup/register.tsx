import BlueButton from '@/components/Button/Button';
import FormController from '@/components/FormController';
import { Clipboard } from '@/components/icons/clipboard';
import { MessageText1 } from '@/components/icons/messge';
import { Mobile } from '@/components/icons/molbile';
import Layout from '@/components/layout/Layout';
import OtpReact from '@/components/otp/Otp';

export default function Register() {
  return (
    <Layout>
      <div className='flex flex-col '>
        <div className='w-full flex flex-col items-center justify-start bg-white rounded-tl-2xl'>
          <div className='max-w-lg'>
            <div className='flex flex-col gap-12 pt-16'>
              <div className='flex flex-col gap-3'>
                <FormController label='شماره همراه' placeholder='09112564798'>
                  <Mobile />
                </FormController>
                <div className='flex flex-col items-center'>
                  <div className='w-full text-center'>
                    <div className='border-fade-gray border leading-[60px]  rounded-full bg-pale-blue-green'>
                      <div className='items-end text-sm font-medium py-4 px-3 flex gap-5'>
                        <span className=''>
                          <Clipboard />
                        </span>
                        <span>
                          کد تائید به شماره 09015671346 ارسال شده است. این کد تا
                          02:00 دقیقه دیگر معتبر است
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col items-center gap-4 pt-7'>
                    <p>کد تائید</p>
                    <OtpReact />
                    <BlueButton>
                      <span>تائید شماره همراه</span>
                    </BlueButton>
                  </div>
                </div>
              </div>

              <div className='pb-'>
                <FormController label='ایمیل' placeholder={'example@mail.com'}>
                  <MessageText1 />
                </FormController>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
