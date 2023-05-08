import React from 'react';
import Image from 'next/image';
interface Props {
  label: string;
  placeholder: string;
  image: any;
}

const FormController: React.FC<Props> = ({ label, placeholder, image }) => {
  return (
    <div className='flex flex-col relative '>
      <label className='label'>
        <span className='label-text text-base text-slate-600  font-bold absolute top-[-15px] right-9 bg-white px-2'>
          {label}
        </span>
      </label>
      <input
        type='text'
        placeholder={placeholder}
        className='input border border-fade-gray leading-[60px] w-full px-20 rounded-full outline-fade-gray placeholder:text-fade-gray'
      />
      <Image
        src={image}
        width={24}
        height={24}
        alt=''
        className='absolute top-1/2 -translate-y-1/2 right-4 pl-4 border-l border-fade-gray box-content'
      />
    </div>
  );
};

export default FormController;
