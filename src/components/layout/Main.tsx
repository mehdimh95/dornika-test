const Main: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='flex-1 bg-white rounded-l-2xl flex flex-col justify-between p-8'>
      {children}
    </div>
  );
};

export default Main;
