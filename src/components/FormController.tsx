import React from 'react';
interface Props {
  children: React.ReactNode;
  label: string;
  placeholder: string;
}

const FormController: React.FC<Props> = ({ label, placeholder, children }) => {
  return (
    <div className='flex flex-col relative'>
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
      <div className='absolute top-1/2 -translate-y-1/2 right-4 border-l border-fade-gray box-content pl-4'>
        {children}
      </div>
    </div>
  );
};

export default FormController;
