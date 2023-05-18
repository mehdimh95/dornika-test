import Button from '@/components/Button/Button';
import FormController from '@/components/FormController';
import { Clipboard } from '@/components/icons/clipboard';
import { MessageText1 } from '@/components/icons/messge';
import { Mobile } from '@/components/icons/molbile';
import Layout from '@/components/layout/Layout';
import OtpReact from '@/components/otp/Otp';
import { yupResolver } from '@hookform/resolvers/yup';
import Router from 'next/router';
import React from 'react';
import useCountDown from 'react-countdown-hook';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';

const initialTime = 60 * 1000;
const interval = 1000;

export interface FormValuesRegister {
  phone: number;
  email: string;
  code: string;
}

const SingUpSchema = yup
  .object({
    phone: yup
      .string()
      .required('این فیلد اجباری است')
      .length(10, ' شماره صحیح نیست')
      .matches(/^9[0-9]{9}$/, ' شماره صحیح نیست'),

    mail: yup.string().email('ایمیل وارد شده صحیح نیست'),
  })
  .required();

const generateRandomCode = () => {
  return Math.floor(1000 + Math.random() * 9000);
};

const Register = () => {
  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm<FormValuesRegister>({
    mode: 'onTouched',
    shouldFocusError: true,
    resolver: yupResolver(SingUpSchema),
  });

  const [code, setCode] = React.useState<number | null>(null);
  const [isEnableSubmit, setIsEnableSubmit] = React.useState(false);
  const [isShowCodeBox, setIsShowCodeBox] = React.useState(false);

  const onSubmit: SubmitHandler<FormValuesRegister> = async (fieldsData) => {
    localStorage.setItem('login-2', JSON.stringify(fieldsData));
    console.log(fieldsData);
    Router.push('/signup/location');
  };

  const [timeLeft, { start, reset }] = useCountDown(initialTime, interval);

  React.useEffect(() => {
    start();
    setCode(generateRandomCode());
  }, []);

  const restart = React.useCallback(() => {
    setCode(generateRandomCode());
    toast.info(`کد شما: ${code}`);
    reset();
  }, []);

  const handleSendCode = () => {
    toast.info(`کد شما: ${code}`);
    setIsShowCodeBox(true);
  };

  const handleOtpVerify = () => {
    if (code?.toString() === getValues('code')) {
      toast.success('شماره‌ی شما با موفقیت تایید شد');
      setIsEnableSubmit(true);
      setIsShowCodeBox(false);
    } else {
      toast.error('کد تایید شما نامعتبر است');
      setIsEnableSubmit(false);
    }
  };

  return (
    <Layout
      isPrevDisabled={false}
      isNextDisabled={!isEnableSubmit}
      stepId={2}
      prevHref={'/signup'}
    >
      <form onSubmit={handleSubmit(onSubmit)} id='step1'>
        <div className='flex flex-col gap-3 pt-16 max-w-2xl mx-auto'>
          <FormController
            label={' شماره همراه'}
            placeholder={'09112564798'}
            icon={<Mobile />}
            error={errors?.phone?.message}
            {...register('phone')}
            endAdornment={
              <span
                role='button'
                className='text-xs text-warm-blue cursor-pointer'
                onClick={handleSendCode}
              >
                ارسال
              </span>
            }
          />

          {isShowCodeBox && (
            <div className='flex flex-col items-center'>
              {!!timeLeft ? (
                <div className='w-full text-center'>
                  <div className='border-fade-gray border leading-[60px]  rounded-full bg-pale-blue-green'>
                    <div className='items-end text-sm font-medium py-4 px-3 flex gap-5'>
                      <span>
                        <Clipboard />
                      </span>
                      <div>
                        کد تائید به شماره {getValues('phone')} ارسال شده است.
                        این کد تا
                        <div className='w-6 inline-block'>
                          {Math.floor(timeLeft / 1000)}
                        </div>
                        ثانیه دیگر معتبر است
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <Button
                    onClick={restart}
                    className='bg-warm-blue rounded-lg p-3 text-white'
                  >
                    ارسال دوباره کد
                  </Button>
                </div>
              )}
              <div className='flex flex-col items-center gap-4 pt-7'>
                <p>کد تائید</p>
                <Controller
                  control={control}
                  name='code'
                  render={({ field }) => {
                    return <OtpReact {...field} />;
                  }}
                />
                <Button
                  onClick={handleOtpVerify}
                  className=' bg-warm-blue w-44 text-white py-3 px-6 rounded-xl flex flex-row items-center justify-center gap-5'
                >
                  تائید کد
                </Button>
              </div>
            </div>
          )}
          <FormController
            label={' ایمیل'}
            placeholder={' example@mail.com'}
            icon={<MessageText1 />}
            {...register('email')}
            error={errors?.email?.message}
          />
        </div>
      </form>
    </Layout>
  );
};

export default Register;
