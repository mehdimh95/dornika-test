import React from 'react';

interface IFormController extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
  error?: string;
}

const FormController = React.forwardRef<HTMLInputElement, IFormController>(
  ({ label, name, icon, error, ...inputProps }, ref) => {
    return (
      <div className='flex flex-col gap-3'>
        <div className=' relative'>
          <label className='label' htmlFor={name}>
            <span className='label-text text-base text-slate-600  font-bold absolute top-[-15px] right-9 bg-white px-2'>
              {label}
            </span>
          </label>
          <input
            id={name}
            name={name}
            ref={ref}
            {...inputProps}
            className='input border focus:outline-red-600 focus:bg-white outline outline-1 border-fade-gray leading-[60px] w-full px-20 rounded-full outline-fade-gray placeholder:text-fade-gray'
          />

          <div className='absolute top-1/2 -translate-y-1/2 right-4 border-l border-fade-gray box-content pl-4'>
            {icon}
          </div>
        </div>
        <span>
          {error && (
            <label className='label'>
              <span className='label-text-alt text-red-600'>{error}</span>
            </label>
          )}
        </span>
      </div>
    );
  }
);

export default FormController;
