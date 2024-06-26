import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import AppRoutes from '@/app/routes';
import { RootState } from '@/stores';

import Header from './header';
import privateRoutes from './private-routes';

const PageContent: React.FC = () => {
  const mainContentRef = useRef<HTMLDivElement>(null);
  const { pageTitle } = useSelector((state: RootState) => state.header);

  // Scroll back to top on new page load
  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scroll({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [pageTitle]);

  return (
    <div className="flex flex-col h-full relative">
      <Header />
      <main className=" md:pt-4 pt-4 px-6  bg-neutral" ref={mainContentRef}>
        <AppRoutes routes={privateRoutes} />
      </main>
    </div>
  );
};

export default PageContent;
