import React from 'react';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import Select, { Props } from 'react-select';
import styles from './FormController.module.css';

interface IFormController extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
  error?: string;
  endAdornment?: React.ReactNode;
  type?: 'select' | 'text' | 'password';
  selectProps?: Props;
}

const FormController = React.forwardRef<HTMLInputElement, IFormController>(
  (
    {
      label,
      name,
      icon,
      error,
      endAdornment,
      type = 'text',
      selectProps,
      ...inputProps
    },
    ref
  ) => {
    const [isShow, setIsShow] = React.useState<boolean>(false);
    const handleToggleShowPassword = () => setIsShow((prev) => !prev);

    return (
      <div className='relative w-full'>
        <div className='flex flex-col gap-1'>
          <label className='label' htmlFor={name}>
            <span className='label-text text-base text-slate-600  font-bold absolute top-[-1] right-9 bg-white px-3'>
              {label}
            </span>
          </label>
          <div className='flex items-center justify-start gap-2 input border focus:outline-red-600 focus:bg-white  border-fade-gray leading-[60px] w-full py-7 rounded-full outline-fade-gray placeholder:text-fade-gray'>
            <div className='border-l border-fade-gray box-content pl-4'>
              {icon}
            </div>
            {type === 'select' ? (
              <Select
                {...selectProps}
                className={styles.select_container}
                placeholder={inputProps.placeholder}
              />
            ) : (
              <input
                id={name}
                name={name}
                ref={ref}
                type={type !== 'password' ? type : isShow ? 'text' : 'password'}
                {...inputProps}
                className='flex-1 outline-none bg-transparent'
              />
            )}

            {endAdornment}
          </div>
          {type === 'password' && (
            <div
              onClick={handleToggleShowPassword}
              role='button'
              className='absolute top-7 trans left-4 box-content pl-4 text-fade-gray  cursor-pointer p-2'
            >
              {!isShow ? (
                <HiOutlineEye size={18} />
              ) : (
                <HiOutlineEyeOff size={18} />
              )}
            </div>
          )}
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
