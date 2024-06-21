import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import AppRoutes from '@/app/routes';

import privateRoutes from './private-routes';

import { RootState } from '@/stores';
import Header from './header';

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
    <div className="drawer-content flex flex-col">
      <Header />
      <main
        className=" md:pt-4 pt-4 px-6 min-h-screen bg-neutral"
        ref={mainContentRef}
      >
        <AppRoutes routes={privateRoutes} />
      </main>
    </div>
  );
};

export default PageContent;
