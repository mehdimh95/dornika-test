import React from 'react';
import Image from 'next/image';

interface Propsbutton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  image: any;
}

const BlueButton: React.FC<Propsbutton> = ({
  children,
  image,
  ...attributes
}) => {
  return (
    <div className='flex  flex-col items-center'>
      <button
        {...attributes}
        className='bg-warm-blue w-44 text-white py-3 px-6 rounded-xl flex flex-row items-center gap-5'
      >
        {children}
        <Image src={image} width={24} height={24} alt='' />
      </button>
    </div>
  );
};

export default BlueButton;
