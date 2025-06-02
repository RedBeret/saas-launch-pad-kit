
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

const MainLayout = ({ children, showFooter = true }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
};

export default MainLayout;
