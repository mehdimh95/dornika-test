import React from 'react';
import Aside from './Aside';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='flex h-screen items-stretch py-8 p-24'>
      <Aside />
      <Main>
        <Header />
        <section className='flex-1'>
          <Content>{children}</Content>
        </section>
        <Footer />
      </Main>
    </div>
  );
};

export default Layout;
