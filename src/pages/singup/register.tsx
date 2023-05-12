import BlueButton from '@/components/Button/Button';
import FormController from '@/components/FormController';
import { Clipboard } from '@/components/icons/clipboard';
import { MessageText1 } from '@/components/icons/messge';
import { Mobile } from '@/components/icons/molbile';
import Layout from '@/components/layout/Layout';
import OtpReact from '@/components/otp/Otp';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

export interface FormValues {
  phone: number;
  mail: string;
}

const SingUpSchema = yup
  .object({
    phone: yup
      .string()
      .required('این فیلد اجباری است')
      .length(11, ' شماره صحیح نیست')
      .matches(/^09[0-9]{9}$/, ' شماره صحیح نیست'),

    mail: yup.string().email('ایمیل وارد شده صحیح نیست'),
  })
  .required();

export default function Register() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onTouched',
    shouldFocusError: true,
    resolver: yupResolver(SingUpSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (fieldsData) => {
    localStorage.setItem('login-2', JSON.stringify(fieldsData));
    console.log(fieldsData);
  };
  console.log(errors);

  console.log(getValues());

  return (
    <Layout>
      <div className='flex flex-col '>
        <div className='w-full flex flex-col items-center justify-start bg-white rounded-tl-2xl'>
          <div className='max-w-lg'>
            <form onSubmit={handleSubmit(onSubmit)} id='step1'>
              <div className='flex flex-col gap-12 pt-16'>
                <div className='flex flex-col gap-3'>
                  <FormController
                    label={' شماره همراه'}
                    placeholder={'09112564798'}
                    icon={<Mobile />}
                    error={errors?.phone?.message}
                    {...register('phone')}
                  />

                  <div className='flex flex-col items-center'>
                    <div className='w-full text-center'>
                      <div className='border-fade-gray border leading-[60px]  rounded-full bg-pale-blue-green'>
                        <div className='items-end text-sm font-medium py-4 px-3 flex gap-5'>
                          <span>
                            <Clipboard />
                          </span>
                          <span>
                            کد تائید به شماره 09015671346 ارسال شده است. این کد
                            تا 02:00 دقیقه دیگر معتبر است
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

                <FormController
                  label={' ایمیل'}
                  placeholder={' example@mail.com'}
                  icon={<MessageText1 />}
                  {...register('mail')}
                  error={errors?.mail?.message}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
