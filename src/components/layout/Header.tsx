const Header = ({ stepId }: { stepId: number }) => {
  return (
    <div className='text-center'>
      <p className='text-warm-blue font-bold pb-2'>مرحله {stepId} از 3</p>
      <p className=' text-black  font-bold text-xl'>
        لطفا اطلاعات خود را با دقت وارد نمائید
      </p>
    </div>
  );
};

export default Header;
