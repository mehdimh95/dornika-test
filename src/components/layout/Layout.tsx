import React from 'react';
import Aside from './Aside';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

const Layout: React.FC<{
  children: React.ReactNode;
  isNextDisabled?: boolean;
  isPrevDisabled?: boolean;
  nextButtonTable?: string;
  stepId: number;
  prevHref?: string;
}> = ({
  children,
  isPrevDisabled = false,
  isNextDisabled = true,
  nextButtonTable,
  stepId,
  prevHref,
}) => {
  return (
    <div className='flex h-screen items-stretch py-8 p-24'>
      <Aside stepId={stepId} />
      <Main>
        <Header stepId={stepId} />
        <section className='flex-1'>
          <Content>{children}</Content>
        </section>
        <Footer
          prevHref={prevHref}
          isPrevDisabled={isPrevDisabled}
          isNextDisabled={isNextDisabled}
          nextButtonTable={nextButtonTable}
        />
      </Main>
    </div>
  );
};

export default Layout;
