import Button from '@/components/Button/Button';
import FormController from '@/components/FormController';
import { ArrowLeft } from '@/components/icons/arrowleft';
import { MyLocation } from '@/components/icons/location';
import { Map1 } from '@/components/icons/map';
import Layout from '@/components/layout/Layout';
import { TLoginResponse } from '@/types/login.type';
import api from '@/utils/api';
import { yupResolver } from '@hookform/resolvers/yup';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import router from 'next/router';
import React, { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { FormValuesSignUp } from '.';
import cities from '../../data/cities.json';
import province from '../../data/province.json';
import { FormValuesRegister } from './register';

export interface FormValuesLocation {
  province: string;
  city: string;
}
const LocationSchema = yup
  .object({
    province: yup.string().required('این فیلد اجباری است'),
    city: yup.string().required('این فیلد اجباری است'),
  })
  .required();

export type TProvinceItem = {
  id: number;
  label: string;
  latitude: number;
  longitude: number;
  value: string;
};

interface ICityItem extends TProvinceItem {
  province_id: number;
}

export default function Location() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [provinceOption, setProvinceOption] =
    React.useState<TProvinceItem | null>(null);
  const [cityOption, setCityOption] = React.useState<ICityItem | null>(null);
  const [citiesList, setCitiesList] = React.useState<ICityItem[]>([]);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const Map = dynamic(() => import('@/components/Map/Map'), {
    ssr: false,
  });

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<FormValuesLocation>({
    mode: 'onTouched',
    shouldFocusError: true,
    resolver: yupResolver(LocationSchema),
  });

  const onSubmit: SubmitHandler<FormValuesLocation> = async (fieldsData) => {
    const register: Partial<FormValuesRegister> = JSON.parse(
      localStorage.getItem('login-2') || '{}'
    );
    const singUp: Partial<FormValuesSignUp> = JSON.parse(
      localStorage.getItem('singUp') || '{}'
    );

    api<TLoginResponse>({
      url: '/register',
      method: 'POST',
      params: {
        ...singUp,
        ...register,
        password: '123456',
        password_confirmation: '123456',
      },
    })
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        toast.success('با موفقیت وارد شدید');
        router.push('/');
      })
      .catch((err) => {
        console.error(err);
        toast.error('مشخصات وارد شده نادرست است');
      })
      .finally(() => {});
  };

  const handleSelectProvince = (newValue: TProvinceItem) => {
    setProvinceOption(newValue);
    setCitiesList(cities.filter((city) => city.province_id === newValue.id));
    setCityOption(null);
  };

  const handleSelectCity = (value: ICityItem) => {
    setCityOption(value);
  };

  return (
    <Layout
      isNextDisabled={false}
      nextButtonTable='ثبت نام'
      stepId={3}
      prevHref={'/signup/register'}
    >
      <div className='flex flex-col'>
        <form onSubmit={handleSubmit(onSubmit)} id='step1'>
          <div className='flex flex-col items-center justify-start '>
            <div className='flex flex-col gap-12 pt-16 max-w-2xl w-full'>
              <div className='flex gap-12 max-w-2xl w-full'>
                <FormController
                  icon={<MyLocation />}
                  label={'استان'}
                  placeholder={'مازندران'}
                  type='select'
                  selectProps={{
                    value: provinceOption,
                    onChange: handleSelectProvince as any,
                    options: province,
                  }}
                  error={errors?.city?.message}
                  {...register('city')}
                />
                <FormController
                  icon={<MyLocation />}
                  label={'شهر'}
                  placeholder={'ساری'}
                  type='select'
                  error={errors?.city?.message}
                  selectProps={{
                    value: cityOption,
                    onChange: handleSelectCity as any,
                    options: citiesList,
                  }}
                  {...register('city')}
                />
              </div>
              <FormController
                icon={
                  <span role='button' onClick={openModal}>
                    <Map1 />
                  </span>
                }
                label={'آدرس'}
                placeholder={'ایران مازندران ساری'}
              />
              <div className='flex gap-12 max-w-2xl w-full'>
                <FormController
                  icon={<MyLocation />}
                  label={'طول جغرافیایی'}
                  placeholder={'36.7589'}
                />
                <FormController
                  icon={<MyLocation />}
                  label={'عرض جغرافیایی'}
                  placeholder={'64.5691'}
                />
              </div>
            </div>
          </div>
          <div className='text-center mt-6 text-warm-blue'>
            <Link href=' ' onClick={openModal}>
              انتخاب طول و عرض جغرافیایی از روی نقشه
            </Link>
            <Modal
              onRequestClose={closeModal}
              isOpen={isOpen}
              className='flex relative justify-center items-center h-screen backdrop-blur-sm bg-black/40'
            >
              <div className='flex flex-col items-center justify-center p-5 rounded-xl bg-white'>
                <div className='relative'>
                  <Map />
                  <div className='flex flex-row gap-2 absolute w-full justify-center bottom-5'>
                    <Button
                      className={
                        'bg-gray-300 w-22 text-white py-3 px-6 rounded-2xl flex flex-row items-center justify-center gap-5'
                      }
                      onClick={closeModal}
                    >
                      بستن
                    </Button>
                    <Button
                      className={
                        'bg-orange-400  w-44 text-white py-3 px-6 rounded-xl flex flex-row items-center justify-center gap-5'
                      }
                    >
                      ثبت موقعیت
                      <ArrowLeft />
                    </Button>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        </form>
      </div>
    </Layout>
  );
}
