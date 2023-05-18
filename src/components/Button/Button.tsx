import classNames from 'classnames';
import React from 'react';
import Loading from './Loading';

interface Propsbutton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
}

const Button: React.FC<Propsbutton> = ({
  children,
  className,
  loading = false,
  disabled,
  ...buttonProps
}) => {
  return (
    <div className='flex  flex-col items-center'>
      <button
        disabled={loading || disabled}
        className={classNames(
          'disabled:text-white disabled:bg-fade-gray',
          className
        )}
        {...buttonProps}
      >
        {}
        {!loading ? children : <Loading />}
      </button>
    </div>
  );
};

export default Button;
