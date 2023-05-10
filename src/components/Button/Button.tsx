import React from 'react';

interface Propsbutton {
  children: React.ReactNode;
}

const BlueButton: React.FC<Propsbutton> = ({ children }) => {
  return (
    <div className='flex  flex-col items-center'>
      <button className='bg-warm-blue w-44 text-white py-3 px-6 rounded-xl flex flex-row items-center justify-center gap-5'>
        {children}
      </button>
    </div>
  );
};

export default BlueButton;
