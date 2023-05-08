import React from 'react';

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='flex h-screen items-stretch py-8 p-24'>{children}</div>
  );
};

export default Container;
